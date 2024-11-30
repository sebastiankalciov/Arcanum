import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryDark,
    },
    titleContainer: {
        flex: 1/2,
        alignSelf: "center",

        justifyContent: "center"
    },
    inputContainer: {

        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1.5,
        borderColor: "#afafaf",
        borderRadius: 10,
        height: 50,
        marginTop: 20,
        margin: 10
    },
    signInButton: {

        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a66cfc",
        borderRadius: 10,
        margin: 15
    },

    signInButtonText: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
        padding: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 30,
        color: "#ffffff"
    },
    icon: {
        position: "absolute",
        color: "#ffffff",
        margin: 5
    },
    title: {
        paddingTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 25,
        color: "#ffffff",
        textAlign: "center"
    },
    createAccountContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff"
    },
    dontHaveAccountText: {
        color: "#ffffff"
    },
    createAccountText: {
        color: "#a66cfc",
        fontWeight: "bold"
    }
});