import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {Alert, Text, View, StyleSheet, useColorScheme} from 'react-native';
import {useRoute} from '@react-navigation/native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { AuthContext } from '../../navigation/AuthProvider.ios';

export const Host = ({navigation}) => {
  const route = useRoute();
  const [position, setPosition] = useState(null);
  const [show, setShow] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [marker, setMarker] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState('');

  const {user} = useContext(AuthContext)

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  const onClose = () => {
    setShow(false);
  };

  const onDrag = (e) => {
    setMarker(e.nativeEvent.coordinate), setConfirm(true);
  };

  const onAccept = () => {
    // API request to save listing of game to db
    navigation.navigate('confirm', {
      user: user,
      location: [marker && marker.latitude, marker && marker.longitude],
    });
  };

  const getCurrentPosition = () => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos),
          setMarker({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLoading(false)
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  // // TODO: get addrss from text input
  const getCurrentAddress = (add) => {
    add = add.replace(/ /g, '+');
    fetch(`https://maps.google.com/maps/api/geocode/json?address=${add}&key=AIzaSyBfBVmQpxNzMaRF9Re4vZmI8GAcLkhqLW8`).then(res => res.json()).then(address => setPosition({coords: {latitude: address.results[0].geometry.location.lat, longitude: address.results[0].geometry.location.lng}}))
      .then(res => res.json())
      .then(address =>
        setPosition({
          coords: {
            latitude: address.results[0].geometry.location.lat,
            longitude: address.results[0].geometry.location.lng,
          },
        }),
        
      );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // onChangeText: (event: any) => setSearch(event.nativeEvent.text),
        // onChange: (event:any) => getCurrentAddress(event.nativeEvent.text)
        onSearchButtonPress: (event) =>
          getCurrentAddress(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  useEffect(() => {
    getCurrentPosition();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {styles && (
            <>
              <View style={styles.container}>
                <View style={styles.mapContainer}>
                  <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation
                    mapType='standard'
                    customMapStyle={
                      isDarkTheme ? [
                        {
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#242f3e"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#746855"
                            }
                          ]
                        },
                        {
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#242f3e"
                            }
                          ]
                        },
                        {
                          "featureType": "administrative.locality",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "poi",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#263c3f"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#6b9a76"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#38414e"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "geometry.stroke",
                          "stylers": [
                            {
                              "color": "#212a37"
                            }
                          ]
                        },
                        {
                          "featureType": "road",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#9ca5b3"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#746855"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "geometry.stroke",
                          "stylers": [
                            {
                              "color": "#1f2835"
                            }
                          ]
                        },
                        {
                          "featureType": "road.highway",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#f3d19c"
                            }
                          ]
                        },
                        {
                          "featureType": "transit",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#2f3948"
                            }
                          ]
                        },
                        {
                          "featureType": "transit.station",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#d59563"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "geometry",
                          "stylers": [
                            {
                              "color": "#17263c"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.fill",
                          "stylers": [
                            {
                              "color": "#515c6d"
                            }
                          ]
                        },
                        {
                          "featureType": "water",
                          "elementType": "labels.text.stroke",
                          "stylers": [
                            {
                              "color": "#17263c"
                            }
                          ]
                        }
                      ] :
                      [
                        {
                          "featureType": "poi.attraction",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.business",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.government",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.medical",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.park",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "color": "#ff5252"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.place_of_worship",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.school",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "visibility": "off"
                            }
                          ]
                        },
                        {
                          "featureType": "poi.sports_complex",
                          "elementType": "labels.icon",
                          "stylers": [
                            {
                              "color": "#ff5252"
                            },
                            {
                              "visibility": "on"
                            }
                          ]
                        }
                      ]
                       }
                    region={{
                      latitude: position && position.coords.latitude,
                      longitude: position && position.coords.longitude,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}>
                    <Marker
                      draggable
                      pinColor="#244c66"
                      coordinate={{
                        latitude:
                          position && position.coords.latitude - 0.00000001,
                        longitude: position && position.coords.longitude,
                      }}
                      onDragEnd={e => onDrag(e)}
                    />
                  </MapView>
                  {confirm &&
                    Alert.alert(
                      'Set Event Location',
                      'would you like to host this event here?',
                      [
                        {text: 'Yes', onPress: () => onAccept()},
                        {
                          text: 'No',
                          onPress: () => console.log('No Pressed'),
                          style: 'cancel',
                        },
                      ],
                    )}
                </View>
              </View>              
            </>
          )}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
  },
  icon: {
    margin: 5,
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  pressable: {
    width: '85%',
    position: 'absolute',
    marginTop: 20,
    marginLeft: 17,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 0,
  },
  pressableTwo: {
    width: '90%',
    position: 'absolute',
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingTop: 10,
    paddingLeft: 45,
    paddingRight: 15,
    paddingBottom: 10,
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
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

export default Host;
