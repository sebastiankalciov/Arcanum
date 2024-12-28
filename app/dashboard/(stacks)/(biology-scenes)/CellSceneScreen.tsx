import {ViroARSceneNavigator} from "@reactvision/react-viro";
import {TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import React, {useEffect} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {styles} from "@/styles/screens/ar-scenes";
import {addProgress} from "@/utils/addProgress";
import {auth} from "@/firebase/config";
import {CellSceneAR} from "@/components/ar-scenes/biology/CellSceneAR";

const MODULE = "BIOLOGY";
const LECTURE = "CELL";

export default function CellSceneScreen() {

    const router = useRouter();

    const exitAR = () => {
        router.back()
    }

    useEffect(() => {
        addProgress(`${auth.currentUser?.email}`, MODULE, LECTURE).then(r => {
            console.log(r);
        });
    })


    return (
        <View style = {styles.container}>

            <ViroARSceneNavigator
                autofocus={true}
                initialScene={{
                    scene: CellSceneAR
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
