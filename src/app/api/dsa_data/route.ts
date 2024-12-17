"use server"
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { NextRequest } from 'next/server';


// const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`); // Mock data

export async function GET(req: NextRequest) {
    const filePath = path.join(process.cwd(), 'public', "resources", 'dsa_data.csv'); // File path
    const fileContent = fs.readFileSync(filePath, 'utf-8'); // Read CSV file

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '25');

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    // Parse CSV content to JSON
    const records = parse(fileContent, {
        columns: true, // Use first row as keys
        skip_empty_lines: true, // Skip empty rows
    });
    const paginatedItems = records.slice(startIndex, endIndex);
    return new Response(JSON.stringify({
        page,
        limit,
        total: records.length,
        items: paginatedItems,
    }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
