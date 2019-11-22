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
 import { 
  login,
 } from "../../actions/auth"

var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    lastVariable: state.variables.lastVariable,
    loadingSpinner: state.loaders.loadingSpinner
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
    };
  }

  componentDidMount(){
  }

  handleLogIn( guest ) {
    this.props.setLoadingSpinner(true)

    let loginObj = {
        email: guest ? 'invitado@invitado.com' : this.state.user,
        password: guest ? '123' : this.state.password
    }
    this.props.login(loginObj);

  }

  render() {
    return (
      <Container style={styles.content}>

          <Image
            source={require('../../../assets/icon_white.png')}
            style={styles.logoImg}
          />
        <Text style={styles.title}>Crowdsensing</Text>

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
            style={styles.btnPrimary}
            //onPress={() => this.handleLogIn(false)}
            disabled={!this.state.user || !this.state.password}
        >
          {this.props.loadingSpinner ? 
            <Spinner color="black" />
          : <Text style={styles.txtBtnPrimary}>Iniciar Sesión</Text>
          }
        </Button>

        <Button
            block
            style={styles.btnSecondary}
            // onPress={() => this.handleLogIn(true)}
        >
          {this.props.loadingSpinner ? 
            <Spinner color="black" />
          : <Text style={styles.txtBtnSecondary}>Invitado</Text>
          }
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
    login: (loginObj) => dispatch(login(loginObj)),
    
    
  };
}

export default connect(mapStateToProps, bindActions)(LogIn);
