import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroText,
    ViroTrackingReason,
    ViroTrackingStateConstants,
    ViroFlexView,
    ViroImage
} from "@reactvision/react-viro";

export default function Index() {

    const HelloWorldSceneAR = () => {
        const [text, setText] = useState("Initializing AR...");

        function onInitialized(state: any, reason: ViroTrackingReason) {
            console.log("guncelleme", state, reason);
            if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
                setText("hai noroci");
            } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
                // Handle loss of tracking
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

            </ViroARScene>
        );
    };
    return (
        <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
                scene: HelloWorldSceneAR,
            }}
            style={styles.f1}
        />
    );
}
var styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: "Arial",
        fontSize: 70,
        color: "#f92929",
        textAlignVertical: "center",
        textAlign: "center",
    },
});