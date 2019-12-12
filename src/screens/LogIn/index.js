// @flow
import axios from 'axios';
import React, { Component } from "react";
import { KeyboardAvoidingView, Alert, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Platform, TextInput, Dimensions, TouchableHighlight } from "react-native";
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
 import { 
  login,
 } from "../../actions/auth"
import config from "../../config"
var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    lastVariable: state.variables.lastVariable,
  };
}

class LogIn extends Component {
  static propTypes = {
    setLoadingSpinner: PropTypes.func,
    openDrawer: PropTypes.func,
    fetchLastVariable: PropTypes.func,
    deleteVariable: PropTypes.func,
    login: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
        user: "",
        password: "",
        loadingSpinner: false
    };
  }

  componentDidMount(){
  }

  handleLogIn() {
    this.setState({loadingSpinner: true})
    let loginObj = {
      username: this.state.user,
      password: this.state.password
  }

  let URL = `${config.serverSideUrl}:${config.port}/signin`;

  axios.post( URL, loginObj )
    .then( res => {
      console.log("login RES: ", res.data);
      if (res.data.success){
        Actions.home()
        return;
      }
      
    })
    .catch(e => {
      console.log("ERROR register", e.response);
      Alert.alert(
          'Error',
          'Ha habido un problema, intenta de nuevo',
          [
              {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
          ],
           { cancelable: false }
          )
    })
    this.setState({loadingSpinner: true})

  }

  validateForm() {
    if (!this.state.user || 
        !this.state.password
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Container style={styles.content}>

          <Image
            source={require('../../../assets/icon_white.png')}
            style={styles.logoImg}
          />
        <Text style={styles.title}>GeoSensing</Text>

        <TextInput
            style={styles.input}
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}
            placeholder="Usuario"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
        />

        <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder="Contraseña"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.handleLogIn(false)}
            secureTextEntry
        />

        <Button
            block
            style={this.validateForm() ? styles.btnPrimaryDisabled : styles.btnPrimary}
            onPress={() => this.handleLogIn()}
            // onPress={() => Actions.home()}
            disabled={this.validateForm()}
        >
          {this.state.loadingSpinner ? 
            <Spinner color="black" />
          : <Text style={styles.txtBtnPrimary}>Iniciar Sesión</Text>
          }
        </Button>

      </Container>
      </KeyboardAvoidingView>

    );
  }
}
function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    setLoadingSpinner: visible => dispatch(setLoadingSpinner(visible)),
    fetchLastVariable: () => dispatch(fetchLastVariable()),
    deleteVariable: (variable) => dispatch(deleteVariable(variable)),
    login: (loginObj) => dispatch(login(loginObj)),
    
    
  };
}

export default connect(mapStateToProps, bindActions)(LogIn);
