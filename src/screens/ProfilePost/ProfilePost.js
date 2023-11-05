import React, { useContext, useEffect, useState } from "react";
import { Image, FlatList, View, ScrollView, TouchableOpacity } from "react-native";
import { AuthContext } from "../../navigation/AuthProvider.ios";
import PostCard from '../../components/PostCard';
import firestore from '@react-native-firebase/firestore';

const ProfilePost = ({ navigation }) => { 

  const {user, setUser} = useContext(AuthContext);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          console.log('Total Posts: ', querySnapshot.size);

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
                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
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
    fetchPosts();
    setDeleted(false);
  }, [deleted]);

  const ListHeader = () => {
    return null;
  };


  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {posts &&
          posts.map((post, index) => (
            <TouchableOpacity
              style={{
                width: "33%",
                height: 135,
                marginTop: 5,
                marginRight: 3,
              }}
              onPress={() => navigation.navigate("SinglePost", {
                singlePost: post && post
              })}
            >
              <Image
                source={{ uri: 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
                // source={{ uri: post.postImg}}
                style={{
                  width: "100%",
                  height: 135,
                  marginTop: 5,
                  marginRight: 3,
                }}
              />
            </TouchableOpacity>
          ))}
 
      </View>
     </ScrollView>
  );
};
export default ProfilePost;
