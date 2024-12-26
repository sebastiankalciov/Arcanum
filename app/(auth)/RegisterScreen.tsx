import {
    Alert,
    KeyboardAvoidingView,
    Platform, Pressable,
    SafeAreaView,
    Text,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import {useState} from "react";
import {styles} from "@/styles/screens/AuthScreens.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@firebase/auth";
import {auth, firestore} from "@/firebase/config";
import {FirebaseError} from "@firebase/util";
import {Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
import {doc, setDoc} from "@firebase/firestore";
import {KSpacer} from "@/components/KSpacer";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const addUser = async (email:string) => {
        try {
            await setDoc(
                doc(
                    firestore,
                    "users",
                    email
                ), {}
            )
            console.log("user added successfully");
        } catch (error) {
            console.log("error when creating user: ", error);
        }
    }

    const createAccount = async () => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await addUser(email)
        } catch (error: any) {
            const err = error as FirebaseError;
            Alert.alert("Error when logging into account", "Failed to log in into the account: " + err.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar backgroundColor={Colors.primaryYellow} style = "dark"/>

            <KeyboardAvoidingView behavior = {Platform.OS === 'ios' ? 'padding': 'height'} style = {styles.keyboardContainer}>

                <View style = {styles.titleContainer}>
                    <Text style = {styles.firstPartTitle}>Hello,</Text>
                    <Text style = {styles.title}>Adventurer</Text>
                </View>
                <KSpacer size={20} />
                <Text style = {styles.subtitle}>Create an account to feel the AR learning experience</Text>

                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.input}
                        value = {email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="Enter your email"
                        placeholderTextColor={"#000"}
                    />
                    <Entypo style={styles.icon} name="email" size={20} />
                </View>

                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.input}
                        value = {password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Enter your password"
                        placeholderTextColor={"#000"}
                    />
                    <Entypo style={styles.icon} name="lock" size={20} />
                </View>

                <Pressable style = {styles.signInButton} onPress={createAccount}><Text style = {styles.signInButtonText}>Create account</Text></Pressable>
                
                <View style = {styles.createAccountContainer}>
                    <Text style = {styles.dontHaveAccountText}>Already have an account? </Text>
                    <Link push href="/LoginScreen" asChild>
                        <TouchableOpacity><
                            Text style = {styles.createAccountText}>Sign in</Text>
                        </TouchableOpacity>
                    </Link>
                   
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}

