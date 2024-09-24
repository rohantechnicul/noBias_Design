// import React from "react";
// import {
//   View,
//   StatusBar,
//   Dimensions,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import Splash from "@/app/splash";
// import Splash1 from "@/app/splash1";
// import Splash2 from "@/app/splash2";
// import Splash3 from "@/app/splash3";
// import Splash4 from "@/app/splash4";
// import Splash5 from "@/app/splash5";
// import Splash6 from "@/app/splash6";

// // Store your Splash screens in an array
// const SplashScreens = [Splash, Splash1, Splash2, Splash3, Splash4,Splash5, Splash6];

// export default function HomeScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <StatusBar barStyle="light-content" />
//       <FlatList
//         data={SplashScreens}
//         renderItem={({ item: SplashComponent }) => (
//           <View style={styles.screenContainer}>
//             <SplashComponent />
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });
