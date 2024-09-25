import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import Splash from "@/app/splash";
import Splash1 from "@/app/splash1";
import Splash2 from "@/app/splash2";

const carousel = () => {
    return (

        <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <Splash/>
        </View>
        <View key="2">
        <Splash1/>
        </View>
        <View key="2">
        <Splash2/>
        </View>
      </PagerView>

      );
}

export default carousel

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
      pagerView: {
    flex: 1,
  },
  });