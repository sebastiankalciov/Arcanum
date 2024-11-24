import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.background,
    },
    titleContainer: {
        flex: 1/2,
        alignSelf: "center",

        justifyContent: "center"
    },
    inputContainer: {

        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: "#ffffff",
        borderBottomWidth: 1.5,
        height: 50,
        marginTop: 20,
        margin: 20
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
        padding: 5,
    },
    input: {
        flex: 1,
        paddingLeft: 30,
        color: "#ffffff"
    },
    icon: {
        position: "absolute",
        color: "#ffffff"
    },
    title: {
        paddingTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
        color: "white",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 25,
        color: "white",
        textAlign: "center"
    },
});