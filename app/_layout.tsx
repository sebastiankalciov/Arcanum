import {Stack, useRouter, useSegments} from "expo-router";
import {useEffect, useState} from "react";
import {onAuthStateChanged, User} from "@firebase/auth";
import {auth} from "@/firebase/config";
import {ActivityIndicator, View} from "react-native";

export default function RootLayout() {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const router = useRouter();
    const segments = useSegments();

    const authStateChanged = (user: User | null) => {
        console.log('authStateChanged', user);
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(auth, authStateChanged);
        return subscriber;
    }, []);

    useEffect(() => {
        if (initializing) return;
        const isInAuthentificatedDirectory = segments[0] === 'dashboard';

        if (user && !isInAuthentificatedDirectory) {
            // @ts-ignore
            router.replace('dashboard/HomeScreen');
        } else if (!user && isInAuthentificatedDirectory) {
            router.replace('/');
        }

    }, [user, initializing]);

    if (initializing) {
        return (
            <View>
                <ActivityIndicator size = "large"/>
            </View>
        )
    }

    return (
      <Stack screenOptions={{headerShown: false, headerTransparent: true}}>
            <Stack.Screen name = "index"/>
      </Stack>);
}
