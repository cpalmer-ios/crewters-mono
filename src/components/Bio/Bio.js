import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './AccountComponents.style';

const Bio = ({route, user}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.bioContainer}>
        <Text style={styles.userName}> {user && user?.displayName}</Text>
        <Text style={styles.bio}>
          {/* chosen sport */}
          {route ? route.bio : 'Tennis'}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => navigation.navigate('EditProfile')}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.icon}>
          <Image
            source={require('../../../assets/images/heart.png')}
            style={{width: 18, height: 18}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bio;
