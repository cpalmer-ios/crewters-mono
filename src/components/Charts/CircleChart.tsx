import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View, Animated} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {width} from '../../constants/Dimensions';

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  backgroundColor: '#fff',
  color: (opacity = 1) => `rgba(36, 76, 102, ${opacity})`,
  strokeWidth: 3,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

export const CircleChart = ({style, hideLegend, data}) => {
  return (
    <>
      <ProgressChart
        style={style}
        data={{
          data,
        }}
        width={width / 2}
        height={width / 2.05}
        strokeWidth={15}
        radius={14}
        chartConfig={chartConfig}
        hideLegend={hideLegend}
      />
    </>
  );
};
