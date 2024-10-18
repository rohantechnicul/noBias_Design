import React, { useState, useEffect } from "react";
import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  PixelRatio,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const images = [
  require("@/assets/images/speedometer-0.png"),
  require("@/assets/images/speedometer-1.png"),
  require("@/assets/images/speedometer-2.png"),
  require("@/assets/images/speedometer-3.png"),
  require("@/assets/images/speedometer-4.png"),
  require("@/assets/images/speedometer-5.png"),
];

const tabs = [
  { name: "Age", component: Age, width: "20%" },
  { name: "Household Income", component: HouseholdIncome, width: "40%" },
  { name: "Employment", component: Employment, width: "40%" },
];

const getColorForScore = (score) => {
  if (score <= 33) return "#FF0000";
  if (score <= 66) return "#FFEB3B";
  return "#4CAF50";
};

const ProgressBar = ({ score, maxScore = 100 }) => {
  const barColor = getColorForScore(score);

  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { width: `${(score / maxScore) * 100}%`, backgroundColor: barColor },
        ]}
      />
    </View>
  );
};

function Age({ data, YourScore }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Your Score</Text>
        <ProgressBar score={YourScore} />
        <Text style={styles.scoreText}>{YourScore}</Text>
      </View>
      {data.age.map((item, index) => (
        <View key={index} style={styles.rowContainer}>
          <Text style={styles.label}>{item.label}</Text>
          <ProgressBar score={item.score} />
          <Text style={styles.scoreText}>{item.score}</Text>
        </View>
      ))}
    </View>
  );
}

function HouseholdIncome({ data, YourScore }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>{"Your Score"}</Text>
        <ProgressBar score={YourScore} />
        <Text style={styles.scoreText}>{YourScore}</Text>
      </View>
      {data.householdIncome.map((item, index) => {
        let displayText = "";
        const lesserAmount = Math.round(
          item.lesser_Amount * data.imf_multiplier
        );
        const greaterAmount = Math.round(
          item.Greater_Amount * data.imf_multiplier
        );

        // Convert amounts to lakhs and round to one decimal place
        const formattedLesserAmount = (lesserAmount / 100000).toFixed(1);
        const formattedGreaterAmount = (greaterAmount / 100000).toFixed(1);

        if (item.label) {
          displayText = item.label;
        } else if (item.lesser_Amount === 0) {
          displayText = `Less than ₹${formattedGreaterAmount} Lakh`;
        } else if (item.Greater_Amount === 0) {
          displayText = `₹${formattedLesserAmount} Lakh and Higher`;
        } else {
          displayText = `₹${formattedLesserAmount} - ₹${formattedGreaterAmount} Lakh`;
        }

        return (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.label}>{displayText}</Text>
            <ProgressBar score={item.score} />
            <Text style={styles.scoreText}>{item.score}</Text>
          </View>
        );
      })}
    </View>
  );
}

function Employment({ data, YourScore }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Your Score</Text>
        <ProgressBar score={YourScore} />
        <Text style={styles.scoreText}>{YourScore}</Text>
      </View>
      {data.employment.map((item, index) => (
        <View key={index} style={styles.rowContainer}>
          <Text style={styles.label}>{item.label}</Text>
          <ProgressBar score={item.score} />
          <Text style={styles.scoreText}>{item.score}</Text>
        </View>
      ))}
    </View>
  );
}

const Speedometer = ({ YourScore }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  useEffect(() => {
    fetch(
      "https://cmots-mf-comparison.s3.ap-south-1.amazonaws.com/quiz_calculation.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const getImageForValue = (value) => {
    if (value <= 16.67) {
      return images[0];
    } else if (value <= 33.34) {
      return images[1];
    } else if (value <= 50) {
      return images[2];
    } else if (value <= 66.67) {
      return images[3];
    } else if (value <= 83.34) {
      return images[4];
    } else {
      return images[5];
    }
  };

  const headingForValue = (value) => {
    if (value <= 33.34) {
      return "Keep Going, You’re Doing Great! 🌟 \nWe know financial confidence takes time, but you’re already making strides in the right direction. Complete our risk profiling survey and book a CFP session to chart your path to financial wellbeing. Together, we’ll help you reach your goals!";
    } else if (value <= 66.67) {
      return "Fantastic Progress! 🌟 \nYou’ve done an amazing job and steered clear of common pitfalls. Now, complete the risk profiling survey and schedule a call with a CFP to fine-tune your path to financial wellbeing. Together, we’ll make your financial future even brighter!";
    } else {
      return "You’re a Financial Role Model! 🌟 \nYou’ve set a great example in managing your personal finances. Now, let’s guide you towards accelerated wealth creation with a CFP session. Together, we’ll elevate your financial journey!";
    }
  };

  const renderActiveTab = () => {
    const activeTabComponent = tabs.find((tab) => tab.name === activeTab);
    const Component = activeTabComponent.component;
    return <Component data={data} YourScore={YourScore} />;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.backArrow}>
            <MaterialIcons
              name="arrow-back"
              size={width * 0.065}
              color="#000000"
            />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.meterContainer}>
          <Text style={styles.headerTitle}>
            Your Financial Well-being score
          </Text>
          <View style={styles.divider} />

          <Text style={styles.headerSubtitle}>
            {headingForValue(YourScore)}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={getImageForValue(YourScore)}
              style={styles.image}
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: getFontSize(20),
                zIndex: 5,
                color: "#000000",
                position: "absolute",
                bottom: height * 0.048,
                left: width * 0.38,
              }}
            >
              {YourScore}
            </Text>
          </View>
          <Text style={styles.headerSubtitle}>
            Your score is based on your answers. Review it and consider taking
            action. Our tools can help, and you can retake the questionnaire
            anytime.
          </Text>
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.headerTitle}>
            See how your score compares to group averages
          </Text>
          <View style={styles.tabBarContainer}>
            <View style={styles.fullWidthLine} />
            <View style={styles.tabBar}>
              {tabs.map((tab) => (
                <TouchableOpacity
                  key={tab.name}
                  style={[
                    styles.tab,
                    activeTab === tab.name && styles.activeTab,
                  ]}
                  onPress={() => setActiveTab(tab.name)}
                >
                  <Text
                    style={
                      activeTab === tab.name
                        ? styles.activeTabText
                        : styles.tabText
                    }
                  >
                    {tab.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Active Tab Content */}
          <View style={styles.contentContainer}>{renderActiveTab()}</View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.finishButton}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFF",
    width: "100%",
  },
  header: {
    height: "12%",
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingBottom: 15,
    position: "absolute",
    zIndex: 2,
    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3.84,
    shadowOpacity: 0.05,
  },
  backArrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: getFontSize(18),
    paddingLeft: 20,
  },
  scrollContainer: {
    paddingTop: height * 0.11,
    alignItems: "center",
    paddingBottom: 20,
  },
  meterContainer: {
    marginTop: "10%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000000",
    paddingVertical: "5%",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3.84,
    shadowOpacity: 0.05,
  },

  headerTitle: {
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: getFontSize(18),
    flex: 2,
  },
  tabBarContainer: {
    width: "100%",
    position: "relative",
    zIndex: 5,
  },

  headerSubtitle: {
    width: "90%",
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#4A4A4A",
    fontSize: getFontSize(12),
    textAlign: "left",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#cccccc",
    marginVertical: 10,
  },

  imageContainer: {
    marginTop: 20,
    width: "90%",
    height: width * 0.5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  scoreContainer: {
    padding: "5%",
    marginTop: "6%",
    marginBottom: "30%",
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 3.84,
    shadowOpacity: 0.05,
  },
  fullWidthLine: {
    position: "absolute",
    bottom: "18%",
    width: "100%",
    height: 3,
    backgroundColor: "#EDEDED",
    zIndex: 1,
  },
  tabBar: {
    zIndex: 2,
    flexDirection: "row",
    alignContent: "space-between",

    paddingVertical: 10,
    width: "100%",
    elevation: 5,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#EDEDED",
    alignItems: "center",
    zIndex: 2,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#000000",
    alignItems: "center",
    zIndex: 3,
  },
  tabText: {
    fontSize: getFontSize(10),
    color: "gray",
  },
  activeTabText: {
    fontSize: getFontSize(10),
    color: "#000000",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    width: "35%",
    fontSize: getFontSize(10),
    fontFamily: "Inter",
    fontWeight: "400",
    color: "#000000",
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  progressBar: {
    height: "100%",
    borderRadius: 5,
  },
  scoreText: {
    width: "8%",
    fontSize: getFontSize(12),
    textAlign: "right",
    color: "#333",
  },
  footer: {
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: height * 0.01,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    // backgroundColor: "#4572D3",
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowRadius: 1.84,
    shadowOpacity: 0.04,
  },
  button: {
    backgroundColor: "#4572D3",
    borderRadius: 12,
    width: "90%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  finishButton: {
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: getFontSize(12),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Speedometer;
