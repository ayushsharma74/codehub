import FlickeringGrid from "@/components/ui/flickering-grid";
import LandingContent from "./LandingContent";

export function LandingPage() {
  return (
    <div className="relative size-[640px] rounded-lg w-full bg-background overflow-hidden border">
      {/* <FlickeringGrid
        className="z-0 relative inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#ffffff"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={3000}
      /> */}
      <LandingContent
        ButtonText="Get Started"
        HeadingText="Ab DSA hoga easy, bas शुरू karo yaha se!"
        SubHeadingText="Solve 5,000+ Problems from most famous sheets asked in various companies here"
      />
    </div>
    
  );
}
