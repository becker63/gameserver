// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";

export default function Page() {
  return (
    <Link href="/about" color="brand.100" _hover={{ color: "d8127d" }}>
      About
    </Link>
  );
}
