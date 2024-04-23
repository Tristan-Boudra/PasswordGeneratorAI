import { cn } from "@/src/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-25 lg:h-32": size === "lg",
        "h-32 lg:h-48": size === "xl",
        "h-48 lg:h-64": size === "2xl",
        "h-64 lg:h-96": size === "3xl",
        "h-96 lg:h-[430px]": size === "4xl",
      })}
    ></div>
  );
};
