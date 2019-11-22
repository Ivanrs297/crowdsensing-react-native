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
  fetchVariables,
  deleteVariable
 } from "../../actions/smartponia"

var { width, height } = Dimensions.get('window');

function mapStateToProps(state) {
  return {
    variables: state.variables.variables,
    loadingSpinner: state.loaders.loadingSpinner
  };
}

class Historical extends Component {
  static propTypes = {
    setLoadingSpinner: PropTypes.func,
    openDrawer: PropTypes.func,
    fetchVariables: PropTypes.func,
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
    await this.props.fetchVariables();
  }

  getDateForHumans(date){
    return moment(date, "YYYY-MM-DD HH:mm:ss").format("ddd DD HH:mm")
  }

  async handleRefresh(){
    await this.setState({ refreshing: true})
    await this.props.fetchVariables();
    await this.setState({ refreshing: false})
  }

  _renderVariable( item ){
        return (
            <TouchableOpacity
              style={styles.rowItem}
              onLongPress={() => {
                Alert.alert(
                  'Alerta',
                  'Borrar registro?',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Confirmar', onPress: () => this.props.deleteVariable(item._id)},
                  ],
                  { cancelable: false }
                )
                
              }}
            >
              {Object.keys(item).map((key, index) => {
                if (key != "_id" && key != "updatedAt" && key != "__v" ){
                  return (
                    <Text key={key} style={styles.marginRight10}>
                      <Text style={styles.listBoldText} >
                        {key == "createdAt" ? "Date" : key}: 
                      </Text>
                      <Text style={styles.listText} >
                        {key == "createdAt" ? this.getDateForHumans(item[key]) : item[key] }
                      </Text>
                    </Text>
                  );
                }
              })}
            </TouchableOpacity>
        );
  }

  render() {
    return (
      <Container style={{backgroundColor: "#F2F2F2"}}>
        <Header style={styles.header}>
          <Left/>
          <Body style={{flex: 3}} >
            <Text style={styles.headerTitle}>Registro</Text>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1}}>
          
          {this.props.loadingSpinner ? <Spinner color="black" /> : 
            <FlatList
              ref={elm => this.flatList = elm}
              data={this.props.variables}
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
    fetchVariables: () => dispatch(fetchVariables()),
    deleteVariable: (variable) => dispatch(deleteVariable(variable)),
    
  };
}

export default connect(mapStateToProps, bindActions)(Historical);
