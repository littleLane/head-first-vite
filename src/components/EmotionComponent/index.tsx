/*
 * @Author: qianzhi
 * @Date: 2022-04-28 09:08:51
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 09:17:18
 * @FilePath: /head-first-vite/src/components/EmotionComponent/index.tsx
 */
// The next line is required for the css prop to work!
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import Title from "./Title";
import TitleWrapper from "./TitleWrapper";

// JS object styles
const flexColumnCss = css({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

// Example of using css prop in reusable component in place of styled
const Button = ({ variation = "primary", ...rest }) => (
  <button
    css={[
      // css prop accepts arrays.
      // This makes it easy to use large blocks of conditional styles
      css`
        outline: none;
        border: none;
        display: block;
        box-sizing: border-box;
        padding: 16px 32px;
        font-size: 0.75rem;
        font-weight: 600;
        box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 4px inset;
        text-align: center;
        cursor: pointer;
      `,

      variation === "primary" &&
        css`
          background-color: rgb(111, 62, 209);
          color: rgb(236, 233, 251);
        `,
      // string and object styles can be mixed
      variation === "secondary" && {
        backgroundColor: `rgb(236, 233, 251)`,
        color: `rgb(111, 62, 209)`,
      },
    ]}
    {...rest}
  />
);

export function EmotionComponent() {
  return (
    <div>
      <Global
        styles={css`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "avenir next",
              avenir, "helvetica neue", helvetica, Ubuntu, roboto, noto,
              "segoe ui", arial, sans-serif;
            color: rgb(39, 34, 17);
            background-color: hsl(0, 0%, 98%);
            padding: 1rem;
          }

          & * {
            box-sizing: border-box;
          }
        `}
      />
      <TitleWrapper>
        <Title>Emotion Component</Title>
        <a
          href="https://github.com/emotion-js/emotion"
          css={{ fontSize: "1.25rem" }}
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
      </TitleWrapper>
      <div
        css={css`
          background-color: rgb(32, 32, 69);
          color: rgb(236, 233, 251);
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          align-items: center;
          justify-content: center;
          padding: 32px;
          flex-wrap: nowrap;
          border-width: 1px;
          border-style: solid;
          border-color: rgb(32, 32, 69);
        `}
      >
        <div css={flexColumnCss}>
          <span
            css={[
              css`
                font-size: 1.25em;
              `,
              css`
                border-bottom: 4px solid rgb(191, 220, 232);
                display: block;
                font-weight: 900;
                font-size: 2rem;
                margin-bottom: 0.5rem;
              `,
            ]}
          >
            Your Title Here
          </span>
          <span
            css={css`
              font-size: 1em;
              margin-bottom: 0;
            `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div css={flexColumnCss}>
          <Button variation="primary">Primary</Button>
          <Button variation="secondary">Secondary</Button>
          <span
            css={{
              fontSize: "0.75em",
            }}
          >
            This is some smaller text that adds additional detail.
          </span>
        </div>
      </div>
    </div>
  );
}
