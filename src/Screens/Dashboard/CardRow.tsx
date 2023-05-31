import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../helpers/colors';
import {MyText} from '../../components';

interface ItemType {
  id: number;
  text1: string;
  text2: string;
  icon1: string;
  icon2: string;
  color: string;
}

const data: Array<ItemType> = [
  {
    id: 1,
    text1: 'Tips on increasing your go forword',
    text2: 'Lorem ispum dorem sir, amet consectur golem',
    icon1: 'notifications',
    icon2: 'not-started',
    color: COLORS.PERSIAN_BLUE,
  },
  {
    id: 2,
    text1: 'Weekly task has been completed.',
    text2: 'Lorem ispum dorem sir, amet consectur golem',
    icon1: 'play-circle-fill',
    icon2: 'play-circle-fill',
    color: COLORS.DARK_POSTAL_GREEN,
  },
];
const CardRow = () => {
  const renderItem = ({item, index}: ListRenderItemInfo<ItemType>) => {
    return (
      <View
        key={index}
        style={[
          styles.card_container,
          {
            backgroundColor: item.color,
          },
        ]}>
        <View style={styles.row_container}>
          <View style={styles.icon_container}>
            <MaterialIcons
              name={item.icon1}
              size={35}
              color={COLORS.GHOST_WHITE}
            />
          </View>
          <View style={styles.text_container}>
            <MyText title={item.text1} size="medium" />
          </View>
        </View>
        <View style={styles.row_container}>
          <View style={styles.text_container}>
            <MyText title={item.text2} size="small" />
          </View>
          <View style={styles.icon_container}>
            <MaterialIcons
              name={item.icon2}
              size={35}
              color={COLORS.GHOST_WHITE}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={{
        paddingVertical: 10,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
};

export default CardRow;

const styles = StyleSheet.create({
  card_container: {
    height: 150,
    width: 300,
    marginHorizontal: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  row_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon_container: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_container: {width: '80%'},
});
