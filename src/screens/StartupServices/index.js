import * as Expo from 'expo';
import { Permissions, Notifications } from 'expo';
import React, {Component} from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {socketClientInit} from '../../services/clientSocket';
import HomeApp from '../Home';
import {
  mapDeviceTokenToUser
} from '../../actions/auth'

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

class StartupServices extends Component {
  static propTypes = {
    mapDeviceTokenToUser: PropTypes.func,
  };

  async componentDidMount() {
    const { Permissions } = Expo;
    let { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      alert('No hay permisos de notificacion');
    } else {
      const deviceToken = await Expo.Notifications.getExpoPushTokenAsync();
      this.props.mapDeviceTokenToUser(this.props.user, deviceToken);
    }

  }

  render() {
    return <HomeApp/>;
  }
}

function bindActions(dispatch) {
  return {
    mapDeviceTokenToUser: (user, token) => dispatch(mapDeviceTokenToUser(user, token)),
  };
}
export default connect(mapStateToProps, bindActions)(StartupServices);
