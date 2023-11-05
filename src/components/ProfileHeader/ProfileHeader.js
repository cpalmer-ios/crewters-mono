import React, { useContext, useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider.ios";
import firestore from "@react-native-firebase/firestore";

const ProfileHeader = ({ route, user, posts }) => { 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const getUser = async () => {
    await firestore()
      .collection("users")
      .doc(user.userId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log("User Data", documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  const fetchPosts = async () => {
    try {
      const list = [];
      await firestore()
        .collection('posts')
        .where('userId', '==', user.userId)
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const {
              userId,
              post,
              postImg,
              postTime,
              likes,
              comments,
            } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                user.photoURL ? user.photoURL : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
              postTime: postTime,
              post,
              postImg,
              liked: false,
              likes,
              comments,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
    fetchPosts();
  }, []);

  return (
    <View style={styles.container3}>
      <View>
        <Image
          source={{ uri: user ? user.photoURL : "" }}
          style={styles.image3}
        />
      </View>

      <View style={styles.numbers}>
        <View style={styles.left}>
          <Text style={styles.numberContainer}>
            {posts && posts?.length}
          </Text>

          <Text style={styles.text}>Posts</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    flexDirection: "row",
    justifyContent: "space-around",
    width: "73%",
    alignItems: "center",
    marginHorizontal: 5,
  },
  numberContainer: {
    color: "#244c66",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 5,
  },

  text: {
    color: "#244c66",
    fontSize: 16,
    alignSelf: "center",
  },
});
export default ProfileHeader;
