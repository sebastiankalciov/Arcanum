import {View} from "react-native";

type KSpacerProps = {
    size?: number | 10
}
export const KSpacer = (props: KSpacerProps) => {
    return (
        <View style = {{height: props.size}}>
        </View>
    )
}