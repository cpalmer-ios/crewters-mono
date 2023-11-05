import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import moment, {now} from 'moment';
import Date from './Date';
import React from 'react';

const Calendar = ({
  onSelectDate,
  selected,
  events
}) => {
  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState();

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 30; i++) {
      const date = moment().add(i, 'days');
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <View style={[styles.centered]}>
        <Text style={styles.title}>Your Calendar</Text>
      </View>
      <View style={styles.dateSection}>
        <View style={[styles.scroll]}>
          <ScrollView
            // horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={e => setScrollPosition(e.nativeEvent.contentOffset.x)}>
            {dates.map((date, index) => (
              <View>
                <>
                <Date
                  key={index}
                  date={date}
                  onSelectDate={onSelectDate}
                  selected={selected} />
              </>
              </View>))}
                </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 20,
    marginRight: 220,
  },
  dateSection: {
    width: '100%',
    padding: 20,
  },
  scroll: {
    width: '25%',
    height: '100%',
    marginLeft: '-5%', 
    zIndex: -1,
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  }
});
