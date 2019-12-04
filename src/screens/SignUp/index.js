// @flow
import React, { Component } from "react";
import { Alert, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Platform, TextInput, Dimensions, TouchableHighlight } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Text,
  View,
  Content,
  List,
  ListItem,
  Spinner,
} from "native-base";
import moment from "moment";
import 'moment/locale/es'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./styles";
import FooterMenu from "../../components/FooterMenu";
import {Actions, ActionConst} from 'react-native-router-flux';
import { openDrawer, closeDrawer } from "../../actions/drawer";
import { setLoadingSpinner } from "../../actions/loaders"
import { 
  fetchLastVariable,
  deleteVariable
 } from "../../actions/smartponia"

var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    lastVariable: state.variables.lastVariable,
    loadingSpinner: state.loaders.loadingSpinner
  };
}

class SignUp extends Component {
  static propTypes = {
    setLoadingSpinner: PropTypes.func,
    openDrawer: PropTypes.func,
    fetchLastVariable: PropTypes.func,
    deleteVariable: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }





  render() {
    return (
      <Container style={styles.content}>

          <Image
            source={require('../../../assets/icon_white.png')}
            style={styles.logoImg}
          />
        <Text style={styles.title}>GeoSensing</Text>


          <Button 
            block
            style={styles.btnPrimary}
            onPress={() => Actions.logIn()}
          >
              <Text style={styles.txtBtnPrimary}>Iniciar Sesión</Text>
          </Button>

          <Button
            block
            style={styles.btnSecondary}
            onPress={() => Actions.register()}
          >
              <Text style={styles.txtBtnSecondary}>Registrarse</Text>
          </Button>
      </Container>

    );
  }
}
function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    setLoadingSpinner: visible => dispatch(setLoadingSpinner(visible)),
    fetchLastVariable: () => dispatch(fetchLastVariable()),
    deleteVariable: (variable) => dispatch(deleteVariable(variable)),
    
  };
}

export default connect(mapStateToProps, bindActions)(SignUp);
