import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryYellow,
    },
    titleContainer: {
        flex: 1/2,
        alignSelf: "center",
        justifyContent: "center"
    },
    getStartedButton: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.lightYellowContrast,
        borderRadius: 30,
        flexDirection: "row",
    },

    getStartedButtonText: {
        color: "#353535",
        fontFamily: "Inter-Bold",
        fontSize: 22,
        padding: 8,
        marginHorizontal: 20,
    },
    icon: {
        color: "#353535",
        marginRight: 15
    },
    title: {
        paddingTop: 10,
        fontFamily: "Inter-ExtraBold",
        fontSize: 45,
        color: "#000000",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 25,
        color: "#262626",
        fontFamily: "Inter-Regular",
        textAlign: "center"
    },
    getStartedContainer: {
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        color: "#ededed"
    },
});