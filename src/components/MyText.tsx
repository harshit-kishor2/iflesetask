import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../helpers/colors';

const SIZE = {
  medium: 18,
  small: 15,
};

interface Props {
  title: string;
  size: string;
}

const MyText: FC<Props> = ({title, size}) => {
  const styles = getStyle(size);
  return <Text style={styles.greeting_text}>{title}</Text>;
};

export default MyText;

const getStyle = (size: string) =>
  StyleSheet.create({
    greeting_text: {
      fontSize: SIZE[size as keyof typeof SIZE],
      color: COLORS.WHITE,
      opacity: size == 'small' ? 0.7 : 1,
    },
  });
