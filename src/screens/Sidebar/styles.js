const React = require("react-native");

const { Platform } = React;

export default {
  links: {
    paddingTop: Platform.OS === "android" ? 8 : 10,
    paddingBottom: Platform.OS === "android" ? 8 : 10,
    // paddingLeft: Platform.OS === "android" ? 0 : 10,
    borderBottomWidth: Platform.OS === "android" ? 0 : 0,
    borderTopWidth: Platform.OS === "android" ? 1 : 1,
    borderBottomColor: "#999999",
    borderTopColor: "#999999",
    backgroundColor: "transparent",
  },
  iconLink: {
    color: "#999999",
  },
  linkText: {
    paddingLeft: 15,
    color: "#999999",
    marginRight: 10,
    paddingRight: 20,
  },
  logoutContainer: {
    padding: 30,
    paddingTop: 0
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#fff"
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#e3e3e3"

  },
  drawerContent: {
    paddingTop: Platform.OS === "android" ? 80 : 80,
    paddingRight: 30,
    paddingLeft: 20,
    paddingBottom: 250,
    marginBottom: 0,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === "android" ? 40 : 20
  },
  whiteSpace: {
    marginTop: 100,
  }
};
