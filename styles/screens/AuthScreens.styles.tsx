import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryYellow,
    },
    keyboardContainer: {
        flex: 1/2,
        alignSelf: "center",
        justifyContent: "center"
    },
    titleContainer: {
        alignItems: "flex-start"
    },
    inputContainer: {

        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: "#242424",
        borderRadius: 10,
        height: 50,
        marginTop: 20,
        margin: 10
    },
    signInButton: {

        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.lightYellowContrast,
        borderRadius: 10,
        margin: 15
    },

    signInButtonText: {
        color: Colors.dark,
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 30,
        fontFamily: "Inter-Regular",
        color: Colors.dark
    },
    icon: {
        position: "absolute",
        color: Colors.dark,
        margin: 5
    },
    firstPartTitle: {
        fontSize: 20,
        fontFamily: "Inter-Regular",
        color: "#404040",
        marginBottom: -10,

    },
    title: {
        fontFamily: "Inter-ExtraBold",
        fontSize: 45,
        color: Colors.dark,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        color: "#262626",
        fontFamily: "Inter-Regular",
        textAlign: "center"
    },
    createAccountContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        color: Colors.white,
    },
    dontHaveAccountText: {
        color: Colors.dark
    },
    createAccountText: {
        color: Colors.dark,
        fontFamily: "Inter-Bold"
    }
});