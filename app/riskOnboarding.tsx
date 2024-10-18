import React, { useRef } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const { width, height } = Dimensions.get("window");
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const moderate = ({ profileLevel }) => {
  const animation = useRef<LottieView>(null);

  // Define content and images based on the profileLevel (string)
  const getProfileData = (profileLevel) => {
    switch (profileLevel) {
      case "Very Conservative":
        return {
          title: "Your Profile is",
          boldTitle: "Very Conservative",
          description:
            "You’re as immovable as a mountain, and small things like recessions don’t affect your savings much. This steady growth at your own pace is a testament to your financial resilience. Keep up the great work!",
          image: require("@/assets/images/mountain.json"),
        };
      case "Moderately Conservative":
        return {
          title: "Your Profile is",
          boldTitle: "Moderately Conservative",
          description:
            "You're like a sturdy rock, unshaken by market fluctuations. Your financial foundation grows steadily and securely over time. It would take a colossal storm to disrupt your savings. You have built something strong and resilient.",
          image: require("@/assets/images/stone.json"),
        };
      case "Moderate":
        return {
          title: "Your Profile is",
          boldTitle: "Moderate",
          description:
            "You’re like a sturdy tree. You might sway with the wind, but your roots are strong and grounded. You’re flexible enough to benefit from upswings and resilient enough to weather the stormy days. Keep growing with confidence!",
          image: require("@/assets/images/tree.json"),
        };
      case "Moderately Growth":
        return {
          title: "Your Profile is",
          boldTitle: "Moderately Growth",
          description:
            "You’re like the river—swift and full of potential. When conditions are favorable, you move rapidly. While small changes can disrupt your flow, your ability to adapt and thrive is remarkable. Keep harnessing your strengths and moving forward with confidence!",
          image: require("@/assets/images/river.json"),
        };
      case "Aggressive Growth":
        return {
          title: "Your Profile is",
          boldTitle: "Aggressive Growth",
          description:
            "You're like the waterfall, surging forward with unrelenting energy. But even the mightiest waterfall navigates around rocks and pebbles with care. Consider taking a more balanced approach for the long run. Stay powerful, yet mindful.",
          image: require("@/assets/images/waterfall.json"),
        };
      default:
        throw new Error(`Unsupported profile level: ${profileLevel}`);
    }
  };

  let currentProfile;

  try {
    currentProfile = getProfileData(profileLevel);
  } catch (error) {
    console.error(error.message);
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Profile Level not supported</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons
            name="arrow-back-ios"
            size={width * 0.065}
            color="#4572D3"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          {currentProfile.title}{" "}
          <Text style={styles.boldText}>{currentProfile.boldTitle}</Text>
        </Text>
        <Text style={styles.subTitle}>{currentProfile.description}</Text>
      </View>
      <View style={styles.content}>
        <LottieView
          autoPlay
          ref={animation}
          style={styles.lottie}
          source={currentProfile.image}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.continueButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default moderate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: height * 0.12,
    width: "100%",
    zIndex: 2,
  },
  title: {
    fontFamily: "Inter",
    fontSize: getFontSize(26),
    fontWeight: "400",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  boldText: {
    fontWeight: "bold",
  },
  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: getFontSize(15),
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
  },
  header: {
    marginTop: height * 0.01,
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.05,

    zIndex: 1,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  button: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  continueButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: width * 0.045,
  },
  lottie: {
    width: width * 1,
    height: 400,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: getFontSize(20),
    color: "red",
  },
});
