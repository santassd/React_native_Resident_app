import React from "react";
import { Colors} from "react-native/Libraries/NewAppScreen";
import { StatusBar,useWindowDimensions} from "react-native";
import { StyleSheet } from "react-native";
import styled, { DefaultTheme } from 'styled-components/native';
const { height: screenHeight } = Dimensions.get('window');
import { Dimensions } from 'react-native';
import MainContainer from "./Maincontainer";
import BigText from "./BigText";


interface TopBgany {
    theme: DefaultTheme;
  }
  
  const TopBg = styled.View<TopBgany>`
    background-color: ${(props) => props.theme.colors.background};
    width: 100%;
    height: ${(props) => screenHeight * 0.3}px;
    border-radius:30px;
    postion:absolute;
    top:-120px
    `;
  
  export default TopBg;