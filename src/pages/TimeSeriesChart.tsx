import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from 'recharts';
import axios from 'axios';

type DataItem = {
  time: string;
  id: string;
  value_area: number;
  value_bar: number;
};

const TimeSeriesChart: React.FC = () => {
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
    setHighlightedId(data.id);
  };

  const customTooltip = ({ active, payload }: any) => {
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
        <YAxis />
        <Tooltip content={customTooltip} />
        <Legend />
        <Area
          type="monotone"
          dataKey="value_area"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="value_bar" barSize={20} fill="#413ea0" />
      </ComposedChart>
      <div>
        {/* Buttons for ID filtering. You might want to map over distinct IDs or some predefined set of IDs. */}
        {['성북구', '강남구', '노원구', '중랑구'].map(id => (
          <button key={id} onClick={() => setHighlightedId(id)}>
            Highlight {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSeriesChart;
