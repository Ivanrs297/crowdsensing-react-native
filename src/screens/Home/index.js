// @flow
import React, { Component } from "react";
import axios from 'axios';
import { StatusBar, SafeAreaView, Alert, ScrollView, FlatList, Image, ImageBackground, TouchableOpacity, Platform, TextInput, Dimensions, TouchableHighlight } from "react-native";
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
  Switch
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
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from "../../config"


var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
  };
}

class HomeApp extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      gps: false,
      latitude: "",
      longitude: ""
    };
  }

  logOut() {
    let URL = `${config.serverSideUrl}:${config.port}/logout`;
    axios.get( URL)
      .then( res => {
        console.log("LOGOUT RES: ", res);
        Actions.reset('signUp')
      })
      .catch(e => {
        console.log("ERROR LOGOUT", e.response);
      })

  }


  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    
      let location = await Location.watchPositionAsync({
        enableHighAccuracy: true,
        distanceInterval: 1,
        timeInterval: 3000
      },
        newLocation => {
          if (this.state.gps) {
              let coords = newLocation.coords;
              this.setState({
                  latitude: parseFloat(coords.latitude),
                  longitude: parseFloat(coords.longitude)
              })

              let data = {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }

              let URL = `${config.serverSideUrl}:${config.port}/geolocation/add`;

              axios.post( URL, data)
              .then( res => {
                console.log("ADD GEO RES: ", res.data);
              })
              .catch(e => {
                console.log("ERROR ADD GEO", e.response);
              })
            }
          });
  };


  render() {
    return (
      <Container style={{backgroundColor: "#F2F2F2"}}>
        
        <SafeAreaView style={{backgroundColor: "#35495e"}}>
          <Header style={styles.header}>
            <Left>
              <Button 
                style={{ backgroundColor: "transparent" }}
                onPress={() => this.logOut()}
              >
                <Icon active name="arrow-back" />
              </Button>
            </Left>
            <Body style={{flex: 3}} >
              <Text style={styles.headerTitle}>GeoSensing</Text>
            </Body>
            <Right>
            <Button 
                style={{ backgroundColor: "transparent" }}
                onPress={() => this.logOut()}
              >
                <Icon active name="log-out" />
              </Button>
            </Right>
          </Header>
          </SafeAreaView>
          <View style={{flex: 1}}>

            <View style={{padding: 30}}>

              <View style={{flexDirection: "row", paddingRight: 30, marginTop: 30, marginBottom: 30}}>
                <Text style={{fontSize: 16, color: "black", marginLeft: 15}}>Geolocalización: </Text>
                <Switch 
                  style={{ marginLeft: 40}}
                  value={this.state.gps}
                  onValueChange={(value) => this.setState({gps: value})}
                />
              </View>

              <Text style={{fontSize: 16, color: "black", margin: 15}}>
                Latitud: {JSON.stringify(this.state.latitude)}
              </Text>
              <Text style={{fontSize: 16, color: "black", margin: 15}}>
                Longitud: {JSON.stringify(this.state.longitude)}
              </Text>

            </View>

            

            
          </View>
          <FooterMenu/>
          
      </Container>
      

    );
  }
}
function bindActions(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

export default connect(mapStateToProps, bindActions)(HomeApp);
