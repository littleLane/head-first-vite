/*
 * @Author: qianzhi
 * @Date: 2022-04-28 09:11:36
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-28 09:11:37
 * @FilePath: /head-first-vite/src/components/EmotionComponent/TitleWrapper.tsx
 */
import styled from "@emotion/styled";

// Create a <Wrapper> react component that renders a <section>
// with a border and margin-bottom
export default styled("section")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 0.25rem solid hsl(0, 0%, 80%);
  margin-bottom: 1.5rem;
`;
