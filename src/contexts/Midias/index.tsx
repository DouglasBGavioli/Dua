import { collection, getDocs } from "firebase/firestore";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { db } from "../../config/firebaseClient";

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
    const [gallery, setGallery] = useState<Gallery[] | null>([]);
    const [collections, setCollections] = useState('');

    const getMidias = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "images"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as unknown as Gallery
        setGallery(Object.values(data))
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
