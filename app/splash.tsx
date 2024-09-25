import React from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import onBoard1 from "@/assets/images/onBoard1.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window"); 

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="arrow-back-ios" size={width * 0.065} color="#4572D3" />
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          A <Text style={styles.boldText}>realistic</Text> way to {"\n"}
          achieve your goals
        </Text>
        <Text style={styles.subTitle}>
          Own a portfolio designed by our certified financial planners with no bias.
        </Text>
        <Text style={styles.subTitle2}>No get-rich-quick schemes (sorry)</Text>
      </View>
      <View style={styles.content}>
        <Image source={onBoard1} style={styles.image} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signUp}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginButton}>Login</Text>
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
    backgroundColor: "#fff",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    top: height * 0.18,
    zIndex: 2,
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.07, 
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.045,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
  },
  subTitle2: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.035,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
  },
  header: {
    marginTop: height * 0.05, 
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    top: height * 0.06,
    position: "absolute",
    zIndex: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.2,
    zIndex: 1,
  },
  image: {
    width: width * 0.7,
    height: height * 0.35,
    resizeMode: "contain",
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: height * 0.1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  signUp: {
    backgroundColor: "#ffffff",
    borderColor: "#4572D3",
    borderWidth: 1,
    borderRadius: 15,
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  login: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  signUpButton: {
    fontWeight: "500",
    color: "#4572D3",
    textAlign: "center",
    fontSize: width * 0.045,
  },
  loginButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: width * 0.045,
  },
});

export default Splash;
