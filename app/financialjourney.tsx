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
import onBoard5 from "@/assets/images/onboard5.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window"); 

interface SplashProps {}

const financialJourney: React.FC<SplashProps> = ({}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="arrow-back-ios" size={25} color="#4572D3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>
          Important Step for Your{"\n"}
          <Text style={styles.boldText}>Financial Journey</Text>
        </Text>
        <Text style={styles.subTitle}>
          This SEBI mandated step helps us understand your willingness and
          capacity to invest in various instruments. By completing it, we can
          create a personalized plan tailored just for you.
        </Text>
      </View>
      <View style={styles.content}>
        <Image source={onBoard5} style={styles.image} />
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
    backgroundColor: "#fff",
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: height * 0.06, 
    width: "100%",
  },

  title: {
    fontWeight: "400",
    fontSize: width * 0.07, 
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: "center",
  },

  boldText: {
    fontWeight: "bold",
  },

  subTitle: {
    fontWeight: "400",
    fontSize: width * 0.045, 
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    textAlign: "center",
  },

  header: {
    marginTop: height * 0.05, 
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
    bottom: height * 0.25,
  },

  image: {
    width: width * 0.7, 
    height: height * 0.35,
    resizeMode: "contain",
  },

  footer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.1,
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
    fontSize: width * 0.045,
  },
});

export default financialJourney;
