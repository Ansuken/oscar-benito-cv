import { collection, doc, getDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadCollection = async( collectionBD: string ) => {

    const collectionRef = collection( FirebaseDB, collectionBD );
    const docs = await getDocs( collectionRef );

    const collectionInfo: any[] = [];

    docs.forEach( doc => {
        collectionInfo.push( {
            id: doc.id,
            ...doc.data()
        });
    })
    return collectionInfo;
}

export const loadDocById = async (collectionBD: string, id: string) => {
    const docRef = doc( FirebaseDB, collectionBD, id );
    const docSnap = await getDoc(docRef);
    const document: any = {...docSnap.data()};
    return document;
}