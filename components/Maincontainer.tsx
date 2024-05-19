import React from "react";
import { Colors} from "react-native/Libraries/NewAppScreen";
import { StatusBar,useWindowDimensions} from "react-native";
import { StyleSheet } from "react-native";
import styled, { DefaultTheme } from 'styled-components/native';
const { height: screenHeight } = Dimensions.get('window');
import { Dimensions } from 'react-native';
import TopBg from "./Topbg";
import BigText from "./BigText";

const statusBarHeight = StatusBar.currentHeight || 0;

const { primary }: { primary: string } = Colors;



const styles = StyleSheet.create({
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const theme = {
    colors: {
      primary: '#FF5733',
      background: '#555555',
    },
    screenHeight: screenHeight,
  };
  const StyledThemeView = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${statusBarHeight + 30}px;
    background-color: ${(props) => props.theme.colors.background};
  `;
const MainContainer = (props: any) => {
  return <StyledThemeView {...props}>{props.children}</StyledThemeView>;
};
export default MainContainer