import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../helpers/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TitleText} from '../../components';

interface ButtonProps {
  title: string;
  active: boolean;
}
interface CardContainerProp {
  title: string;
  description: string;
  completed: string;
  pending: string;
}
const Button: FC<ButtonProps> = ({title, active}) => {
  return (
    <View
      style={[
        styles.button_container,
        {
          backgroundColor: active ? COLORS.PERSIAN_BLUE : COLORS.GHOST_WHITE,
        },
      ]}>
      <Text
        style={{
          color: active ? COLORS.WHITE : COLORS.ENGLISH_VIOLET,
        }}>
        {title}
      </Text>
    </View>
  );
};

const CardContainer: FC<CardContainerProp> = ({
  title,
  description,
  completed,
  pending,
}) => {
  return (
    <View style={styles.inner_container}>
      <TitleText title={title} size="small" />
      <Text style={styles.description_text}>{description}</Text>
      <View style={{height: 15}} />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.text_view}>
          <TitleText title={completed} size="medium" />
          <Text>Completed</Text>
        </View>
        <View style={styles.text_view}>
          <TitleText title={pending} size="medium" />
          <Text>Pending</Text>
        </View>
      </View>
      <View />
    </View>
  );
};

//Main Card
const TabCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.action_row}>
        <Button title="Recent" active={true} />
        <Button title="All Groups" active={false} />
        <Button title="Archived" active={false} />
        <MaterialIcons name="list" size={20} />
      </View>
      <View style={{height: 200, width: '100%', flexDirection: 'row'}}>
        <CardContainer
          title="Lead Generation Campaign"
          description="Lorem ispum doler sit amet, consectyure"
          completed="343"
          pending="368"
        />
        <CardContainer
          title="Product Launch Marketing"
          description="Lorem ispum doler sit amet, consectyure"
          completed="488"
          pending="105"
        />
      </View>
    </View>
  );
};

export default TabCard;

const styles = StyleSheet.create({
  container: {height: 250, width: '100%', marginTop: 10},
  inner_container: {
    flex: 1,
    margin: 5,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 10,
  },
  action_row: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button_container: {
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description_text: {
    color: COLORS.CADET_GREY,
    fontWeight: '600',
    paddingTop: 10,
  },
  text_view: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '50%',
  },
});
