import React, { useState, useEffect } from 'react';
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Cell,
} from 'recharts';
import axios from 'axios';
import { CustomTooltip } from './CustomTooltip';

type DataItem = {
  time: string;
  id: string;
  value_area: number;
  value_bar: number;
};

const Chart: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://fourth-9qyivvzjg-akows.vercel.app/api/server`,
        );
        // 데이터를 배열로 변환
        if (response.data && typeof response.data === 'object') {
          const transformedData = Object.keys(response.data).map(key => ({
            time: key,
            ...response.data[key],
          }));

          setData(transformedData);
        } else {
          console.error('Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    }

    fetchData();
  }, []);

  const handleBarClick = (data: any) => {
    // data와 부속 값들이 제대로 존재할 경우에만 하이라이트 id를 지정.
    if (
      data &&
      data.activePayload &&
      data.activePayload[0] &&
      data.activePayload[0].payload
    ) {
      setHighlightedId(data.activePayload[0].payload.id);
    }
    // 그렇지 않은 경우 하이라이트 id를 null값으로 되돌린다.
    // 에러 방지 및 하이라이트 해제 목적을 겸한다.
    else {
      setHighlightedId(null);
    }
  };

  return (
    <div>
      <ComposedChart
        width={1200}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        onClick={handleBarClick}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="key" />

        {/* 좌측 Y축 (value_area 기준) */}
        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="value_area"
          stroke="#fa5a20"
          tickCount={6}
          domain={[0, 500]}
        />
        {/* 우측 Y축 (value_bar 기준) */}
        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="value_bar"
          stroke="#413ea0"
          tickCount={7}
          domain={[0, 20000]}
        />

        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="value_area"
          stroke="#fa5a20"
          fill={highlightedId ? '#fa5a20' : '#f6823f'}
        />
        <Bar yAxisId="right" dataKey="value_bar" barSize={20}>
          {data.map((entry, index) => {
            const fill = entry.id === highlightedId ? '#413ea0' : '#413ea07e';
            return <Cell key={`cell-${index}`} fill={fill} />;
          })}
        </Bar>
      </ComposedChart>
      <div>
        {['성북구', '강남구', '노원구', '중랑구'].map(id => (
          <button key={id} onClick={() => setHighlightedId(id)}>
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chart;
