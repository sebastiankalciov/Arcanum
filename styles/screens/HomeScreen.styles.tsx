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
    progressContainer: {
        flex: 1/2,
        width: "100%",
    },
    progressPhysicsContainer: {
        padding: 10,
        gap: "50%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.lightContrast,
        borderRadius: 15,
        borderBottomWidth: 1.5,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderEndWidth: 5,
        borderStartWidth: 5,
        borderColor: Colors.primaryDarkContrast
    },
    progressSubjectTitle: {
        fontSize: 20,
        color: Colors.primaryDark,
        fontWeight: "bold",
    },
    progressStatsText: {
        fontSize: 18,
        color: Colors.primaryDark,
        fontWeight: "bold",
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
        paddingBottom: 5,
        fontSize: 15,
        color: Colors.lightGrey
    },
    categoriesText: {
        fontSize: 25,
        fontWeight: "bold",
        color: Colors.accentColor
    }
});