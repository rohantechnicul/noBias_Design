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
import onBoard4 from "@/assets/images/onBoard4.png";
import tick from "@/assets/images/tick.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window"); // Get device dimensions

interface SplashProps {}

const greateNews: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={width * 0.065} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRow}>
          <Image
            source={tick}
            style={styles.tickIcon}
          />
          <Text style={styles.title}>Great news!</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.subTitle}>
            Your current net worth is{" "}
            <Text style={styles.boldText}>XXX.</Text>
          </Text>
          <Text style={styles.subTitle}>
            To get a complete picture, please add any additional investments and
            loans. Our Certified Financial Planner (CFP) is here to help you
            grow your net worth and achieve your financial goals.
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Image source={onBoard4} style={styles.onboardImage} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let’s make it happen!</Text>
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
    top: height * 0.06, // Responsive position
    width: "100%",
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  tickIcon: {
    height: width * 0.08, // Dynamic size
    width: width * 0.08,
    borderRadius: width * 0.04,
  },
  title: {
    fontWeight: "700",
    fontSize: width * 0.075, // Dynamic font size
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  subTitle: {
    fontWeight: "400",
    fontSize: width * 0.045, // Dynamic font size
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexWrap: "wrap",
  },
  boldText: {
    fontWeight: "bold",
  },
  infoBox: {
    padding: 10,
    width: "90%",
    backgroundColor: "#EFF5FF",
    borderRadius: 15,
  },
  header: {
    marginTop: height * 0.05, // Adjust based on screen height
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
    bottom: height * 0.25, // Adjust based on screen height
  },
  onboardImage: {
    width: width * 0.7, // Adjust image size dynamically
    height: height * 0.35,
    resizeMode: "contain",
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.1, // Responsive padding
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

export default greateNews;
