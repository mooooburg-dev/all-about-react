import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector?: string;
  children: any;
}

// 외부 DOM 에 렌더링 하는 역할
export default function Portal({ children, selector }: Props) {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
}
