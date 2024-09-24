import React from "react";
import {
  View,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import onBoard5 from "@/assets/images/onboard5.png";
import { MaterialIcons } from "@expo/vector-icons";

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Important Step for Your{"\n"}
          <Text style={{ fontWeight: "bold" }}>Financial Journey</Text>
        </Text>
        <Text style={styles.subTitle}>
          This SEBI mandated step helps us understand your willingness and
          capacity to invest in various instruments. By completing it, we can
          create a personalized plan tailored just for you.
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={onBoard5} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "6%",
    width: "100%",
  },

  title: {
    fontWeight: 400,
    fontSize: 28,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  subTitle2: {
    fontWeight: 400,
    fontSize: 18,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  header: {
    marginTop: "10%",
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 200,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
    position: "absolute",
    bottom: 0,
  },
  button: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Splash;
