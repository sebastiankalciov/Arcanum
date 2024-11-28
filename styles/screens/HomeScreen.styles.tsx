import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: Colors.background,
    },
    textWithIconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textWithIconContainerSpaced: {
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        backgroundColor: "#8b69fb",
        borderColor: "#ab91ff",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginBottom: 20,
    },
    subjectsContainer: {
        paddingTop: 10,
        flex: 1/2,
        flexDirection: "column",

    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#ffffff"
    },
    subtitleText: {
        fontSize: 15,
        color: "#dadada"
    }
});