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
    const [biologyProgress, setBiologyProgress] = useState<number | null>(null);
    const [informaticsProgress, setInformaticsProgress] = useState<number | null>(null);

    const fetchProgress = async () => {
        const progressPhysics = await computeProgress(`${auth.currentUser?.email}`, "PHYSICS");
        const progressBiology = await computeProgress(`${auth.currentUser?.email}`, "BIOLOGY");
        const progressInformatics = await computeProgress(`${auth.currentUser?.email}`, "INFORMATICS");

        setPhysicsProgress(progressPhysics);
        setBiologyProgress(progressBiology);
        setInformaticsProgress(progressInformatics);
    };

    useEffect(() => {
        fetchProgress();
    }, []);

    const [fontsLoaded] = useFonts({
        'JetBrains-Bold': require('@/assets/fonts/JetBrains/JetBrainsMono-Bold.ttf'),
        'JetBrains-ExtraBold': require('@/assets/fonts/JetBrains/JetBrainsMono-ExtraBold.ttf'),
        'JetBrains-Regular': require('@/assets/fonts/JetBrains/JetBrainsMono-Regular.ttf'),
        'Inter-Regular': require('@/assets/fonts/Inter/Inter_18pt-Regular.ttf'),
        'Inter-ExtraBold': require('@/assets/fonts/Inter/Inter_24pt-ExtraBold.ttf'),
        'Inter-Bold': require('@/assets/fonts/Inter/Inter_24pt-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>
    }

    return (
        <KContainer>
            <View style = {styles.textWithIconContainer}>
                <Text style = {styles.titleText}>Good day, adventurer</Text>
                <MaterialIcons name="waving-hand" size={24} color="#d05151" />
            </View>

            <Text style = {styles.subtitleText}>
                Prepared for a new challenge?
                Press on a subject to start the experience
            </Text>

            <Text style = {styles.categoriesText}>Subjects</Text>

            <View style = {styles.contentContainer}>
                <View style = {styles.subjectsContainer}>

                    <Link href = "../(stacks)/PhysicsModulesScreen">
                        <TouchableWithoutFeedback>
                            <KSubjectComponent icon={"rocket"} title={"Physics"}/>
                        </TouchableWithoutFeedback>
                    </Link>
                    <Link href = "../(stacks)/BiologyModulesScreen">
                        <TouchableWithoutFeedback>
                            <KSubjectComponent icon={"cow"} title={"Biology"}/>
                        </TouchableWithoutFeedback>
                    </Link>

                    <Link href = "../(stacks)/InformaticsModulesScreen">
                        <TouchableWithoutFeedback>
                            <KSubjectComponent icon={"computer"} title={"Informatics"}/>
                        </TouchableWithoutFeedback>
                    </Link>
                </View>

            </View>

                <Text style = {styles.categoriesText}>Your progress</Text>

                <View style = {styles.progressContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.progressSubjectTitle}>Physics</Text>
                        <Text style = {styles.progressStatsText}>
                            {physicsProgress !== null ? `${physicsProgress}%` : "Loading..."}
                        </Text>
                    </View>
                </View>

                <View style = {styles.progressContainer}>
                    <View style = {styles.progressPhysicsContainer}>
                        <Text style = {styles.progressSubjectTitle}>Biology</Text>
                        <Text style = {styles.progressStatsText}>
                            {biologyProgress !== null ? `${biologyProgress}%` : "Loading..."}
                        </Text>
                    </View>
                </View>

                <View style = {styles.progressContainer}>
                    <View style = {styles.progressInfoContainer}>
                        <Text style = {styles.progressSubjectTitle}>Informatics</Text>
                        <Text style = {styles.progressStatsText}>
                            {informaticsProgress !== null ? `${informaticsProgress}%` : "Loading..."}
                        </Text>
                    </View>
                </View>

        </KContainer>
    )
}