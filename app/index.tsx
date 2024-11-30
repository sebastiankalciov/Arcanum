import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {styles} from "@/styles/screens/index.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import {Link} from "expo-router";
// @ts-ignore
import Snow from 'react-native-snow-bg';

export default function Index() {

    return (
        <SafeAreaView style={styles.container}>
            <Snow fullScreen snowflakesCount={60} fallSpeed="slow" />
            <StatusBar backgroundColor={Colors.primaryDark} />

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

