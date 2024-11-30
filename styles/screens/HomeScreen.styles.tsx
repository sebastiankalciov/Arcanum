import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    textWithIconContainer: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        padding:5,
        backgroundColor: Colors.lightContrast,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 4,
        borderColor: Colors.primaryDarkContrast,
        borderRadius: 15,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",

    },
    subjectsContainer: {
        gap: 30,
        paddingTop: 10,
        flexDirection: "row",
    },
    subjectText: {
        color: Colors.lightGrey,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.white
    },
    subtitleText: {
        paddingBottom: 30,
        fontSize: 15,
        color: Colors.lightGrey
    },
    categoriesText: {
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.accentColor
    }
});