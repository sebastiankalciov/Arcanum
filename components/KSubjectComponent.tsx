import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type KSubjectComponentProps = {
    icon: string;
    title: string;
}

export const KSubjectComponent = (props: KSubjectComponentProps) => {

    const iconName = props.icon;
    return (
        <View style = {{alignItems: "center", gap: 20}}>

                <View style = {styles.iconContainer}>
                    {
                        iconName === "rocket" && <Ionicons name = "rocket" size={60} color="#141414" />
                    }
                    {
                        iconName === "cow" && <FontAwesome6 name="cow" size={60} color="#141414" />
                    }

                    {
                        iconName === "computer" && <FontAwesome6 name="computer" size={60} color="#141414" />
                    }
                </View>
            <Text style = {styles.subjectText}>{props.title}</Text>

        </View>
    )
}