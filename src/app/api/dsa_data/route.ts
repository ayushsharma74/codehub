"use server";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "resources",
    "dsa_data.csv"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "25");
  const difficultyFilter = searchParams.get("difficulty") || "default";
  const topicFilter = searchParams.get("topic") || "default";
  const companyFilter = searchParams.get("company") || "default";
  const searchQuery = searchParams.get("search")?.trim() || ""; // Get the search query, default to empty string


  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  let filteredRecords = [...records];

  //Filtering by difficulty
  if (difficultyFilter !== "default") {
    filteredRecords = filteredRecords.filter(
      (record: Record<string, string>) =>
        record["difficulty"] ===
        difficultyFilter[0].toUpperCase() + difficultyFilter.slice(1)
    );
  }
  // Filtering by topic
  if (topicFilter !== "default") {
    filteredRecords = filteredRecords.filter(
      (record: Record<string, string>) => {
        const topics = record["related_topics"]?.split(",") || [];
        return topics.some((topic) => topic.trim() === topicFilter);
      }
    );
  }
  if (companyFilter !== "default") {
    filteredRecords = filteredRecords.filter(
      (record: Record<string, string>) => {
        const companies = record["companies"]?.split(",") || [];
        return companies.some((company) => company.trim() === companyFilter);
      }
    );
  }

//   if (searchQuery !== "null") {
//     filteredRecords = filteredRecords.filter((record: Record<string, string>) => {
//         return record["title"]?.toLowerCase().includes(searchQuery.toLowerCase()); // Case insensitive search
//     });
// }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedItems = filteredRecords.slice(startIndex, endIndex);
  return new Response(
    JSON.stringify({
      page,
      limit,
      total: filteredRecords.length,
      items: paginatedItems,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
