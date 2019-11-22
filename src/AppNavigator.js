import React, { Component } from "react";
import { StatusBar, Platform, Dimensions, BackHandler, Image } from "react-native";
import { connect } from "react-redux";
import { Scene, Router, Actions, Stack } from "react-native-router-flux";
import { Drawer } from "native-base";
import PropTypes from "prop-types";

import { closeDrawer } from "./actions/drawer";
import NavigationDrawer from "./DrawerNavigator";  // new
import StartupServices from "./screens/StartupServices";
import Historical from "./screens/Historical";
import Home from "./screens/Home";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Register from "./screens/Register";
import Profile from "./screens/Profile";


const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {
    static propTypes = {
    };
  
    componentDidMount() {
      // console.log("JWT USER: ", this.props.userJwtAccessToken);
      BackHandler.addEventListener("hardwareBackPress", () => this.backAndroid()); // Listen for the hardware back button on Android to be pressed
    }
    componentWillUnmount() {
      BackHandler.removeEventListener("hardwareBackPress", () =>
        this.backAndroid()
      ); // Remove listener
    }
    backAndroid() {
      if (Actions.state.index === 0) {
        return false;
      }
      Actions.pop();
      return true;
    }
  
    
    render() {
      return (
        <NavigationDrawer>
          <StatusBar/>
          <RouterWithRedux>
            <Stack key="root" hideNavBar>
                <Scene 
                  key="startupServices"
                  component={StartupServices}
                  initial={this.props.user.jwtAccessToken ? true : false}
                />
                <Scene key="historical" component={Historical}/>
                <Scene key="home" component={Home}/>
                <Scene 
                  key="signUp"
                  component={SignUp}
                  initial={this.props.user.jwtAccessToken ? false : true}
                />
                <Scene key="logIn" component={LogIn}/>
                <Scene key="register" component={Register}/>
                <Scene key="profile" component={Profile}/>
            </Stack>
          </RouterWithRedux>
        </NavigationDrawer>
      );
    }
  }
  function bindAction(dispatch) {
    return {
    };
  }
  const mapStateToProps = state => ({
    user: state.auth.user
  });
  
  export default connect(mapStateToProps, bindAction)(AppNavigator);
  