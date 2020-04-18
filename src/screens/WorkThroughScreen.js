import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import WorkThrough from "WorkThrough";
import { icons } from "@assets";
import AppStyles from "../AppStyles";

const flowData = {
  fgColor: AppStyles.colorSet.mainThemeBackgroundColor,
  bgColor: AppStyles.colorSet.mainThemeForegroundColor,
  screens: [
    {
      icon: "fire-icon.png",
      title: "I am a",
      description:
        "Man or Women"
    },
    {
      icon: "chat-icon.png",
      title: "I want to meet",
      description: "Women, Men or Both"
    },
    {
      icon: "chat-icon.png",
      title: "Im looking to meet someone that has",
      description:
        "Looks, Wealth Or Both"
    },
    {
      icon: "notification.png",
      title: "Get Notified",
      description:
        "Receive notifications when you get new messages and matches."
    }
  ]
};

export default class WorkThroughScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  _onWorkFlowFinished = () => {
    this.props.navigation.navigate("Welcome");
  };
  render() {
    return (
      <View style={styles.container}>
        <WorkThrough
          iconpackage={icons}
          data={flowData}
          onFinished={this._onWorkFlowFinished}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});
