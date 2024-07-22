import React from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "./lib/utils";
import { Book } from "../types";

interface BookArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  notitle?: boolean;
}

export function BookArtwork({
  book,
  aspectRatio = "portrait",
  width,
  height,
  className,
  notitle,
  ...props
}: BookArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div
        className={cn(
          "overflow-hidden rounded-md",
          notitle && "rounded-b-none"
        )}
      >
        {book && book.image_id ? (
          <img
            src={`https://www.artic.edu/iiif/2/${book.image_id}/full/${width},/0/default.jpg`}
            alt={book.title}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
        ) : (
          <Skeleton className="w-full h-full" />
        )}
      </div>
      {book && (book.title || book.artist_display) && !notitle ? (
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{book.title}</h3>
          <p className="text-xs text-muted-foreground">{book.artist_display}</p>
        </div>
      ) : (
        <Skeleton className="space-y-1 text-sm" />
      )}
    </div>
  );
}
