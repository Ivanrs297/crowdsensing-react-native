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
import { setLoadingSpinner } from "../../actions/loaders"
import { logout } from "../../actions/auth"

var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    loadingSpinner: state.loaders.loadingSpinner
  };
}

class Profile extends Component {
  static propTypes = {
    setLoadingSpinner: PropTypes.func,
    logout: PropTypes.func,
    
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  async componentDidMount(){
  }

    handleLogout(){
        this.props.logout();
        Actions.reset('signUp');

    }


  render() {
    return (
      <Container style={{backgroundColor: "#F2F2F2"}}>
        <Header style={styles.header}>
          <Left/>
          <Body style={{flex: 3}} >
            <Text style={styles.headerTitle}>Perfil</Text>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>

            <Text style={styles.paragraph} >{this.props.user.fname + " " + this.props.user.lname}</Text>
            <Text style={styles.paragraph} >{this.props.user.email}</Text>

            <Button
                block
                style={styles.btnPrimary}
                onPress={() => this.handleLogout()}
            >
                {this.props.loadingSpinner ? 
                    <Spinner color="black" />
                : <Text style={styles.txtBtnPrimary}>Cerrar Sesión</Text>
                }
            </Button>

        </View>
        <FooterMenu/>
      </Container>

    );
  }
}
function bindActions(dispatch) {
  return {
    setLoadingSpinner: visible => dispatch(setLoadingSpinner(visible)),
    logout: () => dispatch(logout()),
    
  };
}

export default connect(mapStateToProps, bindActions)(Profile);
