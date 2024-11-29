import {
    Alert,
    ImageBackground,
    KeyboardAvoidingView,
    Platform, Pressable,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {useState} from "react";
import {styles} from "@/styles/screens/index.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import {signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/firebase/config";
import {FirebaseError} from "@firebase/util";
import {Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
// @ts-ignore
import Snow from 'react-native-snow-bg';

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            const err = error as FirebaseError;
            Alert.alert("Error when logging into account", "Failed to log in into the account: " + err.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Snow fullScreen snowflakesCount={60} fallSpeed="slow" />
            <StatusBar backgroundColor={Colors.background} />

                <Text style = {styles.title}>Hello, adventurer</Text>
                <Text style = {styles.subtitle}>Ready to dive into the knowledge space?</Text>


                <View style = {styles.createAccountContainer}>
                    <Link href = "/(auth)/LoginScreen" asChild>
                        <TouchableOpacity style = {styles.signInButton}><Text style = {styles.signInButtonText}>Get started</Text></TouchableOpacity>
                    </Link>
                </View>


        </SafeAreaView>
    );
}

