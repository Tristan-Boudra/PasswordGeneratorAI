import { twx } from "@/src/lib/twx";

export const Layout = twx.div((props) => [
  "max-w-7xl w-full flex flex-col gap-4 mx-auto px-4 py-2",
  props.className,
]);

export const LayoutTitle = twx.h1((props) => [
  "text-4xl font-bold",
  props.className,
]);

export const LayoutDescription = twx.h2((props) => [
  "text-lg text-muted-foreground",
  props.className,
]);

export const LayoutText = twx.p((props) => [
  "text-normal text-muted-foreground",
  props.className,
]);

export const LayoutTextThin = twx.p((props) => [
  "text-sm font-extralight text-muted-foreground",
  props.className,
]);
