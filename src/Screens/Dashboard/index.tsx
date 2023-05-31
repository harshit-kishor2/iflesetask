import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './Header';
import CardRow from './CardRow';
import WalletCard from './WalletCard';
import ActivityCardList from './ActivityCardList';
import ProgressCard from './ProgressCard';
import TabCard from './TabCard';
import ChartCard from './ChartCard';

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={{paddingHorizontal: 20}}>
      <Header />
      <CardRow />
      <WalletCard />
      <ActivityCardList />
      <ProgressCard />
      <TabCard />
      <ChartCard />
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
