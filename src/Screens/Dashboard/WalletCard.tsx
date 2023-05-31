import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TitleText} from '../../components';
import {COLORS} from '../../helpers/colors';
import axios from 'axios';
import dayjs from 'dayjs';
interface Response {
  auto_fill_amount: string;
  auto_fill_date: string;
  balance: string;
}
const WalletCard = () => {
  const [apiData, setapiData] = useState<Response>();

  useEffect(() => {
    // Call api with axios
    const getData = async () => {
      let res = await axios.get(
        'https://3.api.fy23ey01.careers.ifelsecloud.com/',
      );
      setapiData(res.data);
    };
    getData();
  }, []);

  return (
    <View style={styles.wallet_container}>
      <View style={styles.top_row}>
        <View style={styles.amount_container}>
          <MaterialIcons
            name={'account-balance-wallet'}
            size={35}
            color={COLORS.NEON_BLUE}
          />
          <View style={{paddingLeft: 10}}>
            <TitleText title={'$' + apiData?.balance ?? ''} size="large" />
            <Text style={styles.description_text}>Wallet Balance</Text>
          </View>
        </View>
        <View>
          <MaterialIcons
            name={'play-circle-outline'}
            size={35}
            color={COLORS.CADET_GREY}
          />
        </View>
      </View>
      <View style={styles.dotted_row} />
      <View style={styles.top_row}>
        <View style={styles.date_area}>
          <TitleText
            title={dayjs(apiData?.auto_fill_date).format('DD MMM, YYYY')}
            size="medium"
          />
          <Text style={styles.description_text}>Auto fill date</Text>
        </View>
        <View style={styles.line_row} />
        <View style={styles.amount_area}>
          <TitleText
            title={'$' + apiData?.auto_fill_amount ?? ''}
            size="medium"
          />
          <Text style={styles.description_text}>Auto fill amount</Text>
        </View>
      </View>
    </View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  wallet_container: {
    height: 150,
    backgroundColor: COLORS.WHITE,
    paddingBottom: 10,
  },
  top_row: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  amount_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description_text: {color: COLORS.CADET_GREY, fontWeight: '600'},
  dotted_row: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
  },
  line_row: {
    height: 60,
    borderWidth: 0.6,
    borderRadius: 1,
  },
  date_area: {paddingLeft: 10, width: '60%', justifyContent: 'center'},
  amount_area: {paddingLeft: 10, width: '40%', justifyContent: 'center'},
});
