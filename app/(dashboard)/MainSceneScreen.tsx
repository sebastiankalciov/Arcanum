import {useState} from "react";
import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroFlexView,
    ViroTrackingReason,
    ViroTrackingStateConstants
} from "@reactvision/react-viro";
import {StyleSheet} from "react-native";

export default function MainSceneScreen() {
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
                <ViroFlexView
                    height={2}
                    width={2}
                    scale={[0.5, 0.5, 0.5]}
                    position={[0, 0, -1]}>

                </ViroFlexView>
            </ViroARScene>
        );
    }
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

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: "Arial",
        fontSize: 70,
        color: "#f92929",
        textAlignVertical: "center",
        textAlign: "center",
    },
});