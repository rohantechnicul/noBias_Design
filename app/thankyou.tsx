import React, { useRef, useCallback } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ConfettiCannon from "react-native-confetti-cannon";
import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";

interface SplashProps {}

const Thankyou: React.FC<SplashProps> = () => {
  const explosion = useRef<ConfettiCannon | null>(null);
  const animation = useRef<LottieView>(null);

  const startConfetti = () => {
    if (explosion.current) {
      explosion.current.start();
    }
  };

  useFocusEffect(
    useCallback(() => {
      startConfetti();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

  <View style={styles.Confetti}>
  <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        ref={explosion}
        fadeOut={true}
      />
  </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{}}>
          <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
        </TouchableOpacity>
      </View>

      <View style={styles.overlayContainer}>
      <View style={styles.content}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("@/assets/images/ThankYou.json")}
        />
      </View>
        <Text style={styles.title}>
          <Text style={{ fontWeight: "bold" }}>Thank You! 🎉</Text>
        </Text>

        <Text style={styles.subTitle}>
          You’ve successfully completed the KYC step. We appreciate your
          cooperation.{"\n"} Let’s continue on your journey to financial
          success!
        </Text>
      </View>

      {/* Footer with Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={startConfetti}>
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
    height: "100%",
  },
  header: {
    position: "absolute",
    top: 0,
    marginTop: "22%",
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  Confetti:{
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  overlayContainer: {
    position: "absolute",
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    zIndex: 1,
  },
  title: {
    fontWeight: "400",
    fontSize: 28,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 40,
    textAlign: "center",
    color: "black",
  },
  subTitle: {
    fontWeight: "400",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 100,
    textAlign: "center",
    color: "#323F4B",
  },
  footer: {
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
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
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Thankyou;
