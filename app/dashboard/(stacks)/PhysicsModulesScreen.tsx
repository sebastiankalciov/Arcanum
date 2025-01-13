import KSubjectScreen from "@/components/KSubjectScreen";

const descriptions = {
    "gravity": "\n" +
        "Learn the basics of gravity!\n\nExplore how objects fall, " +
        "understand gravitational force, and try an interactive simulation to see gravity in action.",
}

export default function PhysicsModulesScreen() {

    return (
        <KSubjectScreen
            subject={"Physics"}
            module={"Gravity"}
            pathToModule={"(physics-scenes)/GravitySceneScreen"} description={descriptions.gravity}
        />
    )
}