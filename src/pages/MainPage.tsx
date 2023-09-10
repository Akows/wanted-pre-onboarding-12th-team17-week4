import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';

import Chart from '../components/Chart';
import { ChartTitle } from '../components/ChartTitle';

const MainPage: React.FC = () => {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error('Context API Provider가 로딩되지 않았습니다.');
  }

  const { state, dispatch } = context;

  // Context API 테스트 1
  console.log(state);

  // Context API 테스트 2
  const handleClick = (componentName: string) => {
    dispatch({
      type: 'FETCH_SUCCESS',
      component: componentName,
    });
  };

  return (
    <>
      <ChartTitle />
      <Chart />
    </>
  );
};

export default MainPage;
