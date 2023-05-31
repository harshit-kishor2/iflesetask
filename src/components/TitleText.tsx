import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../helpers/colors';

const SIZE = {
  large: 30,
  medium: 25,
  small: 15,
};

interface Props {
  title: string;
  size: string;
}

const TitleText: FC<Props> = ({title, size}) => {
  const styles = getStyle(size);
  return <Text style={styles.greeting_text}>{title}</Text>;
};

export default TitleText;

const getStyle = (size: string) =>
  StyleSheet.create({
    greeting_text: {
      fontSize: SIZE[size as keyof typeof SIZE],
      fontWeight: 'bold',
      color: COLORS.PERSIAN_BLUE,
    },
  });
