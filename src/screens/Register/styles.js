const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
  barCategories: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  itemBarCategories: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgItemBarCategories: {
    resizeMode: "cover",
    flex: 1,
    width: deviceWidth / 5,
    height: deviceWidth / 6,
  },
  txtItemBarCategories: {
    color: "black",
    fontSize: 12,
    marginTop: -8,
  },
  yellowBar: {
    backgroundColor: "#FBB03B",
    flexDirection: "row",
    alignItems: "center",
  },
  purpleTitle: {
    fontSize: 18,
    color: "#92193F",
    fontWeight: "700",
    paddingLeft: 20,
  },
  iconBtnFilter: {
    fontSize: 30,
    color: "black",
  },
  btnFilter: {
    alignSelf: "center",
    marginRight: 10,
  },

  leftBar: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rightBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  suggestOfWeek: {
    position: "relative",
    width: deviceWidth,
    height: deviceHeight / 4,
    // resizeMode: "cover",
  },
  yellowCorner: {
    position: "absolute",
    backgroundColor: "#FBB03B",
    right: 0,
    bottom: 0,
    padding: 5,
    borderTopLeftRadius: 20,
  },

  infoContainer: {
    flex: 5,
    paddingLeft: 0,
    paddingRight: 40,
  },
  titleSuggest: {
    fontSize:18,
    color: "#00B2AE",
  },
  priceSuggest: {
    fontSize: 17,
    color: "#92193F",
  },
  listInline: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  boldGrayText: {
    fontSize: 14,
    color: "#4D4D4D",
    fontWeight: "700"
  },
  grayText: {
    fontSize: 14,
    color: "#808080",
  },
  iconBtnSee: {
    fontSize: 30,
    color: "#33C1C4",
  },
  btnSee: {
    paddingRight: 0,
    paddingLeft: 0,
    alignSelf: "flex-end"
  },
  seeContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  suggestContainer: {
    flexDirection: "row",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },

  productContainer: {
    flexDirection: "row",
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
  },
  productImg: {
    flex: 3,
    resizeMode: "cover",
    height: 100,
    borderRadius: 10,
  },
  productInfoContainer: {
    flex: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    backgroundColor: "#27ae60",
    borderBottomWidth: 0,
  },
  listText: {
    color: "black",
    marginHorizontal: 10,
  },
  listBoldText: {
    color: "black",
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingRight: 10
  },
  title: {
    color: "black",
    fontSize: 18,
    padding: 20,
  },
  marginRight10: {
    marginRight: 10,
  },
  rowItem: {
    backgroundColor: "white",
    padding: 15, 
    margin: 5,
  },
  whiteBg :{
    backgroundColor: "white",
    paddingVertical: 5,
    elevation: 2,
  },
  logoImg: {
      width: 120,
      height: 120,
      resizeMode: "contain",
      marginBottom: 5,
  },
  content: {
      flex: 1,
      backgroundColor: "#35495e",
      alignItems: "center",
      justifyContent: "center",
  },
  btnPrimary: {
      backgroundColor: "white",
      marginVertical: 10,
      marginHorizontal: 20,
  },
  btnPrimaryDisabled: {
    backgroundColor: "gray",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  txtBtnPrimary: {
      color: "#2c3e50",
  },
  title: {
      color: "white",
      fontSize: 26,
      marginBottom: 15,
  },
  input: {
    backgroundColor: "white",
    width: deviceWidth - 40,
    marginVertical: 5,
    padding: 10,
    fontSize: 14,
  },

  picker: {
    backgroundColor: "white",
    width: deviceWidth - 40,
    marginVertical: 5,
    padding: 10,
    paddingLeft: 8,
  },


};
