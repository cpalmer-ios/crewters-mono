import React, {useCallback, useContext, useRef, useState} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
// import * as ImagePicker from 'react-native-image-picker';

import styles from './ProfilEdit.style';
import {AuthContext} from '../../navigation/AuthProvider.ios';

const ImageCropPicker = NativeModules.ImageCropPicker

const ProfilEdit = () => {
  const {user, setUser} = useContext(AuthContext);

  const [name, setName] = useState('CREWTERS');
  const [bio, setBio] = useState('Software Engineer');
  const [image, setImage] = useState();
  const navigation = useNavigation();
  const bottomSheet = useRef();
  const [pickerResponse, setPickerResponse] = useState(null);

  const openLibrary = useCallback(async () => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
      width: 300,
      height: 400,
      cropping: true,
      forceJpg: true,
      ompressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      saveToPhotos: true,
    };
    // await ImagePicker.launchImageLibrary(options, setPickerResponse)
    //   .then((res) => {
      
    //     // save image to api
    //     // console.log('data:'+res.assets[0].type+';base64,'+res.assets[0].base64)
    //     setImage('data:'+res.assets[0].type+';base64,'+res.assets[0].base64);
    //     // save pp with user update info API
    //     bottomSheet.current.close();
    //   })

  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={{margin: 10}}>
        <View style={styles.topContainer}>
          <View style={styles.left}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="close"
                size={32}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.label}>Edit Profile</Text>
          </View>

          <View style={styles.right}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Account',
                  params: {
                    name: name,
                    bio: bio,
                    image: image,
                  },
                })
              }>
              <AntDesign
                name="check"
                size={32}
                color="#0098fd"
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={image ? {uri: image} : {uri: user && user.picture}}
          />

          <TouchableOpacity onPress={() => bottomSheet.current.show()}>
            <Text style={styles.change}>Change profile picture</Text>
          </TouchableOpacity>

          <BottomSheet
            hasDraggableIcon
            ref={bottomSheet}
            height={350}
            sheetBackgroundColor="#262626">
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: 25, marginBottom: 15}}>
                <Text style={styles.sheetText}>
                Change profile picture
                </Text>
              </View>

              <View style={styles.lineGrey} />

              <TouchableOpacity
                style={{marginVertical: 20}}
                onPress={() => openLibrary()}>
                <Text style={styles.sheetText}>New Profile Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/login/');
                }}>
                <Text style={styles.sheetText}>Facebook</Text>
              </TouchableOpacity>
              <View style={{marginVertical: 15}}>
                <Text style={styles.sheetText}>Avatar</Text>
              </View>
              <View style={{marginVertical: 15}}>
                <Text
                  style={{color: '#be363f', fontWeight: '500', fontSize: 18}}>
                  Remove Profile Picture
                </Text>
              </View>
            </View>
          </BottomSheet>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput style={styles.input} onChangeText={item => setName(item)}>
            {/* {user.nickname} */}
            {name}
          </TextInput>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Username</Text>
          <Text style={styles.input}>{user && user?.nickname}</Text>
          <View style={styles.line} />
          <Text style={styles.inputLabel}>Bio</Text>
          <TextInput style={styles.input} onChangeText={item => setBio(item)}>
            {/* {user.bio} */}
            {bio}
          </TextInput>
          <View style={styles.line} />
        </View>
        <View style={styles.lineGrey}>
          <Text
            style={{
              color: 'white',
              marginTop: 15,
              fontSize: 19,
              marginLeft: 10,
              marginBottom: 5,
            }}>
            Add link
          </Text>
        </View>

        <View style={styles.blueContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen')}>
            <Text style={styles.blueText}>Switch to Professional Account</Text>
          </TouchableOpacity>

          <Text style={styles.blueText}>Personal information settings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfilEdit;
