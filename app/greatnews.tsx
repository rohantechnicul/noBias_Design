import React from "react";
import Svg from "react-native";
import {
  View,
  Text,
  StatusBar,
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import onBoard4 from "@/assets/images/onBoard4.png";
import tick from "@/assets/images/tick.png";
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Image
            source={tick}
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
            }}
          />
          <Text
            style={styles.title}
          >
            Great news!
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            width: "90%",
            backgroundColor: "#EFF5FF",
            borderRadius: 15,
          }}
        >
          <Text style={styles.subTitle}>
            Your current net worth is{" "}
            <Text style={{ fontWeight: "bold" }}>XXX.</Text>
          </Text>
          <Text style={styles.subTitle}>
            To get a complete picture, please add any additional investments and
            loans. Our Certified Financial Planner (CFP) is here to help you
            grow your net worth and achieve your financial goals.
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <Image source={onBoard4} />
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
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "6%",
    width: "100%",
  },
  title: {
    fontWeight: 700,
    fontSize: 28,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 16,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexWrap: "wrap",
  },

  subTitle2: {
    fontWeight: 400,
    fontSize: 18,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    bottom: 160,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,   
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
  },
});

export default Splash;
