import {Alert, Text, TouchableOpacity, View} from "react-native";
import {useFonts} from "expo-font";
import {KContainer} from "@/components/KContainer";
import {Colors} from "@/styles";
import {styles} from "@/styles/screens/SettingsScreen.styles";
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase/config";

export default function SettingsScreen() {

    const logOut = () => {
        Alert.alert('Log out', "Are you sure you want to log out?", [
            {
                text: "Log out",
                onPress: () => signOut(auth),
            },
            {
                text: "Cancel",
                onPress: () => console.log("user canceled sign out"),
                style: 'cancel'
            }
        ])
    }

    return (
        <KContainer>
            <TouchableOpacity onPress={logOut}>
                <Text style = {styles.logOutText}>Log out</Text>
            </TouchableOpacity>
        </KContainer>
    )
}