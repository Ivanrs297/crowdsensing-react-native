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
    bgHead: {
        backgroundColor: "FF000",
        flex: 1
    },
    imageHeader: {
        height: 25,
        width: 95,
        resizeMode: "contain"
    },
    channelBtn1: {
        borderWidth: 1,
        borderColor: Platform.OS === "android" ? "#ddd" : "rgba(255,255,255,0.5)"
    },
    na: {},
    channelImg: {
        flex: 1,
    },
    categoryContainer: {
        height: deviceHeight / 4,
        width: deviceWidth / 2 + 2,
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    ioschannelImgText: {
        fontSize: 16,
        fontWeight: "900",
        padding: 20,
        paddingLeft: 0,
        paddingBottom: 0,
        marginBottom: 0,
        marginLeft: 20,
        marginTop: deviceHeight / 6 + 10
    },
    achannelImgText: {
        fontSize: 16,
        fontWeight: "900",
        marginLeft: 20,
        // marginTop: deviceHeight / 4 - 20,
        color: "#999999",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    headding: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontSize: 16,
    },
    background: {
        flex: 1,
        width: null,
        height: deviceHeight / 3,
        backgroundColor: "rgba(0,0,0,0.1)",
        position: "relative"
    },
    searchForm: {
        flex: 1,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "rgba(255,255,255,0.9)",
        marginBottom: 8,
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 40,
    },
    searchBtn: {
        // flex: 1,
        backgroundColor: "#FBB03B",
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 1,
        marginRight: 40,
    },
    inlineForm: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 10,
    },
    footer: {
        backgroundColor: "white"
    },
    footerMenu: {
        color: "black",
        fontSize: 10
    },
    footerIcon: {
        width: 25,
        height: 25,
    },
    iconImg: {
        fontSize: 26,
        color: "#8c8c8c",
    },
    grayContainer: {
        backgroundColor: "#F2F2F2",
        paddingLeft: 20,
        paddingRight: 20,
    },
    rowProduct: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: "#C3C4CA",
        borderBottomWidth: 2,
    },
    blueTitle: {
        color: "#00B2AE",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    imgProduct: {
        alignSelf: "flex-start",
        height: 80,
        width: 100
    },
    priceProduct: {
        color: "black",
        fontSize: 12,
        marginBottom: 5,
    },
    btnTextProduct: {
        color: "#AD123E",
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
    },
    btnProduct: {
        backgroundColor: "#FAAF40",
        borderRadius: 10,
        height: 30,
        width: null,
        marginBottom: 10,
    },
    distanceProduct: {
        color: "#AE1540",
        fontSize: 10,
    },
    centerVertical: {
        alignItems: "center",
        justifyContent: "center",
    },
    mapContainer: {
        width: deviceWidth,
        height: deviceHeight / 3,
    },
    footerTab: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
    }

};
