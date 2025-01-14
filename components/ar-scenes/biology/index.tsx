import {
    Viro3DObject,
    ViroAmbientLight,
    ViroARScene,
    ViroSpotLight, ViroText, ViroTrackingReason
} from "@reactvision/react-viro";

export const CellSceneAR = () => {
    const info = `1. Nucleus: The large pink sphere in the center of the cell, it contains DNA and controls cell activities.
2. Mitochondria: The orange bean-shaped structures, responsible for energy production.
3. Golgi Apparatus: The red stacked structures near the nucleus, responsible for packaging proteins.
4. Ribosomes: The small purple dots on the endoplasmic reticulum, responsible for protein synthesis.
5. Endoplasmic Reticulum: The blue membrane network surrounding the nucleus, aiding in protein and lipid production.`;

    const onInitialized = (state: any, reason: ViroTrackingReason) => {
        console.log("AR Tracking:", state, reason);
    };

    return (
        <ViroARScene onTrackingUpdated={onInitialized}>
            <ViroAmbientLight color="#FFFFFF" intensity={500} />
            <ViroSpotLight
                position={[0, 5, -2]}
                color="#FFFFFF"
                direction={[0, -1, 0]}
                intensity={200}
            />

            <ViroText
                text={info}
                style={{
                    fontFamily: "Arial",
                    fontSize: 15,
                    color: "#ffffff",
                }}
                rotation={[0, 90, 0]}
                position={[-6.5, -2, -1.5]}
                width={6}
                height={5}
            />

            <Viro3DObject
                type={"GLB"}
                source={require("../../../assets/objects/animal_cell/animal_cell2.glb")}
                position={[0, -0.1, -1]}
                scale={[0.1, 0.1, 0.1]}
            />

        </ViroARScene>
    );
}