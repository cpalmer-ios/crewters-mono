import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider.ios';

// import { getPosts } from '../../utils/posts/posts';

const ProfileHeader = ({route, posts}) => {

  const {user, setUser} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(item.userId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container3}>
      <View>
        <Image
          source={{uri: "https://res.cloudinary.com/dpgcorswb/image/upload/v1696707165/crewters-fb_y2uzg8.png"}}
          style={styles.image3}
        />
      </View>

      <View style={styles.numbers}>
        <View style={styles.left}>
          {/* <Text style={styles.numberContainer}>{posts && posts.filter((item) => item.userid === user?.sub).length}</Text> */}
          <Text>{posts.count}</Text>
          <Text style={styles.text}>Post</Text>
        </View>

        <View style={styles.mid}>
          <Text style={styles.numberContainer}>404</Text>
          <Text style={styles.text}>Followers</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.numberContainer}>387</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10,
  },
  image3: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 10,
    marginBottom: 10,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '73%',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 5,
  },

  text: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
});
export default ProfileHeader;
