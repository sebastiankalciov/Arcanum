import {
    Viro3DObject,
    ViroAmbientLight,
    ViroARScene,
    ViroSpotLight, ViroText, ViroTrackingReason
} from "@reactvision/react-viro";
import {useState} from "react";

export const BinarySceneAR = () => {
    const [binaryState, setBinaryState] = useState([0, 0, 0, 0, 0]);

    const toggleCube = (index: number) => {
        const newState = [...binaryState];
        newState[index] = newState[index] === 0 ? 1 : 0;
        setBinaryState(newState);
    };

    const calculateDecimal = () => {
        const reversedBinaryState = [...binaryState].reverse();

        return reversedBinaryState.reduce((acc, bit, index) => acc + bit * Math.pow(2, index), 0);
    };
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

            {binaryState.map((bit, index) => (

                <Viro3DObject
                    key={index}
                    type={"GLB"}
                    source={bit === 1 ? require('../../../assets/objects/glowing_cube.glb') : require('../../../assets/objects/cube.glb')}
                    position={[index * 0.9 - 3, 0, -3]}
                    scale={[0.2, 0.2, 0.2]}
                    onClick={() => toggleCube(index)}
                />
            ))}

            <ViroText
                text={`Binary: ${binaryState.join('')} Decimal: ${calculateDecimal()}`}
                position={[0, -0.8, -2]}
                style={{ fontSize: 30, color: 'white' }}
            />

            <ViroText
                text={`Decimal: ${calculateDecimal()}`}
                position={[0, -1.8, -2]}
                style={{ fontSize: 30, color: 'white' }}
            />

        </ViroARScene>
    );
}