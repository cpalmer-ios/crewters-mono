import {View, Text, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

export const Charts = ({labels, data}: any) => {
  return (
    <View>
      {/* <Text>Daily Summary</Text> */}
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(36, 76, 102, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
          style: {
            borderRadius: 15,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#fff',
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          marginLeft: 0,
          marginRight: 0,
          borderRadius: 15,
        }}
      />
    </View>
  );
};
