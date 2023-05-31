import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TitleText} from '../../components';
import {COLORS} from '../../helpers/colors';

interface Props {
  title: string;
  description: string;
  totalCall: string;
  status: string;
  statusValue: string;
}
const InnerCard: FC<Props> = ({
  title,
  description,
  totalCall,
  status,
  statusValue,
}) => {
  const styles = getStyles(status == 'up');
  return (
    <View style={styles.card_container}>
      <TitleText title={title} size="small" />
      <View style={styles.card_inner_container}>
        <View style={styles.part1}>
          <Text style={styles.total_calls_count}>{totalCall}</Text>
          <View style={{width: 10}} />
          <Text style={styles.total_calls_text}>Calls</Text>
        </View>
        <View style={styles.part1}>
          <MaterialIcons
            name={status === 'up' ? 'trending-up' : 'trending-down'}
            size={15}
            color={
              status === 'up' ? COLORS.DARK_POSTAL_GREEN : COLORS.INDIAN_RED
            }
          />
          <View style={{width: 10}} />
          <Text style={styles.total_calls_text}>{statusValue}%</Text>
        </View>
      </View>
      <Text style={styles.description_text}>{description}</Text>
    </View>
  );
};
const ActivityCardList = () => {
  const styles = getStyles(false);
  return (
    <View style={styles.container}>
      <InnerCard
        title="Activities this week"
        description="Avg 26 calls per day"
        totalCall="136"
        status="down"
        statusValue="7.6"
      />
      <View style={{width: 10}} />
      <InnerCard
        title="Activities this month"
        description="Avg 986 calls per day"
        totalCall="136"
        status="up"
        statusValue="10.6"
      />
    </View>
  );
};

export default ActivityCardList;

const getStyles = (status: boolean) =>
  StyleSheet.create({
    container: {
      height: 120,
      width: '100%',
      flexDirection: 'row',
      marginTop: 10,
    },
    card_container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: COLORS.WHITE,
      borderRadius: 10,
      padding: 10,
    },
    card_inner_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    total_calls_count: {
      fontSize: 20,
      color: status ? COLORS.DARK_POSTAL_GREEN : COLORS.INDIAN_RED,
      fontWeight: 'bold',
    },
    total_calls_text: {
      fontSize: 15,
      color: status ? COLORS.DARK_POSTAL_GREEN : COLORS.INDIAN_RED,
    },
    part1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    description_text: {
      color: COLORS.CADET_GREY,
      fontWeight: '600',
    },
  });
