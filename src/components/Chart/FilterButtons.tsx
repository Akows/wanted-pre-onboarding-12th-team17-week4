import React from 'react';
import styled from 'styled-components';

type FilterButtonsProps = {
  highlightedId: string | null;
  setHighlightedId: React.Dispatch<React.SetStateAction<string | null>>;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  highlightedId,
  setHighlightedId,
}) => {
  return (
    <div>
      <StyledButton onClick={() => setHighlightedId(null)}>없음</StyledButton>
      {['성북구', '강남구', '노원구', '중랑구'].map(id => (
        <StyledButton
          key={id}
          onClick={() => setHighlightedId(id)}
          // isActive 여부를 파악하기 위해 해당 버튼의 id가 highlighted된 id인지 여부를 파악하여 상태 변수를 제어한다.
          isActive={id === highlightedId}
        >
          {id}
        </StyledButton>
      ))}
    </div>
  );
};

export default FilterButtons;

// 초기화 버튼과 다른 버튼은 스타일이 완전히 동일하지만 isActive 속성 때문에 그대로 사용할 수가 없다.
// 이때 사용할 수 있는 것이 옵셔널 속성. isActive 속성에 옵셔널을 걸어 존재해도 되고 안해도 되는 속성으로 만든다.
// 이렇게 되면 초기화 버튼에 isActive 속성이 존재하지않아도 에러가 발생되지 않는다.

const StyledButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? 'lightgray' : 'rgba(0, 0, 0, 0.7)'}; // 투명도 적용된 검은색 배경
  color: white; // 흰색 텍스트
  font-weight: bold; // 진한 글자
  border: none; // 경계선 제거
  border-radius: 5px; // 모서리 둥글게
  margin: 0 5px; // 버튼 간격
  padding: 5px 10px; // 내부 패딩
  cursor: pointer; // 마우스 포인터 변경
  transition: background-color 0.2s; // 배경색 변경 애니메이션

  &:hover {
    background-color: lightgray; // 마우스 오버시 색 변경
  }
`;
