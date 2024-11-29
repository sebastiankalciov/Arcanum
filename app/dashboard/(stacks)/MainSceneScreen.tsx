import {useState} from "react";
import {
    ViroAmbientLight,
    ViroARScene,
    ViroARSceneNavigator, ViroButton,
    ViroFlexView, ViroSpotLight, ViroText,
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
                console.log('test')
            }
        }


        return (
            <ViroARScene onTrackingUpdated={onInitialized}>
                <ViroButton
                    source={require("@/assets/images/exit-button.png")}
                    position={[1, 3, -3]}
                    height={0.5}
                    width={1}
                    onClick={() => {console.log("blabla")}}
                />
                <ViroText
                    text={text}
                    scale={[0.5, 0.5, 0.5]}
                    position={[0, 0, -1]}
                    style={styles.helloWorldTextStyle}
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
            style={styles.f1}
        />
    );
}

const styles = StyleSheet.create({
    f1: { flex: 1 },
    helloWorldTextStyle: {
        fontFamily: "Arial",
        fontSize: 35,
        color: "#f92929",
        textAlignVertical: "center",
        textAlign: "center",
    },
});