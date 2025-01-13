import KSubjectScreen from "@/components/KSubjectScreen";

const descriptions = {
    "cell": "\n" +
        "View a detailed 3D model of a cell in Augmented Reality.\n\n" +
        "Explore its structure by looking around and reading informative text about the " +
        "different components, like the nucleus and mitochondria."

}

export default function BiologyModulesScreen() {

    return (
        <KSubjectScreen
            subject={"Biology"}
            module={"Cell"}
            pathToModule={"(biology-scenes)/CellSceneScreen"} description={descriptions.cell}
        />
    )
}