import React,{useRef} from "react";
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
import backGroundVector from "@/assets/images/Vector3.png";


const { width, height } = Dimensions.get("window");

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
  const animation = useRef<LottieView>(null);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

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
      <View style={styles.background}>
        <Image source={backGroundVector} style={styles.backgroundImage} />
      </View>
      <View style={styles.content}>
      <LottieView
          autoPlay
          ref={animation}
          style={styles.lottie}
          source={require("@/assets/images/onBoard3.json")}
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
    fontSize: 28,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "left",
  },
  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
    textAlign: "left",
  },
  subTitle2: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 12, // Responsive font size
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: "#8E8E93",
    textAlign: "left",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",

  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: height * 0.44,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: height * 0.30,
   
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: height * 0.14,
  },
  image: {
    width: "80%",
    height: height * 0.4, // Adjust image height relative to screen height
  },
  lottie: {
    width: 400,
    height: 400,
  },
});

export default Splash;
