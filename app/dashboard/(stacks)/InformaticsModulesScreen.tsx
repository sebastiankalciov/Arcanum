import KSubjectScreen from "@/components/KSubjectScreen";

const descriptions = {
    "binary": "\n" +
        "Interact with glowing cubes to represent binary digits (0s and 1s).\n\n" +
        "Toggle the cubes to form binary numbers and instantly see their corresponding decimal value."
}

export default function InformaticsModulesScreen() {

    return (
        <KSubjectScreen
            subject={"Informatics"}
            module={"Binary numbers"}
            pathToModule={"(informatics-scenes)/BinarySceneScreen"} description={descriptions.binary}
        />
    )
}