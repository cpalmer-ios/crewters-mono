import React from 'react';
import {Box, Text, Image, Pressable} from 'native-base';
import {Alert, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

export const TopicButton = ({text, navigation}: any) => {
  return (
    <>
      <Pressable onPress={() => navigation.navigate('settings')}>
        {({isPressed}) => {
          return (
            <Box
              style={[
                {
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                },
                styles.box,
                styles.shadowProp,
              ]}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                {text}
              </Text>
            </Box>
          );
        }}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 2,
    backgroundColor: '#244c66',
    height: 40,
    borderRadius: 5,
    marginTop: -10,
    marginBottom: 0,
    marginHorizontal: '5%',
    textAlign: 'center',
    padding: 10,
  }, 
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
