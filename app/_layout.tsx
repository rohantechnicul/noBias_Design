import React, { useRef, useState,useEffect } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import RiskOnboard from "@/app/riskOnboarding"
import Speedometer from "./speedometer";


const { width, height } = Dimensions.get("window");

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* <RiskOnboard profileLevel={"Moderately Growth"}/> */}
      {/* <VeryConservative/> */}
      {/* <ModeratelyConservative/> */}
      {/* <Modrate/> */}
      {/* <ModeratelyGrowth/> */}
      {/* <AggressiveGrowth/> */}
      <Speedometer YourScore={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  screenContainer: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  pagerView: {
    flex: 1,
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
    bottom: height * 0.2,
    zIndex: 1,
  },
  image: {
    height: height * 0.35,
  },
  footer: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: height * 0.1,
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
    marginHorizontal: 10,
  },
  login: {
    backgroundColor: "#4572D3",
    borderRadius: 15,
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  signUpButton: {
    fontWeight: "500",
    color: "#4572D3",
    textAlign: "center",
    fontSize: width * 0.045,
  },
  loginButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: width * 0.045,
  },
  scrollIndicatorContainer: {
    position: "absolute",
    bottom: 120,
    left: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#A7BFF1",
    margin: 5,
  },
  activeDot: {
    width: 20,
    height: 8, 
    borderRadius: 5,
    backgroundColor: "#4572D3", 
    margin: 5,
  },
});
