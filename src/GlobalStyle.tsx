import { css, Global } from "@emotion/core"
import { withTheme } from "emotion-theming"
import React from "react"
import { Theme } from "./themes"

function GlobalStyle(props: { theme: Theme }) {
  const { theme } = props

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Whitney";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/whitney-300.woff2") format("woff2"),
            url("/fonts/whitney-300.woff") format("woff");
        }

        @font-face {
          font-family: "Whitney";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/whitney-400.woff2") format("woff2"),
            url("/fonts/whitney-400.woff") format("woff");
        }

        @font-face {
          font-family: "Whitney";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/whitney-500.woff2") format("woff2"),
            url("/fonts/whitney-500.woff") format("woff");
        }

        @font-face {
          font-family: "Whitney";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/whitney-600.woff2") format("woff2"),
            url("/fonts/whitney-600.woff") format("woff");
        }

        @font-face {
          font-family: "Whitney";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/whitney-700.woff2") format("woff2"),
            url("/fonts/whitney-700.woff") format("woff");
        }

        @font-face {
          font-family: "SourceCodePro";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/source-code-pro-400.woff2") format("woff2"),
            url("/fonts/source-code-pro-400.woff") format("woff");
        }

        @font-face {
          font-family: "SourceCodePro";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/source-code-pro-600.woff2") format("woff2"),
            url("/fonts/source-code-pro-600.woff") format("woff");
        }

        body {
          margin: 0;
          font-family: ${theme.fonts.sans};
          line-height: 1;

          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          background: ${theme.background.primary};
          color: ${theme.text.normal};
        }

        pre,
        code {
          font-family: ${theme.fonts.mono};
        }

        a {
          color: ${theme.text.link};

          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        img {
          text-indent: 100%;
          white-space: nowrap;
          overflow: hidden;
        }

        ::-webkit-scrollbar {
          width: 14px;
          height: 14px;
          background-color: ${theme.background.primary};
        }

        ::-webkit-scroll-corner {
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.color === "dark" ? "#202225" : "#e3e5e8"};
          border: 3px solid ${theme.background.primary};
          border-radius: 7px;
          background-clip: padding-box;
        }

        ::-webkit-scrollbar-track-piece {
          background-color: ${theme.color === "dark" ? "#2f3136" : "#f6f6f7"};
          border: 3px solid ${theme.background.primary};
          border-radius: 7px;
        }

        ::-webkit-resizer {
          background-color: ${theme.background.primary};
        }
      `}
    />
  )
}

export default withTheme(GlobalStyle)
