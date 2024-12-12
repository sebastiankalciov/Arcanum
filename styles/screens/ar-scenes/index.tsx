import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneContainer: {
        flex: 1
    },
    navigationContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        left: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        backgroundColor: "#d4d4d4",
        opacity: 0.9,
        borderRadius: 30,
        padding: 10,
    },
    playIcon: {
        color: "#5fa8f8"
    },
    exitIcon: {
        color: "#262626"
    }
});