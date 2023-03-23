import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { storage, db } from "../../config/firebaseClient";
import { useLoader } from "../Loader";

interface Gallery {
    id: string,
    data: string,
    description: string,
    url: string[]
}

type MidiasContextProvider = {
    getMidias: () => Promise<void>,
    collections: string,
    setCollections: (collection: string) => void
    gallery: Gallery[] | null
}

type MidiasProviderProps = {
    children: ReactNode;
};

export const MidiasContext = createContext({} as MidiasContextProvider);
export const useMidias = () => useContext(MidiasContext);

export const MidiasProvider = (props: MidiasProviderProps) => {
    const { handleLoader } = useLoader()
    const [gallery, setGallery] = useState<Gallery[] | null>([]);
    const [collections, setCollections] = useState('');

    const getMidias = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "images"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as unknown as Gallery
        setGallery([data])
    }, []);

    return (
        <MidiasContext.Provider value={{
            getMidias,
            collections,
            setCollections,
            gallery,
        }}>
            {props.children}
        </MidiasContext.Provider>
    )

}
