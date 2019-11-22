// @flow
import React, { Component } from "react";
import { Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import {Actions, ActionConst} from 'react-native-router-flux';
import { openDrawer, closeDrawer } from "../../actions/drawer";

import styles from "./styles";

class SideBar extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func,

  };
  render() {
    return (
      <Container>
        <View
          style={styles.background}
        >
          <Content style={styles.drawerContent}>
           
            <ScrollView>
              <ListItem
                  button
                  onPress={() => {
                      this.props.closeDrawer();
                  }}
                  iconLeft
                  style={styles.links}
              >
                <Icon style={styles.iconLink} name="contact" />
                <Text style={styles.linkText}>Perfil</Text>
              </ListItem>

             
            </ScrollView>
          </Content>
          
        </View>
      </Container>
    );
  }
}
function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}
export default connect(null, bindActions)(SideBar);
