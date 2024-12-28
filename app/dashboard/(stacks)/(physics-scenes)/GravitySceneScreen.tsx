import {ViroARSceneNavigator} from "@reactvision/react-viro";
import {TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import React, {useEffect} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {styles} from "@/styles/screens/ar-scenes";
import {GravitySceneAR} from "@/components/ar-scenes/physics";
import {addProgress} from "@/utils/addProgress";
import {auth} from "@/firebase/config";

const SUBJECT = "PHYSICS";
const MODULE = "GRAVITY";

export default function GravitySceneScreen() {

    const router = useRouter();

    const exitAR = () => {
        router.back()
    }

    useEffect(() => {
        addProgress(`${auth.currentUser?.email}`, SUBJECT, MODULE).then(r => {
            console.log(r);
        });
    })

    return (
            <View style = {styles.container}>

                <ViroARSceneNavigator
                    autofocus={true}
                    initialScene={{
                        scene: GravitySceneAR
                    }}
                    style={styles.sceneContainer}>

                </ViroARSceneNavigator>

                <View style = {styles.navigationContainer}>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={exitAR}>
                            <MaterialIcons name="exit-to-app" size={40} style = {styles.exitIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}
