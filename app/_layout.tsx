// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }

import React from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import Splash from "@/app/splash";
import Splash1 from "@/app/splash1";
import Splash2 from "@/app/splash2";
import Splash3 from "@/app/splash3";
import Splash4 from "@/app/splash4";
import Splash5 from "@/app/splash5";
import Splash6 from "@/app/splash6";

// Store your Splash screens in an array
const SplashScreens = [Splash, Splash1, Splash2,Splash6, Splash3, Splash4, Splash5];

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "white" }}>
      <StatusBar barStyle="light-content" />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
