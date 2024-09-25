import React from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  FlatList,
  Text
} from "react-native";
import Splash from "@/app/splash";
import Splash1 from "@/app/splash1";
import Splash2 from "@/app/splash2";
import Splash3 from "@/app/thankyou";
import Splash4 from "@/app/greatnews";
import Splash5 from "@/app/financialjourney";
import Splash6 from "@/app/kyc";


const SplashScreens = [Splash, Splash1, Splash2, Splash6, Splash3, Splash4, Splash5];

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <FlatList
        data={SplashScreens}
        renderItem={({ item: SplashComponent }) => (
          <View style={styles.screenContainer}>
            <SplashComponent />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  screenContainer: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
