import React, { useRef, useContext } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheet from "react-native-gesture-bottom-sheet";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {AuthContext,} from '../../navigation/AuthProvider.ios';

const ProfileBar = () => {

  const bottomSheet = useRef(); 
  const navigation = useNavigation();

  const {user, setUser, logout} = useContext(AuthContext);



  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.touch} onPress={() => logout()}>
          <MaterialIcons name="logout" size={28} style={{marginLeft: -30, transform: [{rotate: '180deg'}]}} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>

        <BottomSheet
          hasDraggableIcon
          ref={bottomSheet}
          height={400}
          sheetBackgroundColor="#262626"
        >
          <View style={{ marginTop: 15, marginLeft: 5 }}>
            <TouchableOpacity
              style={styles.sheet}
              onPress={() => {
                navigation.navigate("Settings");
                bottomSheet.current.close();
              }}
            >
              <Ionicons name="settings-sharp" size={28} color="white" />
              <Text style={styles.label}>Settings</Text>
            </TouchableOpacity>

            <View style={styles.sheet}>
              <Image
                source={require("../../../assets/images/timer.png")}
                style={styles.icon}
              />
              <Text style={styles.label}>Your Activity</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require("../../../assets/images/time.png")}
                style={styles.icon}
              />
              <Text style={styles.label}>Archive</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require("../../../assets/images/qr-code.png")}
                style={styles.icon}
              />
              <Text style={styles.label}>QR Code</Text>
            </View>

            <View style={styles.sheet}>
              <Feather name="bookmark" size={28} color="white" />
              <Text style={styles.label}>Saved</Text>
            </View>

            <View style={styles.sheet}>
              <AntDesign name="bars" size={28} color="white" />
              <Text style={styles.label}>Close Friends</Text>
            </View>

            <View style={styles.sheet}>
              <Image
                source={require("../../../assets/images/heart.png")}
                style={styles.icon}
              />
              <Text style={styles.label}>COVID-19 Information Center</Text>
            </View>
          </View>
        </BottomSheet>

        <TouchableOpacity onPress={() => bottomSheet.current.show()}>
          <FontAwesome name="bars" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  touch: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: -100
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: "43%",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "25%",
    marginRight: -20,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  line: {
    borderBottomWidth: 0.8,
    borderBottomColor: "#3a3a3a",
    marginTop: 10,
  },
  sheet: {
    backgroundColor: "#262626",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sheet2: {
    backgroundColor: "#262626",
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 15,
  },
});
export default ProfileBar;
