import {StyleSheet} from "react-native";
import {Colors} from "@/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: Colors.background,
        fontFamily: 'JetBrains-Regular',
    },
    textWithIconContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        padding:5,
        backgroundColor: "#b9abef",
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 4,
        borderColor: "#554c80",
        borderRadius: 15,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    subjectsContainer: {
        gap: 30,
        paddingTop: 10,
        flexDirection: "row",
    },
    subjectText: {
        color: "#c7c7c7",
        fontWeight: "bold"
    },
    titleText: {
        padding: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#ffffff"
    },
    subtitleText: {
        padding: 10,
        paddingBottom: 30,
        fontSize: 15,
        color: "#dadada"
    },
    categoriesText: {
        padding: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: "#947ee8"
    }
});