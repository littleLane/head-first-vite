/*
 * @Author: qianzhi
 * @Date: 2022-04-27 23:25:17
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-04-27 23:29:11
 * @FilePath: /head-first-vite/src/components/StyledComponent/index.tsx
 */
import styled from "styled-components";

const Title = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`;

export function StyledComponent() {
  return <Title>This a StyledComponent</Title>;
}
