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

class HomeApp extends Component {
  static propTypes = {
    setLoadingSpinner: PropTypes.func,
    openDrawer: PropTypes.func,
    fetchLastVariable: PropTypes.func,
    deleteVariable: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  async componentDidMount(){
    console.log("APP STARTED")
    await this.props.setLoadingSpinner(true);
    await this.props.fetchLastVariable();
  }

  getDateForHumans(date){
    return moment(date, "YYYY-MM-DD HH:mm:ss").format("ddd DD HH:mm")
  }

  async handleRefresh(){
    await this.setState({ refreshing: true})
    await this.props.fetchLastVariable();
    await this.setState({ refreshing: false})
  }

  _renderVariable( item ){
        return (
            <TouchableOpacity
              style={styles.rowItem}
            >
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>PH:</Text>
                <Text style={styles.listText}>{item.ph}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Humedad:</Text>
                <Text style={styles.listText}>{item.humidity}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Temperatura:</Text>
                <Text style={styles.listText}>{item.temperature}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Solución 1:</Text>
                <Text style={styles.listText}>{item.solution1}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Solución 2:</Text>
                <Text style={styles.listText}>{item.solution2}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Agua:</Text>
                <Text style={styles.listText}>{item.water}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>Luz:</Text>
                <Text style={styles.listText}>{item.light}</Text>
              </Text>
              <Text style={styles.marginRight10}>
                <Text style={styles.listBoldText}>CO2:</Text>
                <Text style={styles.listText}>{item.co2}</Text>
              </Text>
            </TouchableOpacity>
        );
  }

  getDataToFlatList(){
    let data = []
    data.push(this.props.lastVariable)
    return data;
  }

  render() {
    return (
      <Container style={{backgroundColor: "#F2F2F2"}}>
        <Header style={styles.header}>
          <Left/>
          <Body style={{flex: 3}} >
            <Text style={styles.headerTitle}>SmartPonia</Text>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1}}>
          
          {this.props.loadingSpinner ? <Spinner color="black" /> :
            <FlatList
              ref={elm => this.flatList = elm}
              data={this.getDataToFlatList()}
              renderItem={({ item }) => this._renderVariable(item) }
              keyExtractor={(item, index) => item._id}
              onRefresh={() => this.handleRefresh()}
              refreshing={this.state.refreshing}
              inverted={false}
              removeClippedSubviews={true}
            />
          }
        </View>
        <FooterMenu/>
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

export default connect(mapStateToProps, bindActions)(HomeApp);
