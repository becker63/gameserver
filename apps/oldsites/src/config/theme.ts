/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

const colors = {
  fc: "black",
  sc: {
    w1: "rgb(248, 249, 250)",
    w2: "rgb(233, 236, 239)",
    w3: "rgb(222, 226, 230)",
    w4: "rgb(206, 212, 218)",
    w5: "rgb(173, 181, 189)",
    b1: "rgb(108, 117, 125)",
    b2: "rgb(73, 80, 87)",
    b3: "rgb(52, 58, 64)",
    b4: "rgb(33, 37, 41)",
  },
};

export const theme = extendTheme({
  colors: colors,
});
