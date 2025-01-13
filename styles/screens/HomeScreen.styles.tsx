import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    textWithIconContainer: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        padding: 5,
        backgroundColor: Colors.lightYellowContrast,
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
        gap: "40%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.lightYellowContrast,
        borderRadius: 15,
    },
    progressInfoContainer: {
        padding: 10,
        gap: "25%",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.lightYellowContrast,
        borderRadius: 15,
    },
    progressSubjectTitle: {
        fontSize: 20,
        color: Colors.darkGrey,
        fontFamily: "Inter-Bold",
    },
    progressStatsText: {
        fontSize: 18,
        color: Colors.darkGrey,
        fontFamily: "Inter-Bold",
    },
    subjectText: {
        color: Colors.darkGrey,
        fontFamily: "Inter-Bold",
    },
    titleText: {
        fontSize: 25,
        fontFamily: "Inter-ExtraBold",
        color: Colors.dark
    },
    subtitleText: {
        paddingBottom: 30,
        fontSize: 15,
        color: Colors.dark
    },
    categoriesText: {
        fontSize: 20,
        fontFamily: "Inter-Bold",
        color: Colors.darkGrey,
    }
});