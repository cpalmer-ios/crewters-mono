import React, {useContext, useEffect, useState} from 'react';


// import {text} from '@fortawesome/fontawesome-svg-core';
import {Dimensions, Image, ScrollView,Text,  StyleSheet, View} from 'react-native';

// import useHealthData from '../hooks/useHealthData';

import Calendar from '../../components/Calendar/Calendar';

// import {searchEventByUserSub} from '../hooks/events/events';
// import {getUserByID} from '../hooks/user';
// import moment from 'moment';
import { Center } from 'native-base';
import { AuthContext } from '../../navigation/AuthProvider.ios';
// import { setImg } from '../hooks/utils/setImg';

const chartConfig = {
  backgroundColor: '#FFF',
  backgroundGradientFrom: '#FFF',
  backgroundGradientTo: '#FFF',
  color: (opacity = 1) => `#244c66`,
  style: {
    borderRadius: 5,
  },
};

export const CalScreen = ({navigation, sport}) => {
  const [events, setEvents] = useState();
  const [crewter, setCrewter] = useState({gamesPlayed: [0,0,0,0,0,0,0,0,0,0,0,0]});
  const {user, setUser} = useContext(AuthContext);
//   const {steps, distance, flights} = useHealthData();
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

  useEffect(() => {
    // getUserByID(user, setCrewter);
    // searchEventByUserSub(user?.sub, setEvents);
    console.log(events)
  }, [user]);

  let data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct', 'Nov', 'Dec'],
    datasets: [{
      data: crewter.gamesPlayed
      ,}]
    }


  return (
    <>
      <View style={[styles.shadowProp,styles.container]}>
        <Calendar
          onSelectDate={setSelectedDate}
          selected={selectedDate}
          events={events && events}
        />
        <ScrollView style={{
          position: 'absolute', 
          marginTop: 40, marginBottom: 50, borderRadius: 15, padding: 20, width: '85%', marginLeft: '18%', flexDirection:'column'}}>
          
          {events && events?.map((item, indx) => (
          moment(item.date).format("YYYY-MM-DD") === selectedDate ? (
            <>
            <Center key={indx} style={[styles.shadowProp,{backgroundColor: '#f1f1f1', borderRadius: 15, padding: 20, margin: 5}]} >
            <Text style={{marginTop: 25,color: '#212121'}}>{item.title}</Text>
            <Text>{item.type}</Text> 
            <Text style={{color: '#212121'}}>{moment(item.date).format('HH:MM')}</Text>
            <Center
                  bg="#244c66"
                  _dark={{
                    bg: '#244c66',
                  }}
                  _text={{
                    color: 'warmGray.50',
                    fontWeight: '700',
                    fontSize: 'xs',
                  }}
                  position="absolute"
                  top="3"
                  right="0"
                  px="3"
                  py="1.5">
                  {item.category}
                </Center>
            <Image
                    width={150}
                    height={150}
                    source={{uri: setImg(item.category)}}
                  />
            <Text>{item.spaces} - space(s)</Text>
            <Text>{item.requests.length} - requests(s)</Text>
            <Text style={{color: '#212121'}}>{item.players.length} - confirmed</Text>
            </Center>
            </>
          ) : (
            <Text></Text>
          )
          
          ))}</ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 2,
    margin: 10,
    borderRadius: 15
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#444',
    letterSpacing: 2,
    marginTop: -100,
    marginBottom: 5,
  },
  error: {
    margin: 20,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#D8000C',
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  }
});
