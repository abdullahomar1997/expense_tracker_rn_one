import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

const graphicColor = ['#8391A3', '#787885', '#212121']; // Colors
// const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const wantedGraphicData = [{ x: 'Liquid', y: 35 }, { x: 'Iced', y: 90 }, { x: 'Total', y: 55 }];
// const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }];
const defaultGraphicData = [{ x: 'Liquid', y: 0 }, { x: 'Iced', y: 0 }, { x: 'Total', y: 100 }]; // Data used to make the animate prop work

const PieChartExample = () => {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <View style={{justifyContent:"center"}}>
      <VictoryPie
        animate={{ easing: 'exp' }}
        data={graphicData}
        innerRadius={20}
        style={{
                        data: {
                            fillOpacity: 0.9, stroke: "#fff", strokeWidth: 2
                        },
                        labels: {
                            fill: "#212121"
                        }
                    }}
      />
    </View>
  );
}

export default PieChartExample;
