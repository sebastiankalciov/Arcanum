import {addDoc, collection, doc, getDoc, getDocs, query, where} from "@firebase/firestore";
import {firestore} from "@/firebase/config";


export const addProgress = async (email: string, module:string, lecture: string) => {
    try {
        const userReference = doc(firestore, "users", email);
        const progressCollection = collection(userReference, module);

        const checkLectureQuery = query(progressCollection,
            where("lecture", "==", lecture));

        const lectureQuerySnapshot = await getDocs(checkLectureQuery);

        if (lectureQuerySnapshot.empty) {

            await addDoc(progressCollection, {lecture});

            console.log("progress for " + lecture + " added successfully.");

        }
    } catch (error) {
        console.error("error adding progress collection", error);
    }
}