import React,{useRef} from "react";
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
import backGroundVector from "@/assets/images/Vector1.png";

const { width, height } = Dimensions.get("window"); 

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  const animation = useRef<LottieView>(null);
  return (
    <View style={styles.container}>

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
      <View style={styles.background}>
        <Image source={backGroundVector} style={styles.backgroundImage} />
      </View>

      <View style={styles.content}>
        <LottieView
          autoPlay
          ref={animation}
          style={styles.lottie}
          source={require("@/assets/images/onBoard1.json")}
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.14,
    width: "100%",

  },
  image: {
    width: "100%",
    height: height * 0.35,
    objectFit: "cover",
 
  },
  lottie: {
    width: 400,
    height: 400,
  },
  background: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.286,
    width: "100%",
    height: "auto",

  },
  backgroundImage: {
    width: "100%",
    height: height * 0.30,
   
  },
});

export default Splash;
