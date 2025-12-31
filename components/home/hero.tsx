import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { StripedPattern } from "../magicui/striped-pattern";
import { HeroCard } from "./hero-card";

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  button2?: {
    text: string;
    url: string;
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  };
}

const Hero = ({
  heading = "Connecting employees to their financial future.",
  description = "Boost financial wellbeing with expert mortgage & financial planning advice",
  button = {
    text: "View Services",
    url: "/#services",
  },
  button2 = {
    text: "Contact Us",
    url: "/contact-us",
  },
  reviews = {
    count: 200,
    avatars: [
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: HeroProps) => {
  return (
    <section className="relative lg:pt-28 md:pt-16 pt-12 min-h-screen">
      <StripedPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] z-0" />
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl px-2 text-primary">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <div className="space-x-3">
          <Button className="mt-5" variant={'secondary'}>
            <a href={button.url}>{button.text}</a>
          </Button>
          <Button className="mt-5" variant={'default'}>
            <a href={button2.url}>{button2.text}</a>
          </Button>
        </div>

        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar key={index} className="size-10 border">
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-yellow-500 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-left text-md font-sm text-muted-foreground">
              from {reviews.count}+ reviews
            </p>
          </div>
        </div>
      </div>
      <HeroCard />
    </section>
  );
};

export default Hero;