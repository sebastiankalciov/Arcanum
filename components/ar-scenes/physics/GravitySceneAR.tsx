import {useEffect, useState} from "react";
import {
    ViroAmbientLight,
    ViroARScene, ViroButton,
    ViroFlexView,
    ViroMaterials,
    ViroSphere,
    ViroSpotLight, ViroText, ViroTrackingReason
} from "@reactvision/react-viro";
import {planetsGravity} from "@/constants/planetsGravity";

// number < -0.015 => object falls faster
// number > -0.015 => object falls slower

const info = "What is Gravity?\n" +
    "Gravity is a force that pulls objects toward each other." +
    "On Earth, it’s what causes objects to fall to the ground." +
    "Everything with mass is affected by gravity, from tiny particles to entire planets," +
    "and the force depends on the mass of the objects and the distance between them." +
    "Earth’s Gravity\n" +
    "Earth’s gravity keeps us and everything else grounded." +
    "It pulls objects toward the center of the planet with a strength of about 9.8 meters per" +
    "second squared (m/s²). This is why when you drop something, it always falls."
export const GravitySceneAR = () => {

    const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);
    const initialSpherePosition: [number, number, number] = [0, 1.12, -2];
    const [spherePosition, setSpherePosition] = useState<[number, number, number]>([0, 1.12, -2]);
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
                width={3.5}
                height={1.5}
                style={{
                    backgroundColor: "#ffffff88",
                    borderRadius: 0.1,
                    padding: 0.1,
                }}
            >

                <ViroText
                    text={info}
                    style={{
                        fontFamily: "Arial",
                        fontSize: 12,
                        color: "#000000",
                        width: 3.5
                    }}
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