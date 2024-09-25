import React, { useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import backGroundVector from "@/assets/images/Vector2.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window"); // Get device dimensions

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          <Text style={styles.boldText}>No</Text> Commissions, {"\n"}
          <Text style={styles.boldText}>No</Text> Cross-selling,{" "}
          <Text style={styles.boldText}>No</Text> Ads, {"\n"}
          <Text style={styles.boldText}>No</Text> Fees,{" "}
          <Text style={styles.boldText}>No Bias</Text>
        </Text>
        <Text style={styles.subTitle}>
          No Fees. Period. Your subscription is paid by your employer. They care!
        </Text>
        <Text style={styles.subTitle2}>
          Every rupee invested goes towards your goals
        </Text>
      </View>

      <View style={styles.background}>
        <Image source={backGroundVector} style={styles.backgroundImage} />
      </View>

      <View style={styles.content}>
        <LottieView
          autoPlay
          ref={animation}
          style={styles.lottie}
          source={require("@/assets/images/onBoard2.json")}
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
    backgroundColor: "#fff",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: height * 0.06, // Adjusted for different screen sizes
    width: "100%",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.07, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
  },
  boldText: {
    fontWeight: "bold",
  },
  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.045, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
    textAlign: "center",
  },
  subTitle2: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.035, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
    textAlign: "center",
  },
  header: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.35, // Adjust positioning based on screen size
    width: "100%",
  },
  backgroundImage: {
    width: width * 0.9, // Adjust background image size dynamically
    height: height * 0.25,
    resizeMode: "contain",
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.08, // Adjust positioning based on screen size
    width: "100%",
  },
  lottie: {
    width: width * 0.8, // Scale the animation responsively
    height: height * 0.4,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: height * 0.1, // Dynamic padding for responsiveness
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
    fontSize: width * 0.045, // Responsive font size
  },
  loginButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: width * 0.045, // Responsive font size
  },
});

export default Splash;
