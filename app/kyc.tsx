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
import onBoard6 from "@/assets/images/onBoard6.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window"); // Get device dimensions

interface SplashProps {}

const Kyc: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={width * 0.065} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Signing the <Text style={styles.boldText}>KYC</Text> and{" "}
          <Text style={styles.boldText}>Agreement</Text> are mandatory steps.
        </Text>
        <Text style={styles.subTitle}>
          Please keep your Aadhar and PAN numbers handy. It shouldn’t take more
          than 2 mins!
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={onBoard6} style={styles.onboardImage} />
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
    width: "100%",
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
    fontWeight: "400",
    fontSize: width * 0.075, // Dynamic font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "400",
    fontSize: width * 0.045, // Dynamic font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  header: {
    marginTop: height * 0.05, // Adjusted for different screen sizes
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
    bottom: height * 0.25, // Responsive positioning
  },
  onboardImage: {
    width: width * 0.7, // Adjusted size for better responsiveness
    height: height * 0.35,
    resizeMode: "contain",
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.1, // Dynamic padding for better responsiveness
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
    fontSize: width * 0.045, // Dynamic font size
  },
});

export default Kyc;
