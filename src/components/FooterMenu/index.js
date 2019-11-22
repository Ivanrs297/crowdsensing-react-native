import React, { Component } from "react";
import { Image, TouchableOpacity, Platform, TextInput } from "react-native";
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Tabs,
    Tab,
    Text,
    TabHeading,
    View,
    Content,
    Footer,
    FooterTab,
    Badge,
    Fab
} from "native-base";
import { connect } from "react-redux";
import {Actions, ActionConst} from 'react-native-router-flux';
import styles from "./styles";

function mapStateToProps(state) {
    return {
    };
  }

class FooterMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Footer style={styles.footer}>
                <FooterTab>
                    <Button
                        vertical
                        onPress={() => {
                            Actions.home()
                        }}
                        style={styles.footerTab}
                    >
                        <Icon
                            name="home"
                            style={styles.iconImg}
                        />
                        <Text style={styles.footerMenu}>Inicio</Text>
                    </Button>

                    <Button
                        vertical
                        onPress={() => {
                            Actions.historical();
                        }}
                        style={styles.footerTab}
                    >
                        <Icon
                            name="list"
                            style={styles.iconImg}
                        />
                        <Text style={styles.footerMenu}>Historial</Text>
                    </Button>

                    <Button
                        vertical
                        onPress={() => {
                            Actions.profile();
                        }}
                        style={styles.footerTab}
                    >
                        <Icon
                            name="person"
                            style={styles.iconImg}
                        />
                        <Text style={styles.footerMenu}>Perfil</Text>
                    </Button>

                </FooterTab>
            </Footer>

        );
    }
}

function bindActions(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, bindActions)(FooterMenu)
