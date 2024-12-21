import {Text, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "@/styles/screens/HomeScreen.styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useFonts} from "expo-font";
import {KSubjectComponent} from "@/components/KSubjectComponent";
import {Link} from "expo-router";
import {KContainer} from "@/components/KContainer";
import {computeProgress} from "@/utils/computeProgress";
import {auth} from "@/firebase/config";
import {useEffect, useState} from "react";

export default function HomeScreen() {
    const [physicsProgress, setPhysicsProgress] = useState<number | null>(null);

    const fetchProgress = async () => {
        const progress = await computeProgress(`${auth.currentUser?.email}`, "PHYSICS");
        setPhysicsProgress(progress);
    };

    useEffect(() => {
        fetchProgress();
    }, []);

    const [fontsLoaded] = useFonts({
        'JetBrains-Bold': require('@/assets/fonts/JetBrains/JetBrainsMono-Bold.ttf'),
        'JetBrains-ExtraBold': require('@/assets/fonts/JetBrains/JetBrainsMono-ExtraBold.ttf'),
        'JetBrains-Regular': require('@/assets/fonts/JetBrains/JetBrainsMono-Regular.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/Inter_18pt-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    return (
        <KContainer>
            <View style = {styles.textWithIconContainer}>
                <Text style = {styles.titleText}>Good day, adventurer</Text>
                <MaterialIcons name="waving-hand" size={24} color="#a66cfc" />
            </View>

            <Text style = {styles.subtitleText}>
                Prepared for a new challenge?
                Press on a subject to <Text style = {{fontWeight: "bold", color: "#fff"}}>start</Text>
            </Text>

            <Text style = {styles.categoriesText}>Subjects</Text>

            <View style = {styles.contentContainer}>
                <View style = {styles.subjectsContainer}>

                    <Link href = "../(stacks)/PhysicsModulesScreen">
                        <TouchableWithoutFeedback>
                            <KSubjectComponent icon={"rocket"} title={"Physics"}/>
                        </TouchableWithoutFeedback>
                    </Link>

                    <KSubjectComponent icon={"cow"} title={"Biology"}/>
                    <KSubjectComponent icon={"computer"} title={"Informatics"}/>
                </View>

            </View>

                <Text style = {styles.categoriesText}>Your progress</Text>


                <View style = {styles.progressContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.progressSubjectTitle}>Physics</Text>
                        <Text style = {styles.progressStatsText}>{physicsProgress !== null ? `${physicsProgress}%` : "Loading..."}</Text>
                    </View>
                </View>

                <View style = {styles.progressContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.progressSubjectTitle}>Biology</Text>
                        <Text style = {styles.progressStatsText}>20%</Text>
                    </View>
                </View>

                <View style = {styles.progressContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.progressSubjectTitle}>Infor....</Text>
                        <Text style = {styles.progressStatsText}>69%</Text>
                    </View>
                </View>

        </KContainer>
    )
}