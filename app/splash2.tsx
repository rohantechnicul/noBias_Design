import React from "react";
import {
  View,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import onBoard3 from "@/assets/images/onBoard3.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor="#4572D3"
      />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Learn how to invest,{"\n"}not how to
          <Text style={{ fontWeight: "bold" }}> juggle</Text>
        </Text>
        <Text style={styles.subTitle}>
          No need to juggle expense tracking, planning, and investing
          separately. Control your finances from one app: Nobias
        </Text>
        <Text style={styles.subTitle2}>
          We make it simple so you can take it easy
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={onBoard3}
          style={styles.image}
          resizeMode="contain"
        />
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
    paddingHorizontal: "5%",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.05,
    width: "100%",
  },
  title: {
    fontFamily: "Inter",
    fontSize: width * 0.07, // Scales with screen width
    textAlign: "center",
    paddingVertical: height * 0.02,
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: width * 0.045, // Scales with screen width
    textAlign: "center",
    color: "#8E8E93",
    paddingVertical: height * 0.01,
  },
  subTitle2: {
    fontFamily: "Inter",
    fontSize: width * 0.035, // Scales with screen width
    textAlign: "center",
    color: "#8E8E93",
    paddingVertical: height * 0.01,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: "5%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: height * 0.15, // Responsive margin from bottom
  },
  image: {
    width: "80%",
    height: height * 0.4, // Adjust image height relative to screen height
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "5%",
    marginBottom: height * 0.05,
  },
  signUp: {
    backgroundColor: "#ffffff",
    borderColor: "#4572D3",
    borderWidth: 1,
    borderRadius: 15,
    width: "45%",
    height: height * 0.06, // Scales button height with screen height
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "45%",
    height: height * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    fontWeight: "500",
    color: "#4572D3",
    fontSize: width * 0.04, // Scales button text size with screen width
  },
  loginButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    fontSize: width * 0.04,
  },
});

export default Splash;
