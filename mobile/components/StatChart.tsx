import React from 'react';
import { View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

const StatChart = ({
  openRate,
  clickRate,
}: {
  openRate: number;
  clickRate: number;
}) => {
  const data = [
    { x: 'Open', y: openRate },
    { x: 'Click', y: clickRate },
  ];

  console.log(VictoryTheme);

  return (
    <></>
    // <View style={{ width: '100%', height: 220 }}>
    //   <VictoryChart
    //     theme={VictoryTheme.material}
    //     domainPadding={20}
    //     height={200}
    //   >
    //     <VictoryBar data={data} style={{ data: { fill: '#1976d2' } }} />
    //   </VictoryChart>
    // </View>
  );
};

export default StatChart;
