import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../helpers/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TitleText} from '../../components';
import {LineChart, XAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {Path} from 'react-native-svg';

interface LineProps {
  line: string;
}
import {Defs, LinearGradient, Stop} from 'react-native-svg';

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'rgb(194, 65, 244)'} stopOpacity={0.8} />
      <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2} />
    </LinearGradient>
  </Defs>
);

export const Shadow = (props: Partial<LineProps>) => {
  const {line} = props as LineProps;
  return (
    <Path
      key={'shadow'}
      y={2}
      x={1}
      d={line}
      fill={'none'}
      strokeWidth={4}
      stroke={'rgba(134, 65, 244, 0.2)'}
    />
  );
};

export const composeDataWithAverageValue = (
  valuesArray: number[],
  averageValuesArray: number[],
) => {
  return [
    {
      data: valuesArray,
      svg: {strokeWidth: 3, stroke: COLORS.NEON_BLUE},
    },
    {
      data: averageValuesArray,
      svg: {strokeWidth: 3, stroke: COLORS.AQUAMARINE},
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      svg: {strokeWidth: 1.5, strokeDasharray: [8, 16]},
    },
    {
      data: [90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
      svg: {strokeWidth: 1.5, strokeDasharray: [8, 16]},
    },
    {
      data: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
      svg: {strokeWidth: 1.5, strokeDasharray: [8, 16]},
    },
  ];
};

interface MonthChipProps {
  color: string;
  title: string;
}
const MonthChip: React.FC<MonthChipProps> = ({color, title}) => {
  return (
    <View style={styles.container_monthchip}>
      <View style={[styles.filled_circle, {backgroundColor: color}]} />
      <View style={{width: 10}} />
      <Text style={styles.description_text}>{title}</Text>
    </View>
  );
};

const TopCard = () => {
  return (
    <View style={styles.part1}>
      <View
        style={{
          width: '85%',
        }}>
        <TitleText title="September Activities" size="small" />
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
          }}>
          <MonthChip color={COLORS.PERSIAN_BLUE} title={'Current Month'} />
          <View style={{width: 10}} />
          <MonthChip
            color={COLORS.DARK_POSTAL_GREEN}
            title={'Previous Month'}
          />
        </View>
      </View>
      <MaterialIcons
        name={'play-circle-outline'}
        size={35}
        color={COLORS.CADET_GREY}
      />
    </View>
  );
};

const BottomCard = () => {
  const data2 = [80, 10, 95, 48, 24, 67, 51, 12, 73, 60];
  const data1 = [40, 50, 35, 78, 44, 97, 11, 17, 33, 20];

  const dataWithAverageValue = composeDataWithAverageValue(data2, data1);
  return (
    <View>
      <LineChart
        style={{height: 150}}
        gridMin={5}
        gridMax={5}
        data={dataWithAverageValue}
        curve={shape.curveNatural}
        svg={{
          stroke: 'url(#gradient)',
        }}
        contentInset={{top: 20, bottom: 20}}></LineChart>
    </View>
  );
};
//Main Component
const ChartCard = () => {
  return (
    <View style={styles.container}>
      <TopCard />
      <BottomCard />
    </View>
  );
};

export default ChartCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
  },
  container_monthchip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  part1: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  description_text: {color: COLORS.CADET_GREY, fontWeight: '600'},
  filled_circle: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
  },
});
