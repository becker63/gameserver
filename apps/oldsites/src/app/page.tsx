// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";

export default function Page() {
  return (
    <Link href="/about" color="brand.100" _hover={{ color: "d8127d" }}>
      in rightmost center of page place 3 pane variably sized (1 large sqaure
      with gameplay, 1 demo of gui app and one demo of json/openapi) showcase of
      app with varying z levels so they overlap each other. on the left put the
      pitch: Game Server management for *people* get the bost of both worlds,
      control and ease of setup
    </Link>
  );
}
