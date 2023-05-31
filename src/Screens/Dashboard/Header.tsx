import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE} from '../../assets';
import {COLORS} from '../../helpers/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TitleText} from '../../components';

const Header = () => {
  return (
    <View style={styles.header_container}>
      <View>
        <TitleText title="Hi, Harshit" size="large" />
        <View style={styles.descrption_row}>
          <MaterialIcons
            name="phone-in-talk"
            size={30}
            color={COLORS.CADET_GREY}
          />
          <Text style={{color: COLORS.CADET_GREY}}>(801) 923-2930</Text>
        </View>
      </View>
      <View style={{}}>
        <Image style={styles.image} source={IMAGE.PROFILE} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  descrption_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: COLORS.NEON_BLUE,
    borderWidth: 3,
  },
});
