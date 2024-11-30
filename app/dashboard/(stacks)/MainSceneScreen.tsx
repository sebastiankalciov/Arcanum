import {useEffect, useState} from "react";
import {
    ViroAmbientLight,
    ViroARScene,
    ViroARSceneNavigator, ViroButton,
    ViroFlexView, ViroSpotLight, ViroText,
    ViroTrackingReason,
    ViroTrackingStateConstants
} from "@reactvision/react-viro";
import {StyleSheet, View} from "react-native";
import {Link, useRouter} from "expo-router";
import React from "react";

export default function MainSceneScreen() {

    const router = useRouter();

    const exitAR = () => {
        router.back()
    }

    const HelloWorldSceneAR = () => {

        const [text, setText] = useState("Initializing AR...");

        function onInitialized(state: any, reason: ViroTrackingReason) {
            console.log("guncelleme", state, reason);
            if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
                setText("hai noroci");
            } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
                console.log('test')
            }
        }


        return (
            <ViroARScene onTrackingUpdated={onInitialized}>
                <ViroText
                    text={text}
                    scale={[0.5, 0.5, 0.5]}
                    position={[0, 0, -1]}
                    style={styles.helloWorldTextStyle}
                />

                <ViroButton
                    source={require("@/assets/images/exit-button.png")}
                    position={[-1, -2, -1]}
                    height={0.5}
                    width={1}
                    onClick={exitAR}
                />
            </ViroARScene>

        );

    }
    return (
        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
                scene: HelloWorldSceneAR,
            }}
            style={styles.f1}>
        </ViroARSceneNavigator>
    );
}

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontSize: 35,
        color: "#f92929",
        textAlignVertical: "center",
        textAlign: "center",
    },
});