import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../helpers/colors';
import {MyText} from '../../components';
import {ProgressCircle} from 'react-native-svg-charts';

const ProgressCard = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.part1}>
        <ProgressCircle
          style={{height: 100}}
          progress={0.76}
          progressColor={COLORS.WHITE}
          backgroundColor={COLORS.NEON_BLUE}
        />
        <View style={styles.overflow_text}>
          <MyText title="76%" size="medium" />
        </View>
      </View>
      <View style={styles.part2}>
        <MyText title="Overall Task Completion" size="medium" />
        <MyText
          title="Achivement agains total calls targeted for the most of September"
          size="small"
        />
      </View>
    </View>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({
  constainer: {
    height: 120,
    backgroundColor: COLORS.PERSIAN_BLUE,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  part1: {width: '25%', justifyContent: 'center'},
  part2: {width: '65%', justifyContent: 'center'},

  overflow_text: {
    position: 'absolute',
    right: 0,
    left: 0,
    alignItems: 'center',
  },
});
