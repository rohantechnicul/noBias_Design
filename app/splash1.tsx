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


const { width, height } = Dimensions.get("window"); // Get device dimensions

interface SplashProps {

}

const Splash: React.FC<SplashProps> = ({ }) => {
    
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
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
    flex: 1,
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
    fontSize: width * 0.07, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "left",
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
    textAlign: "left",
  },
  subTitle2: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: width * 0.035, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
    textAlign: "left",
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
    bottom: height * 0.34,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: height * 0.30,
   
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.08,
    width: "100%",
  },
  lottie: {
    width: 500,
    height: 500,
  },
});

export default Splash;
