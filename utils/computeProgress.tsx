import {collection, getDocs} from "@firebase/firestore";
import {firestore} from "@/firebase/config";

export const computeProgress = async (email: string, module:string) => {
    const totalLectures = 3;

    const progressCollection = collection(firestore, "users", email, module);

    try {
        const querySnapshot = await getDocs(progressCollection);
        const progressCounter = querySnapshot.size;
        return ((progressCounter * 100)/totalLectures).toFixed(1);
    } catch (e) {
        console.error("error computing progress: ", e);
        return 0;
    }
}