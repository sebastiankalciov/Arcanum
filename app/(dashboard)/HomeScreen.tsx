import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import {StatusBar} from "expo-status-bar";
import {Colors} from "@/styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <View style = {styles.textWithIconContainer}>
                <Text style = {styles.titleText}>Good day, adventurer</Text>
                <MaterialIcons name="waving-hand" size={24} color="#a66cfc" />
            </View>

            <Text style = {styles.subtitleText}>Ready for a new challenge?</Text>

            <View style = {styles.subjectsContainer}>

                <View style = {styles.textWithIconContainerSpaced}>
                    <Ionicons name="rocket" size={30} color="#141414" />
                    <Text style = {{color: "#141414", fontSize: 30, fontWeight: "bold"}}> Physics</Text>
                </View>

                <View style = {styles.textWithIconContainerSpaced}>
                    <FontAwesome6 name="cow" size={30} color="#141414" />
                    <TouchableOpacity>
                        <Text style = {{color: "#141414", fontSize: 30, fontWeight: "bold"}}> Biology</Text>
                    </TouchableOpacity>

                </View>

                <View style = {styles.textWithIconContainerSpaced}>
                    <FontAwesome6 name="computer" size={30} color="#141414" />
                    <Text style = {{color: "#141414", fontSize: 30, fontWeight: "bold"}}> Informatics</Text>
                </View>

            </View>


            <StatusBar backgroundColor={Colors.background} />
        </View>
    )
}