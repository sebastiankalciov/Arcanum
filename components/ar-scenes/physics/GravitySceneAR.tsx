import {useEffect, useState} from "react";
import {
    Viro3DObject,
    ViroAmbientLight,
    ViroARScene, ViroButton,
    ViroFlexView,
    ViroMaterials,
    ViroSphere,
    ViroSpotLight, ViroText, ViroTrackingReason
} from "@reactvision/react-viro";
import {planetsGravity} from "@/constants/planetsGravity";

const info = "What is Gravity?\n" +
    "Gravity is a force that pulls objects toward each other.\n\n" +
    "On Earth, it’s what causes objects to fall to the ground.\n" +
    "Everything with mass is affected by gravity, from tiny particles\nto entire planets," +
    "and the force depends on the mass of the objects\nand the distance between them.\n\n" +
    "Earth’s gravity keeps us and everything else grounded.\n" +
    "It pulls objects toward the center of the planet \nwith a strength of about 9.8 meters per" +
    "second squared (m/s²).\n\n This is why when you drop something, it always falls."

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
            <Viro3DObject
                type={"GLB"}
                source={require("../../../assets/objects/old_soccer_ball.glb")}
                position={spherePosition}
                scale={[0.1, 0.1, 0.1]}
            />

            {/* text card */}
                <ViroText
                    text={info}
                    style={{
                        fontFamily: "Arial",
                        fontSize: 12,
                        color: "#000000",
                    }}
                    height={5}
                    width={6}
                    position={[2.4, -0.5, -2.5]}
                    rotation={[0, -50, 0]}
                />

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