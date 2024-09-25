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
import onBoard1 from "@/assets/images/onBoard1.png";
import { MaterialIcons } from "@expo/vector-icons";



interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
          </TouchableOpacity>
        </View>

      <View style={styles.headerContainer}>

        <Text style={styles.title}>
          A <Text style={{ fontWeight: "bold" }}>realistic</Text> way to {"\n"}
          achieve your goals
        </Text>
        <Text style={styles.subTitle}>
          Own a portfolio designed by our certified financial planners with no
          bias.
        </Text>
        <Text style={styles.subTitle2}>No get-rich-quick schemes (sorry)</Text>
      </View>
      <View style={styles.content}>
        <Image source={onBoard1} />
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
    position: 'absolute',
    width: "100%",
    top: '18%',
    zIndex: 2,
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
    top: "6%",
    position: 'absolute',
    zIndex: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    objectFit: "fill",
    bottom: 140,
    zIndex: 1,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "space-between", // Center text vertically
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
