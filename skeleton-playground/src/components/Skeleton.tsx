import styled from '@emotion/styled/macro';
import { keyframes, css } from '@emotion/react';
import { useMemo } from 'react';

interface Props {
  width?: number;
  height?: number;
  circle?: boolean;
  rounded?: boolean;
  count?: number;
  unit?: string; // px, % 등의 단위
  animation?: boolean; // 애니메이션 유무
  color?: string; // 스켈레톤의 배경 컬러
  style?: React.CSSProperties; // 스켈레톤의 추가적인 스타일 객체
}

const pulseKeyframe = keyframes`
0% {
  opacity: 1
}
50% {
  opacity: 0.4
}
100% {
  opacity: 1;
}
`;
const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`;

const Base = styled.span<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && 'border-radius: 8px'};
  ${({ circle }) => circle && 'border-radius: 50%'};
  ${({ width, height }) => (width || height) && 'display: block'};
  ${({ animation }) => animation && pulseAnimation};
  width: ${({ width, unit }) => width && unit && `${width}${unit}`};
  height: ${({ height, unit }) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

export default function Skeleton({
  animation = true,
  width,
  height,
  circle,
  rounded,
  count,
  unit = 'px',
  color = '#F4F4F4',
  style,
}: Props) {
  // count 6 =>  '------'
  const content = useMemo(
    () => [...Array({ length: count })].map(() => '-').join(''),
    [count]
  );
  return (
    <Base
      animation={animation}
      width={width}
      height={height}
      circle={circle}
      rounded={rounded}
      count={count}
      unit={unit}
      color={color}
      style={style}
    >
      <Content>{content}</Content>
    </Base>
  );
}
