import React, {useContext, useEffect, useState} from 'react';
import {Box, Text, Button, ScrollView, Divider} from 'native-base';
import {Picker} from '@react-native-picker/picker';
import {
  Linking,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Link} from '@react-navigation/native';
import {setImg} from '../../hooks/utils/setImg';
import moment from 'moment';
import { AuthContext } from '../../navigation/AuthProvider.ios';
import {createEvent} from '../../hooks/events/events';
import {getUserByID, updateUser} from '../../hooks/user';

export const Confirm = ({route, navigation, member}) => {

  const {user} = useContext(AuthContext)

  const [category, setCategory] = useState('');
  const [players, setPlayers] = useState('');
  const [type, setType] = useState('');
  const [textInput, setTextInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  // Google Map values
  const [position, setPosition] = useState(null);
  const [marker, setMarker] = useState(null);
  const [crewter, setCrewter] = useState({
    gamesPlayed: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });

  // console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

  // console.log(crewter);

  const handleDateChange = (e) => {
    setDate(new Date(e.nativeEvent.timestamp));
  };

  const handleTimeChange = (e) => {
    setTime(new Date(e.nativeEvent.timestamp));
  };

  const handleFormSubmit = async () => {
    let dateTime = time.getHours() + ':' + time.getMinutes();
    // hostId added on the API end
    const eventDetails = {
      location: {
        latitude: route.params.location[0],
        longitude: route.params.location[1],
      },
      title: titleInput,
      type: type === 'other' ? textInput : type,
      category: category,
      players: players,
      date: date,
      time: dateTime,
      host: {
        id: user && user?.uid,
        picture: user?.photoURL,
        name: user?.displayName,
      },
      picture: await setImg(category),
    };

    await createEvent(eventDetails)
      .then(response => response.json())
      .then(responseData => {
        const month = moment().month();

        // let arr = crewter.gamesPlayed;

        // arr.splice(month + 1, 0, 1);

        // arr.map((item, indx) => {
        //   item + crewter.gamesPlayed[indx];
        // });

        // const e = {
        //   gamesPlayed: arr,
        // };

        // let res = updateUser(user && user.uid, e);

        navigation.navigate('Account', {
          screen: 'Account',
          newGame: true,
        });
      });

    // error handling for empty strings
    // API post req
  };

  useEffect(() => {
    getUserByID(user, setCrewter);
  }, [user]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.image}>
        <>
          <Box margin={5}>
            <Text style={{fontWeight: 'bold', marginBottom: 15}}>
              Confirmation:
            </Text>
            <Text style={{marginBottom: 25}}>
              We're thrilled to inform you that your sports event booking is
              almost complete, and you're just a few steps away from securing
              your event spot in the crewters listings ! If you choose to keep
              your event private please be aware that a private listing will not
              be advertised in the public listings and will only be shared with whom
              you choose from your network.
            </Text>
            <Text style={{fontWeight: 'bold'}}>Event Title:</Text>
            <TextInput
              onChangeText={title => setTitleInput(title)}
              style={{
                padding: 10,
                marginTop: 5,
                marginBottom: 20,
                fontSize: 20,
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'gray',
              }}
              placeholder="Sports Event Title"
              placeholderTextColor={'#e1e1e1'}
            />
            <Text style={{fontWeight: 'bold', marginBottom: -25}}>
              Event Location:
            </Text>
            <Box style={{marginTop: 280}}></Box>
            <Text style={{fontWeight: 'bold', marginBottom: -25}}>
              Event Type:
            </Text>
            <Picker
              style={{width: '50%', left: '25%'}}
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}
              numberOfLines={1}>
              <Picker.Item label="-" value="none" />
              <Picker.Item label="Public" value="public" />
              <Picker.Item label="Private" value="private" />
            </Picker>
            <Text style={{fontWeight: 'bold', marginBottom: -25}}>
              Choose a Sport:
            </Text>
            <Picker
              style={{width: '50%', left: '25%'}}
              selectedValue={category}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              numberOfLines={2}>
              <Picker.Item label="-" value="none" />
              <Picker.Item label="Athletics" value="athletics" />
              <Picker.Item label="Badminton" value="badminton" />
              <Picker.Item label="Baseball" value="baseball" />
              <Picker.Item label="Basketball" value="basketball" />
              <Picker.Item label="Bowling" value="bowling" />
              <Picker.Item label="Boxing" value="boxing" />
              <Picker.Item label="BullFighting" value="bullFighting" />
              <Picker.Item label="Cricket" value="cricket" />
              <Picker.Item label="Curling" value="curling" />
              <Picker.Item label="Cycling" value="cycling" />
              <Picker.Item label="Darts" value="darts" />
              <Picker.Item label="Football" value="football" />
              <Picker.Item label="Golf" value="golf" />
              <Picker.Item label="Go Karting" value="goKarting" />
              <Picker.Item label="High Jump" value="highJump" />
              <Picker.Item label="Hurdles" value="hurdles" />
              <Picker.Item label="Ice Hockey" value="iceHockey" />
              <Picker.Item label="Ice Skating" value="iceSkating" />
              <Picker.Item label="MMA" value="martialArts" />
              <Picker.Item label="Pool" value="pool" />
              <Picker.Item label="Net Ball" value="netBall" />
              <Picker.Item label="Rock Climbing" value="rockClimbing" />
              <Picker.Item label="Roller Skating" value="rollerSkating" />
              <Picker.Item label="Rowing" value="rowing" />
              <Picker.Item label="Rugby" value="rugby" />
              <Picker.Item label="Running" value="running" />
              <Picker.Item label="Skiing" value="skiing" />
              <Picker.Item label="Skate Boarding" value="skateBoarding" />
              <Picker.Item label="Snooker" value="snooker" />
              <Picker.Item label="SnowBoarding" value="snowBoarding" />
              <Picker.Item label="Soccer" value="soccer" />
              <Picker.Item label="Swimming" value="swimming" />
              <Picker.Item label="Surfing" value="surfing" />
              <Picker.Item label="Tennis" value="tennis" />
              <Picker.Item label="Training" value="training" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            {category === 'other' && (
              <>
                <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                  Enter Other Sport Type:
                </Text>
                <TextInput
                  onChangeText={text => setTextInput(text)}
                  style={{
                    padding: 10,
                    marginTop: 5,
                    marginBottom: 20,
                    fontSize: 20,
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: 'gray',
                  }}
                />
              </>
            )}
            <Text style={{fontWeight: 'bold', marginBottom: 5}}>
              Number of Players:
            </Text>
            <Picker
              style={{width: '50%', left: '25%'}}
              selectedValue={players}
              onValueChange={(itemValue, itemIndex) => setPlayers(itemValue)}
              numberOfLines={2}>
              <Picker.Item label="-" value="none" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
            </Picker>
            <Text
              style={{fontWeight: 'bold', marginTop: 45, marginBottom: -25}}>
              Set a Date:
            </Text>
            <DateTimePicker
              style={{position: 'relative', width: '90%', marginBottom: 25}}
              value={date}
              mode="date"
              is24Hour={true}
              onChange={e => handleDateChange(e)}
            />
            <Text style={{fontWeight: 'bold', marginBottom: -25}}>
              Set a Time:
            </Text>
            <DateTimePicker
              style={{position: 'relative', width: '90%', marginBottom: 25}}
              value={time}
              mode="time"
              is24Hour={true}
              onChange={e => handleTimeChange(e)}
            />
            <Box style={styles.mapContainer}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude: route.params.location[0],
                  longitude: route.params.location[1],
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  title={titleInput}
                  pinColor="#244c66"
                  coordinate={{
                    latitude: route.params.location[0],
                    longitude: route.params.location[1],
                  }}
                />
              </MapView>
            </Box>
            <Button
              style={{margin: 10, backgroundColor: '#244c66'}}
              onPress={() =>
                Linking.openURL(
                  `https://maps.google.com/?q=${route.params.location[0]},${route.params.location[1]}`,
                )
              }>
              Open In Google Maps
            </Button>

            <Button
              style={{margin: 10, backgroundColor: '#244c66'}}
              onPress={() =>
                Linking.openURL(
                  `http://maps.apple.com/?sll=${route.params.location[0]},${route.params.location[1]}&z=10&t=s`,
                )
              }>
              Open In Apple Maps
            </Button>
            <Text style={{fontWeight: 'bold', marginBottom: 15, marginTop: 25}}>
              Here's what you can expect from a publicly listed event:
            </Text>
            <Text style={{marginBottom: 15}}>
              Unrivaled Sporting Action: Get ready to witness top-tier athletes
              giving it their all on the field, delivering moments that will
              leave you on the edge of your seat.
            </Text>
            <Text style={{marginBottom: 15}}>
              Memorable Experience: Immerse yourself in the electric atmosphere
              as fans from all around come together to support their favorite
              teams and athletes.
            </Text>
            <Text style={{marginBottom: 15}}>
              Exclusive Access: By securing your booking, you'll gain access to
              exclusive areas and experiences that only registered attendees can
              enjoy.
            </Text>
            <Text style={{marginBottom: 15}}>
              Networking Opportunities: Connect with fellow sports enthusiasts,
              create lasting memories, and be a part of a community that shares
              your passion.
            </Text>
            <Text style={{marginBottom: 15}}>
              In case you have any questions or need assistance with the booking
              process, our dedicated support team is here to help. Reach out to
              us at info@crewters.com or view our{' '}
              <Link style={{color: 'blue'}} to="/home">
                FAQs
              </Link>{' '}
              page. Thank you for choosing Crewters to be a part of your sports
              journey. We hope you enjoy the {type} {category} event!
            </Text>
            <Button
              style={{
                backgroundColor: '#244c66',
                borderColor: '#fff',
                borderWidth: 1,
              }}
              onPress={() => handleFormSubmit()}>
              CONFIRM
            </Button>
          </Box>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    ...StyleSheet.absoluteFillObject,
    maxWidth: 400,
    maxHeight: 400,
    marginTop: 500,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    maxHeight: 600,
    width: 400,
    marginTop: '100%',
    marginLeft: -20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
    marginHorizontal: 40,
    marginLeft: 25,
    marginBottom: 10,
  },
  image: {
    backgroundColor: '#fff',
    color: '#fff',
  },
  icon: {
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  error: {
    margin: 20,
    textAlign: 'center',
    color: '#D8000C',
  },
});
