/*
 * @Author: qianzhi
 * @Date: 2022-05-05 08:14:56
 * @LastEditors: qianzhi
 * @LastEditTime: 2022-05-05 08:59:56
 * @FilePath: /head-first-vite/module-federation/vite-remote/src/components/Button.tsx
 */
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return <button type="button" {...props} />;
}
