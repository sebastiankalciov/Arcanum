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
import {Text, Button, StyleSheet, TouchableOpacity, View} from "react-native";
import {Link, useRouter} from "expo-router";
import React from "react";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
    
    // TO-DO
    // - implement interaction with planets, drag and drop (move planets)
    // - make the play & exit buttons static - semi transparent, on the button of the screen
    
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
            <View style = {styles.container}>

                <ViroARSceneNavigator
                    autofocus={true}
                    initialScene={{
                        scene: GravitySceneAR,
                    }}
                    style={styles.sceneContainer}>

                </ViroARSceneNavigator>

                <View style = {styles.navigationContainer}>
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity>
                            <Feather name="play-circle" size={40} style = {styles.playIcon}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={exitAR}>
                            <MaterialIcons name="exit-to-app" size={40} style = {styles.exitIcon}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneContainer: {
        flex: 1
    },
    navigationContainer: {
        gap: 60,
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        left: "25%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        backgroundColor: "#d4d4d4",
        opacity: 0.9,
        borderRadius: 30,
        padding: 10,
    },
    playIcon: {
        color: "#5fa8f8"
    },
    exitIcon: {
        color: "#262626"
    }
});