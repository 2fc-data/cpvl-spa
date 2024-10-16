import { css, CSSProp } from "styled-components";

interface Theme {
  colors: {
    spaceCadet1: string;
    spaceCadet2: string;
    oxfordBlue: string;
    blueSky: string;
    blueSky1: string;
    blueSky2: string;
    green: string;
    green1: string;
    green2: string;
    greenDark: string;
    yellow: string;
    yellow1: string;
    yellow2: string;
    white: string;
    black: string;
    success: string;
    danger: string;
    warning: string;
    grayLight: string;    
    hover: string;
    active: string;
  };
  typography: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  transitions: {
    easeInOut: string;
  };
}

// Define the media query type
interface MediaQuery {
  xxxl: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  xxl: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  xl: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  lg: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  md: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  sm: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
  xs: (strings: TemplateStringsArray, ...args: CSSProp[]) => ReturnType<typeof css>;
}

export const theme: Theme = {
  colors: {
    spaceCadet1: "#111C44",
    spaceCadet2: "#1B254B",
    oxfordBlue: "#0B1437",
    blueSky: "#2D72B9", 
    blueSky1: "#4682B4",
    blueSky2: "#87CEEB",
    green: "#6a9b86",
    green1: "#174033",
    green2: "#82A650",
    greenDark: "#002730",
    yellow: "#F9E457",
    yellow1: "#F2CB05",
    yellow2: "#FFCE20",
    white: "#ffffff",
    black: "#000000",
    success: "#01B574",
    danger: "#EE5D50",
    warning: "#FFCE20",
    grayLight: "#F7F7F7",
    hover: "",
    active: "",
  },

  typography: {
    fontFamily: `"DM Sans", sans-serif`,
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },

  transitions: {
    easeInOut: "all 0.3s ease-in-out",
  },
};

export const media: MediaQuery = {
  xxxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxxl}) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
  `,
};
