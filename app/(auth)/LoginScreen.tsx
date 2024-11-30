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

export default function LoginScreen() {
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

            <StatusBar backgroundColor={Colors.primaryDark} />

            <KeyboardAvoidingView behavior = {Platform.OS === 'ios' ? 'padding': 'height'} style = {styles.titleContainer}>

                <Text style = {styles.title}>Hello, adventurer</Text>
                <Text style = {styles.subtitle}>Ready to dive into the knowledge space?</Text>

                <View style = {styles.inputContainer}>
                    <TextInput
                        style = {styles.input}
                        value = {email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholder="Enter your email"
                        placeholderTextColor={"white"}
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
                        placeholderTextColor={"white"}
                    />
                    <Entypo style={styles.icon} name="lock" size={20} />
                </View>

                <Pressable style = {styles.signInButton} onPress={signIn}><Text style = {styles.signInButtonText}>Log in</Text></Pressable>

                <View style = {styles.createAccountContainer}>
                    <Text style = {styles.dontHaveAccountText}>Don't have an account? </Text>
                    <Link href="/RegisterScreen" asChild>
                        <TouchableOpacity><Text style = {styles.createAccountText}>Create an account</Text></TouchableOpacity>
                    </Link>
                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    );
}
