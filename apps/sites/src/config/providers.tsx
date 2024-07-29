// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
