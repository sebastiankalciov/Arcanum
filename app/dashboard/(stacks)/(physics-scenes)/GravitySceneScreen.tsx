import {useEffect, useState} from "react";
import {
    ViroAmbientLight,
    ViroARScene,
    ViroARSceneNavigator, ViroButton,
    ViroFlexView, ViroSphere, ViroSpotLight, ViroText,
    ViroTrackingReason,
    ViroMaterials,
} from "@reactvision/react-viro";
import {TouchableOpacity, View} from "react-native";
import {useRouter} from "expo-router";
import React from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {styles} from "@/styles/screens/ar-scenes";

// number - smaller => object falls faster
// number - bigger => object falls slower

const planetsGravity = {
    "earth": -0.15,
    "moon": -0.015,
    "mars": -0.03,
    "jupiter": -0.07
}

export default function GravitySceneScreen() {

    const router = useRouter();

    const exitAR = () => {
        router.back()
    }

    const GravitySceneAR = () => {

        const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);
        const initialSpherePosition: [number, number, number] = [0, 1.12, -2];
        let [spherePosition, setSpherePosition] = useState<[number, number, number]>([0, 1.12, -2]);
        const [gravity, setGravity] = useState(planetsGravity.earth);

        const groundY = -3;
        const sphereRadius = 0.16;

        const startAnimation = () => {
            setSpherePosition(initialSpherePosition);
            setIsAnimationPlaying(true);

        };

        useEffect(() => {
            let interval: NodeJS.Timeout | null = null;

            if (isAnimationPlaying) {
                console.log(gravity);
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
                console.log("animation clear interval")
                if (interval) clearInterval(interval);
            };
        }, [isAnimationPlaying]);

        const onInitialized = (state: any, reason: ViroTrackingReason) => {
            console.log("AR Tracking:", state, reason);
        };

        ViroMaterials.createMaterials({
            yellowMaterial: {
                diffuseColor: "#eab330",
            },
        });

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
                    onClick={() => setGravity(planetsGravity.earth)}
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
                    onClick={() => setGravity(planetsGravity.moon)}
                />
                <ViroButton
                    source={require("@/assets/images/planets/moon.png")}
                    position={[-3, 0.2, -2]}
                    rotation={[0, 80, 0]}
                    height={0.5}
                    width={0.5}
                />

                {/* play button */}
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
