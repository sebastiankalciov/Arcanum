import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    textWithIconContainer: {
        gap: 5,
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
        width: "100%",
    },
    contentContainer: {
        flex: 1,
        gap: 30,
        alignItems: "center",

    },
    progressPhysicsContainer: {
        padding: 10,
        backgroundColor: Colors.lightYellowContrast,
        borderRadius: 15,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderEndWidth: 5,
        borderStartWidth: 5,
        borderColor: Colors.darkYellowContrast
    },
    moduleTitle: {
        fontSize: 20,
        color: Colors.darkGrey,
        fontWeight: "bold",
    },
    moduleText: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        color: Colors.darkGrey,
    },
    subjectText: {
        color: Colors.lightGrey,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 30,
        fontFamily: "Inter-ExtraBold",
        color: Colors.dark
    },
    subtitleText: {
        fontSize: 15,
        fontFamily: "Inter-Regular",
        color: Colors.darkGrey
    },
    categoriesText: {
        fontSize: 25,
        fontFamily: "Inter-Bold",
        color: Colors.darkGrey
    }
});