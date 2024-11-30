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
    moduleContainer: {
        flex: 1/3,
        width: "100%",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",

    },
    progressPhysicsContainer: {
        padding: 10,
        flex: 1/2,
        backgroundColor: Colors.lightContrast,
        borderRadius: 15,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderEndWidth: 5,
        borderStartWidth: 5,
        borderColor: Colors.primaryDarkContrast
    },
    moduleTitle: {
        fontSize: 20,
        color: Colors.primaryDark,
        fontWeight: "bold",
    },
    moduleText: {
        fontSize: 15,
        color: Colors.primaryDark,

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