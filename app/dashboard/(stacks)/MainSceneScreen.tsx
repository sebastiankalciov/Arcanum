import {useEffect, useState} from "react";
import {
    ViroAmbientLight, ViroARPlane,
    ViroARScene,
    ViroARSceneNavigator, ViroBox, ViroButton,
    ViroFlexView, ViroSphere, ViroSpotLight, ViroText,
    ViroTrackingReason,
    ViroTrackingStateConstants,
    ViroMaterials, Viro3DObject
} from "@reactvision/react-viro";
import {StyleSheet, View} from "react-native";
import {Link, useRouter} from "expo-router";
import React from "react";
import {useAssets} from "expo-asset";

export default function MainSceneScreen() {

    const router = useRouter();

    const exitAR = () => {
        router.back()
    }
    const planetsGravity = {
        "earth": -0.1,
        "moon": -0.015,
        "mars": -0.03,
        "jupiter": -0.07
    }

    const GravitySceneAR = () => {

        let gravity = planetsGravity["earth"];

        const setGravity = (planet: string) => {
            // @ts-ignore
            gravity = planetsGravity[planet];
        }

        const groundY = -3;
        const sphereRadius = 0.14;
        const initialSpherePosition = [0, 1.12, -2];
        const [spherePosition, setSpherePosition] = useState(initialSpherePosition);

        const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);

        function onInitialized(state: any, reason: ViroTrackingReason) {
            console.log("guncelleme", state, reason);
            if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
                console.log('AR initialized');
            } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
                console.log('test');
            }
        }

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

        const startAnimation = () => {
            setSpherePosition(initialSpherePosition);
            setIsAnimationPlaying(true);
        }

        ViroMaterials.createMaterials({
            yellowMaterial: {
                diffuseColor: "#eab330",
            },
        });

        // TO-DO
        // Add Input button to simulate the gravity on different planets

        return (
            <ViroARScene onTrackingUpdated={onInitialized}>

                <ViroAmbientLight color="#ffffff" />

                {/* light */}
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0, -1, 0]}
                    position={[0, 3, -2]}
                    color="#ffffff"
                    castsShadow={true}
                />

                {/* sphere */}
                <ViroSphere
                    radius={sphereRadius}
                    position={spherePosition}
                    materials={["yellowMaterial"]}
                />

                {/* text card */}
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

                    <ViroText
                        text={"Test 1 - yada yad adadadadadad"}
                        style={{
                            fontFamily: "Arial",
                            fontSize: 10,
                            color: "#333333",
                        }}
                        width={2.3}
                        height={0.4}
                    />
                    
                </ViroFlexView>

                {/* earth planet label & button*/}
                <ViroText
                    text={"Earth"}
                    style={{
                        fontFamily: "Arial",
                        fontSize: 20,
                        color: "#247cd5",
                    }}
                    rotation={[0, 45, 0]}
                    position={[-0.8, 0.3, -2]}
                    width={2}
                    height={0.4}
                    onClick={setGravity("earth")}
                />
                <ViroButton
                    source={require("@/assets/images/planets/earth.png")}
                    position={[-2, 0.2, -2]}
                    rotation={[0, 45, 0]}
                    height={0.5}
                    width={0.5}
                />

                {/* moon label & button*/}
                <ViroText
                    text={"Moon"}
                    style={{
                        fontFamily: "Arial",
                        fontSize: 20,
                        color: "#247cd5",
                    }}
                    rotation={[0, 45, 0]}
                    position={[-1.8, 0.3, -2]}
                    width={2}
                    height={0.4}
                    onClick={setGravity("moon")}
                />
                <ViroButton
                    source={require("@/assets/images/planets/moon.png")}
                    position={[-3, 0.2, -2]}
                    rotation={[0, 80, 0]}
                    height={0.5}
                    width={0.5}
                />

                {/* exit & play button */}
                <ViroButton
                    source={require("@/assets/images/exit-button.png")}
                    position={[0, -1.4, -1.3]}
                    rotation={[-45, 0, 0]}
                    height={0.2}
                    width={0.5}
                    onClick={exitAR}
                />
                <ViroButton
                    source={require("@/assets/images/start-button.png")}
                    position={[0, -1, -1.3]}
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
                scene: GravitySceneAR,
            }}
            style={styles.sceneContainer}>
        </ViroARSceneNavigator>
    );
}

const styles = StyleSheet.create({
    sceneContainer: { flex: 1 },
});