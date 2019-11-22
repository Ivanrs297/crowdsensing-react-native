// @flow
import React, { Component } from "react";
import { Picker, Alert, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Platform, TextInput, Dimensions, TouchableHighlight } from "react-native";
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
  register,
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
    register: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
        user: "",
        password: "",
        fname: "",
        lname: "",
        genre: "",
        age: "",
        area: "",
        place: "",
    };
  }

  componentDidMount(){
  }

  handleRegister() {
    this.props.setLoadingSpinner(true)

    let registerObj = {
        email: this.state.user,
        password: this.state.password,
        fname: this.state.fname,
        lname: this.state.lname,
        genre: this.state.genre,
        age: this.state.age,
        area: this.state.area,
        place: this.state.place,
    }
    this.props.register(registerObj);

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
            onChangeText={(fname) => this.setState({fname})}
            value={this.state.fname}
            placeholder="Nombre"
            placeholderTextColor="gray"
            autoCorrect={false}
        />

        <TextInput
            style={styles.input}
            onChangeText={(lname) => this.setState({lname})}
            value={this.state.lname}
            placeholder="Apellido(s)"
            placeholderTextColor="gray"
            autoCorrect={false}
        />

        <TextInput
            style={styles.input}
            onChangeText={(user) => this.setState({user})}
            value={this.state.user}
            placeholder="Email"
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
            secureTextEntry
        />

        <TextInput
          style={styles.input}
          onChangeText={(area) => this.setState({area})}
          value={this.state.area}
          placeholder="Especialidad"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
          placeholder="Edad"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
        />

        <TextInput
          style={styles.input}
          onChangeText={(place) => this.setState({place})}
          value={this.state.place}
          placeholder="Lugar de procedencia"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button
            block
            style={styles.btnPrimary}
            // onPress={() => this.handleRegister()}
            disabled={!this.state.user || !this.state.password || !this.state.fname || !this.state.lname}
        >
          {this.props.loadingSpinner ? 
            <Spinner color="black" />
          : <Text style={styles.txtBtnPrimary}>Registrarse</Text>
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
    register: (registerObj) => dispatch(register(registerObj)),
    
    
  };
}

export default connect(mapStateToProps, bindActions)(LogIn);
