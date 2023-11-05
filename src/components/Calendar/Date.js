import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import moment from 'moment';
import React from 'react';

const Date = ({date, onSelectDate, selected}) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const day =
    moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')
      ? 'Today'
      : moment(date).format('ddd');
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = moment(date).format('D');

  // get the full date e.g 2021-01-01 - we'll use this to compare the date to the selected date
  const fullDate = moment(date).format('YYYY-MM-DD');
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[
        styles.card,
        styles.shadowProp,
        selected === fullDate && {backgroundColor: '#244c66'},
      ]}>
      <Text style={[styles.big, selected === fullDate && {color: '#fff'}]}>
        {day}
      </Text>
      <View style={{height: 10}} />
      <Text
        style={[
          styles.medium,
          selected === fullDate && {
            color: '#fff',
            fontWeight: '400',
            fontSize: 22,
          },
        ]}>
        {dayNumber}
      </Text>
      <Text style={[
          styles.medium,
          selected === fullDate && {
            color: '#fff',
            fontWeight: '400',
            fontSize: 14,
          },
        ]}>{moment(date).format('MMM')}</Text>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 90,
    width: 65,
    marginHorizontal: 5,
  },
  big: {
    fontWeight: '400',
    fontSize: 15,
  },
  medium: {
    fontSize: 14,
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  }
});
