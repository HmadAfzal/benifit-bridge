"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "lucide-react";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-white" />,
    title: "mortgages",
    description: "Buying a first home!",
    date: "Just now",
    iconClassName: "text-muted-foreground",
    titleClassName: "text-muted-foreground",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-white" />,
    title: "Remortgages",
    description: "Im moving to a new home!",
    date: "2 days ago",
    iconClassName: "text-muted-foreground",
    titleClassName: "text-muted-foreground",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-white" />,
    title: "New",
    description: "Im buying to let it out",
    date: "Today",
    iconClassName: "text-muted-foreground",
    titleClassName: "text-muted-foreground",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function HeroCard() {
  return (
    <div className="flex w-full items-center justify-center py-20 max-w-[100vw] overflow-hidden pb-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { HeroCard };