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
import LottieView from "lottie-react-native";
import onBoard1 from "@/assets/images/onBoard1.png";
import onBoard2 from "@/assets/images/onBoard2.png";
import onBoard3 from "@/assets/images/onBoard3.png";

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
          <Text style={{ fontWeight: "bold" }}>No</Text> Commissions, {"\n"}
          <Text style={{ fontWeight: "bold" }}>No</Text> Upselling,{" "}
          <Text style={{ fontWeight: "bold" }}>No</Text> Ads, {"\n"}
          <Text style={{ fontWeight: "bold" }}>No</Text> Fees,{" "}
          <Text style={{ fontWeight: "bold" }}>No Bias</Text>
        </Text>
        <Text style={styles.subTitle}>
          No Fees. Period. Your subscription is paid by your employer. They
          care!
        </Text>
        <Text style={styles.subTitle2}>
          Every rupee invested goes towards your goals
        </Text>
      </View>
      <View style={styles.content}>

        <View style={styles.content}>
          <Image source={onBoard2} />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.signUp}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Login}>
          <Text style={styles.LoginButton}>Login</Text>
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
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 28,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subTitle: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
  },

  subTitle2: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 12,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
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
    bottom: 70,
    width: "100%"
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100,
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
    marginLeft: 10,
    marginRight: 10,
  },

  Login: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  signUpButton: {
    fontWeight: 500,
    color: "#4572D3",
    textAlign: "center",
    fontSize: 16,
  },
  LoginButton: {
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Splash;
