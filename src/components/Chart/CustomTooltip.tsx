// Recharts의 Tooltip에서 content prop에 사용되는 컴포넌트는
// 함수 컴포넌트의 형식을 따르지 않고 일반 컴포넌트 형식을 따라야한다.
// props의 경우 부모 컴포넌트에서 인자로 전달하지 않아도
// Tooltip 컴포넌트의 content 속성에 CustomTooltip 컴포넌트를 적용하면 Recharts에서 알아서 주입한다.

import styled from 'styled-components';

export const CustomTooltip = (props: any) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const { id, value_area, value_bar } = payload[0].payload;
    return (
      <TooltipContainer>
        <TooltipText>ID: {id}</TooltipText>
        <TooltipText>Value Area: {value_area}</TooltipText>
        <TooltipText>Value Bar: {value_bar}</TooltipText>
      </TooltipContainer>
    );
  }

  return null;
};

const TooltipContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
`;

const TooltipText = styled.p`
  color: white;
  margin: 0;
`;
