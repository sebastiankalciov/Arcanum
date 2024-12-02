import {useEffect, useState} from "react";
import {
    ViroAmbientLight, ViroARPlane,
    ViroARScene,
    ViroARSceneNavigator, ViroBox, ViroButton,
    ViroFlexView, ViroSphere, ViroSpotLight, ViroText,
    ViroTrackingReason,
    ViroTrackingStateConstants,
    ViroMaterials
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
                console.log('AR initialized');
            } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
                console.log('test');
            }
        }

        const gravity = -0.015;
        const groundY = -3;
        const sphereRadius = 0.1;
        const initialSpherePosition = [0, 1.15, -2];
        const [spherePosition, setSpherePosition] = useState(initialSpherePosition);

        const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);


        useEffect(() => {
            let interval: NodeJS.Timeout | null = null;

            if (isAnimationPlaying) {
                interval = setInterval(() => {
                    setSpherePosition(([x, y, z]) => {
                        if (y - sphereRadius >= groundY) {

                            return [x, y + gravity, z];
                        }
                        setIsAnimationPlaying(false);
                        return [x, groundY + sphereRadius, z];
                    });
                }, 16);
            }

            return () => {
                if (interval) clearInterval(interval);
            };
        }, [isAnimationPlaying]);

        ViroMaterials.createMaterials({
            redMaterial: {
                diffuseColor: "#eab330",
            },
            groundMaterial: {
                diffuseColor: "#7f57c2",
            },
        });

        const startAnimation = () => {
            setSpherePosition(initialSpherePosition);
            setIsAnimationPlaying(true);
        }

        const infoText = [
            "test 1",
            "test 2",
            "test 3"
        ];

        return (
            <ViroARScene onTrackingUpdated={onInitialized}>

                <ViroAmbientLight color="#ffffff" />
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0, -1, 0]}
                    position={[0, 3, -2]}
                    color="#ffffff"
                    castsShadow={true}
                />

                <ViroSphere
                    radius={sphereRadius}
                    position={spherePosition}
                    materials={["redMaterial"]}
                />

                <ViroFlexView
                    position={[2, 0.2, -2]}
                    rotation={[0, -45, 0]}
                    width={2.5}
                    height={1.5}
                    style={{
                        backgroundColor: "#ffffff88",
                        borderRadius: 0.1,
                        flexDirection: "column",
                        padding: 0.1,
                    }}
                >

                    {infoText.map((paragraph, index) => (
                        <ViroText
                            key={`paragraph-${index}`}
                            text={paragraph}
                            style={{
                                fontFamily: "Arial",
                                fontSize: 20,
                                color: "#333333",
                                textAlign: "left",
                                textAlignVertical: "top",
                            }}
                            width={2.3}
                            height={0.4}
                        />
                    ))}
                </ViroFlexView>

                <ViroButton
                    source={require("@/assets/images/exit-button.png")}
                    position={[0, -1.4, -1]}
                    rotation={[-45, 0, 0]}
                    height={0.2}
                    width={0.5}
                    onClick={exitAR}
                />

                <ViroButton
                    source={require("@/assets/images/start-button.png")}
                    position={[0, -1, -1]}
                    rotation={[-45, 0, 0]}
                    height={0.3}
                    width={0.3}
                    onClick={startAnimation}
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