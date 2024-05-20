import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components/native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MainContainer from "@/components/Maincontainer";
import PayBillCard from "@/components/Card";
import App from "@/components/List";
import TopBg from "@/components/Topbg";
import { DefaultTheme } from "@react-navigation/native";
import { Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export default function Dashboard() {
  const TopBgTheme = {
    colors: {
      primary: "#FF5733",
      background: "#555555",
    },
    screenHeight: screenHeight,
  };

  return (
    <ThemeProvider theme={DefaultTheme}>
      <ThemedView>
        <MainContainer
          style={{ paddingTop: 0, paddingRight: 0, paddingLeft: 0 }}
        >
          <TopBg theme={TopBgTheme} />
          <MainContainer
            style={{ backgroundColor: "transparent" }}
          ></MainContainer>
        </MainContainer>
        <ThemedText type="title" style={styles.titleText}>
          Welcome, Resident !
        </ThemedText>
      </ThemedView>
      <ThemedView>
        {/* <ThemedText style={styles.text}>Card</ThemedText> */}
        <PayBillCard
          billName="HouseRent"
          billAmount={500}
          onPress={() => console.log("Pay bill")}
        />
      </ThemedView>
        <App /> 
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    color: "Magenta",
    fontStyle: "italic",
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 10,
    textShadowColor: "rgba(90, 100, 125, 0.75)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 2.5,
  },
  text: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    top: 20,
    bottom: 40,
    marginLeft: 10,
    marginRight: 20,
  },
});
