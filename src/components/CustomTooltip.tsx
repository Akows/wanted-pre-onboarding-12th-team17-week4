// Recharts의 Tooltip에서 content prop에 사용되는 컴포넌트는
// 함수 컴포넌트의 형식을 따르지 않고 일반 컴포넌트 형식을 따라야한다.
// props의 경우 부모 컴포넌트에서 인자로 전달하지 않아도
// Tooltip 컴포넌트의 content 속성에 CustomTooltip 컴포넌트를 적용하면 Recharts에서 알아서 주입한다.

export const CustomTooltip = (props: any) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const { id, value_area, value_bar } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: '5px',
        }}
      >
        <p>ID: {id}</p>
        <p>Value Area: {value_area}</p>
        <p>Value Bar: {value_bar}</p>
      </div>
    );
  }

  return null;
};
