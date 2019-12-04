// @flow
import React, { Component } from "react";
import { Alert, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Platform, TextInput, Dimensions, TouchableHighlight } from "react-native";
import axios from 'axios';
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
  Picker
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
        loadingSpinner: false
    };
  }

  componentDidMount(){
  }

  handleRegister() {
    this.setState({loadingSpinner: true})
    let registerObj = {
        username: this.state.user,
        password: this.state.password,
        fullname: this.state.fname + " " + this.state.lname,
        genre: this.state.genre,
        age: this.state.age,
        speciality: this.state.area,
    }

    let URL = `${config.serverSideUrl}:${config.port}/signup`;

    axios.post( URL, registerObj )
      .then( res => {
        console.log("register RES: ", res.data);
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
      this.setState({loadingSpinner: false})
  }

  validateForm() {
    if (!this.state.user || 
        !this.state.password || 
        !this.state.fname || 
        !this.state.genre || 
        !this.state.age || 
        !this.state.place || 
        !this.state.area || 
        !this.state.lname
    ) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <Container style={styles.content}>

          <Image
            source={require('../../../assets/icon_white.png')}
            style={styles.logoImg}
          />
        <Text style={styles.title}>GeoSensing</Text>

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

        <Picker
          note
          mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.genre}
          onValueChange={(genre) => this.setState({genre})}
          itemStyle={{color: "black"}}
          itemTextStyle={{color: "black"}}
          textStyle={{color: "black", fontSize: 14}}
          headerBackButtonText="Atras"
          placeholder="Sexo"
          placeholderStyle={{color: "gray"}}
          headerStyle={{backgroundColor: "#2c3e50"}}
        >
          <Picker.Item label="Mujer" value="0" />
          <Picker.Item label="Hombre" value="1" />
        </Picker>

        <Picker
          note
          mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.area}
          onValueChange={(area) => this.setState({area})}
          itemStyle={{color: "black"}}
          itemTextStyle={{color: "black"}}
          textStyle={{color: "black", fontSize: 14}}
          headerBackButtonText="Atras"
          placeholder="Especialidad"
          placeholderStyle={{color: "gray"}}
          headerStyle={{backgroundColor: "#2c3e50"}}
        >
          <Picker.Item label="Computación" value="1" />
          <Picker.Item label="Telecomunicaciones" value="2" />
          <Picker.Item label="Control" value="3" />
          <Picker.Item label="Diseño Electrónico" value="4" />
          <Picker.Item label="Potencia" value="5" />
        </Picker>

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

        <Picker
          note
          mode="dropdown"
          style={styles.picker}
          selectedValue={this.state.place}
          onValueChange={(place) => this.setState({place})}
          itemStyle={{color: "black"}}
          itemTextStyle={{color: "black"}}
          textStyle={{color: "black", fontSize: 14}}
          headerBackButtonText="Atras"
          placeholder="Lugar de procedencia"
          placeholderStyle={{color: "gray"}}
          headerStyle={{backgroundColor: "#2c3e50"}}
        >
          <Picker.Item label="Guadalajara" value="1" />
          <Picker.Item label="Cuba" value="2" />
          <Picker.Item label="Colima" value="3" />
          <Picker.Item label="Tepic" value="4" />
          <Picker.Item label="Cuencamé" value="5" />
          <Picker.Item label="Mazatlán" value="6" />
          <Picker.Item label="Cualiacán" value="7" />
          <Picker.Item label="Coahuila" value="8" />
          <Picker.Item label="CDMX" value="9" />
        </Picker>

        <Button
            block
            style={this.validateForm() ? styles.btnPrimaryDisabled : styles.btnPrimary}
            onPress={() => this.handleRegister()}
            disabled={this.validateForm()}
        >
          {this.state.loadingSpinner ? 
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
