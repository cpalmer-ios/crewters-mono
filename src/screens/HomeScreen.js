// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   Alert,
// } from 'react-native';

// import PostCard from '../components/PostCard';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

// import {Container} from '../styles/FeedStyles';

// const HomeScreen = ({navigation}) => {
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleted, setDeleted] = useState(false);

//   const fetchPosts = async () => {
//     try {
//       const list = [];

//       await firestore()
//         .collection('posts')
//         .orderBy('postTime', 'desc')
//         .get()
//         .then((querySnapshot) => {
//           console.log('Total Posts: ', querySnapshot.size);

//           querySnapshot.forEach((doc) => {
//             const {
//               userId,
//               post,
//               postImg,
//               postTime,
//               likes,
//               comments,
//             } = doc.data();
//             list.push({
//               id: doc.id,
//               userId,
//               userName: 'Test Name',
//               userImg:
//                 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//               postTime: postTime,
//               post,
//               postImg,
//               liked: false,
//               likes,
//               comments,
//             });
//           });
//         });

//       setPosts(list);

//       if (loading) {
//         setLoading(false);
//       }

//       console.log('Posts: ', posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     fetchPosts();
//     setDeleted(false);
//   }, [deleted]);

//   const handleDelete = (postId) => {
//     Alert.alert(
//       'Delete post',
//       'Are you sure?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed!'),
//           style: 'cancel',
//         },
//         {
//           text: 'Confirm',
//           onPress: () => deletePost(postId),
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   const deletePost = (postId) => {
//     console.log('Current Post Id: ', postId);

//     firestore()
//       .collection('posts')
//       .doc(postId)
//       .get()
//       .then((documentSnapshot) => {
//         if (documentSnapshot.exists) {
//           const {postImg} = documentSnapshot.data();

//           if (postImg != null) {
//             const storageRef = storage().refFromURL(postImg);
//             const imageRef = storage().ref(storageRef.fullPath);

//             imageRef
//               .delete()
//               .then(() => {
//                 console.log(`${postImg} has been deleted successfully.`);
//                 deleteFirestoreData(postId);
//               })
//               .catch((e) => {
//                 console.log('Error while deleting the image. ', e);
//               });
//             // If the post image is not available
//           } else {
//             deleteFirestoreData(postId);
//           }
//         }
//       });
//   };

//   const deleteFirestoreData = (postId) => {
//     firestore()
//       .collection('posts')
//       .doc(postId)
//       .delete()
//       .then(() => {
//         Alert.alert(
//           'Post deleted!',
//           'Your post has been deleted successfully!',
//         );
//         setDeleted(true);
//       })
//       .catch((e) => console.log('Error deleting posst.', e));
//   };

//   const ListHeader = () => {
//     return null;
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {loading ? (
//         <ScrollView
//           style={{flex: 1}}
//           contentContainerStyle={{alignItems: 'center'}}> 
//           <View>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <View style={{width: 60, height: 60, borderRadius: 50}} />
//               <View style={{marginLeft: 20}}>
//                 <View style={{width: 120, height: 20, borderRadius: 4}} />
//                 <View
//                   style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
//                 />
//               </View>
//             </View>
//             <View style={{marginTop: 10, marginBottom: 30}}>
//               <View style={{width: 300, height: 20, borderRadius: 4}} />
//               <View
//                 style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
//               />
//               <View
//                 style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
//               />
//             </View>
//             </View>
//           <View>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <View style={{width: 60, height: 60, borderRadius: 50}} />
//               <View style={{marginLeft: 20}}>
//                 <View style={{width: 120, height: 20, borderRadius: 4}} />
//                 <View
//                   style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
//                 />
//               </View>
//             </View>
//             <View style={{marginTop: 10, marginBottom: 30}}>
//               <View style={{width: 300, height: 20, borderRadius: 4}} />
//               <View
//                 style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
//               />
//               <View
//                 style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
//               />
//             </View>
//             </View> 
//         </ScrollView>
//       ) : (
//         <Container>
//           <FlatList
//             data={posts && posts}
//             renderItem={({item}) => (
//               <PostCard
//                 item={item}
//                 onDelete={handleDelete}
//                 onPress={() =>
//                   navigation.navigate('HomeProfile', {userId: item.userId})
//                 }
//               />
//             )}
//             keyExtractor={(item) => item.id}
//             ListHeaderComponent={ListHeader}
//             ListFooterComponent={ListHeader}
//             showsVerticalScrollIndicator={false}
//           />
//         </Container>
//       )}
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;


import React, {
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
  useContext,
} from 'react';
import {
  RefreshControl,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  ImageBackground,
  View,
  useColorScheme,
} from 'react-native';
import {Box, Text, Image, Center, Pressable, Avatar} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlertBox} from '../components/alert/AlertBox';
import {TopicButton} from '../components/button/TopicButton';
import {width, height} from '../constants/Dimensions';
import {searchEventByUserSub} from '../hooks/events/events';

import logo from '../../assets/images/fulllogo1.png';
import wreath from '../../assets/images/wreath.png';
import {userIDsStore} from '../hooks/utils/userIDStore';
import {createUser, updateUser, getUserByID} from '../hooks/user';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Notice from './Notice';
import {TopTabNavigator} from '../components/TopTabNavigator/TopTabNavigator';
import moment from 'moment';
// import LottieView from 'lottie-react-native';
import {updateTrophy} from '../hooks/trophies/trophies';
import { setTitle } from '../hooks/utils/setImg';
import { AuthContext } from '../navigation/AuthProvider.ios';

export const Stack = createNativeStackNavigator();

export const Profile = ({route, navigation}) => {

  const {user} = useContext(AuthContext)

  const userIDs = useSyncExternalStore(
    userIDsStore.subscribe,
    userIDsStore.getSnapshot,
  );

  const [crewter, setCrewter] = useState();
  const [events, setEvents] = useState();
  const [trophies, setTrophies] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  const loggedIn = user !== undefined && user !== null;
  const [userData, setUserData] = useState(null);


  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc( route.params ? route.params.userId : user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        // console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser()
    if (loggedIn) {
      searchEventByUserSub(user?.uid, setEvents);
      userIDsStore.addUserIDs(JSON.stringify(user));
    }
  }, []);

  return (
    <>
      <StatusBar animated={true} />
      {user && !user.emailVerified === false ? (
        <AlertBox
          type={'warning'}
          title={'Email Verification'}
          body={'Please verify your email to continue. '}></AlertBox>
      ) : (
        ''
      )}
      {route?.params?.newGame && (
        <AlertBox
          type={'info'}
          title={'Host a Public Event'}
          body={
            "Congraulations ! You've event is now listed! You can view your event either in the listings page if it is public. Or click the football icon."
          }>
          <Center>
            <LottieView
              source={require('../../assets/animations/trophy.json')}
              autoPlay
              width={150}
              height={150}
              style={{marginLeft: -40}}></LottieView>
          </Center>
        </AlertBox>
      )}
      {route?.params?.newPlayer && (
        <AlertBox
          type={'info'}
          title={`Request Accepted`}
          body={`You have approved a player request.`}></AlertBox>
      )}
      {route?.params?.newChallenge && (
        <AlertBox
          type={'info'}
          title={`New Challenge Request`}
          body={`Your challenge request has been sent.`}>
          <Center>
            <LottieView
              source={require('../../assets/animations/trophy.json')}
              autoPlay
              width={150}
              height={150}
              style={{marginLeft: -40, margin: 10}}></LottieView>
          </Center>
        </AlertBox>
      )}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            // onRefresh={onRefresh}
          />
        }
        style={[
          {backgroundColor: loggedIn && isDarkTheme ? '#212121' : '#F1F1F1'},
          {position: 'relative'},
          styles.container,
        ]}>
          <>
            {user && (
              <View
                style={[
                  {
                    zIndex: -1,
                    margin: 15,
                    backgroundColor: isDarkTheme ? '#212121' : '#244c66',
                    borderColor: '#FFF',
                    borderWidth: 15,
                    borderRadius: 15,
                    padding: 0,
                  },
                  styles.shadowProp,
                ]}>
                <Center
                  bg="#F1F1F1"
                  _dark={{
                    bg: '#F1F1F1',
                  }}
                  _text={{
                    color: 'warmGray.500',
                    fontWeight: '700',
                    fontSize: 'xs',
                  }}                  
                  position="absolute"
                  top="3"
                  right="-15"
                  px="3"
                  py="1.5">
                  {setTitle(events && events.length)}
                </Center>
                <Pressable>
                  <Avatar
                    marginTop={35}
                    marginLeft={'50%'}
                    style={{
                      transform: [{translateX: -60}],
                      height: 110,
                      width: 110,
                      zIndex: -1,
                    }}
                    source={{uri: userData && userData.photoURL }}></Avatar>
                </Pressable>

                <Image
                  marginTop={-125}
                  marginLeft={'50%'}
                  style={{
                    transform: [{translateX: -95}],
                    height: 180,
                    width: 180,
                    opacity: events && events.length >= 1 ? 0.5 : 0.15,
                    display: events && events.length >= 1 ? 'flex' : 'none',
                    marginBottom: -55,
                  }}
                  alt="profile picture"
                  source={wreath}></Image>
                <Text
                  marginLeft={'50%'}
                  style={{
                    transform: [{translateX: -width / 4}],
                    width: width / 2,
                    marginTop: '12%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#244c66',
                  }}>
                  <Text
                    style={
                      isDarkTheme
                        ? {color: '#FFF', fontWeight: '800'}
                        : {color: '#FFF', fontWeight: '800'}
                    }>
                    @{userData && userData.displayName}
                  </Text>
                  {`\n`}{' '}
                  <Text
                    style={
                      isDarkTheme
                        ? {color: '#FFF', fontWeight: '300'}
                        : {color: '#FFF', fontWeight: '300'}
                    }>
                    {crewter?.age}
                  </Text>
                </Text>
                <TopTabNavigator
                  navigation={navigation}
                  data={crewter && crewter.gamesPlayed}
                  events={events && events}
                  user={crewter && crewter}
                  trophies={trophies && trophies}
                />
              </View>
            )}
          </>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    color: '#444',
    fontSize: 24,
    fontWeight: '600',
    height: height,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  chartWrapper: {
    flex: 2,
    height: width / 2.025,
    width: 200,
    borderRadius: 15,
    borderColor: '#244c66',
    borderWidth: 1,
    marginLeft: 55,
    left: '30%',
    marginTop: 20,
  },
  circleChart: {
    position: 'absolute',
    borderRadius: 15,
  },
  column: {
    position: 'relative',
    height: 300,
    width: 120,
    marginTop: -190,
    marginLeft: 25,
    padding: 20,
    borderRadius: 15,
    color: '#fff',
  },
  shadowProp: {
    shadowColor: '#244c66',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  sports: {
    marginHorizontal: '20%',
    width: 48,
    height: 48,
    textAlign: 'center',
    AlignSelf: 'center',
    AlignItems: 'center',
    position: 'absolute',
  },
  box: {
    position: 'relative',
    width: 200,
    height: 80,
    borderRadius: 15,
    marginLeft: 170,
    marginTop: -75,
    backgroundColor: '#244c66',
  },
  text: {
    color: '#fff',
    margin: 20,
  },
});

export default Profile;
