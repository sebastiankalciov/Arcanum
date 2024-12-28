import {
    Viro3DObject,
    ViroAmbientLight,
    ViroARScene, ViroFlexView,
    ViroSpotLight, ViroText, ViroTrackingReason
} from "@reactvision/react-viro";

export const BinarySceneAR = () => {

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
        </ViroARScene>
    );
}