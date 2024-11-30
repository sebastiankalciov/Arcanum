import {Text, View} from "react-native";
import {styles} from "@/styles/screens/PhysicsModulesScreen.styles";

type KModuleComponentProps = {
    title: string;
    description: string;
}

export const KModuleComponent = (props: KModuleComponentProps) => {
    return (
        <View style = {styles.moduleContainer}>
            <View style = {styles.progressPhysicsContainer}>
                <Text style = {styles.moduleTitle}>{props.title}</Text>
                <Text style = {styles.moduleText}>{props.description}</Text>
            </View>
        </View>
    );
}