import { collection, getDocs } from "firebase/firestore";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { db } from "../../config/firebaseClient";

interface Store {
    id: string,
    value?: string,
    contact: number,
    text: string,
    url: string[]
}

type StoreContextProvider = {
    getStore: () => Promise<void>,
    collections: string,
    setCollections: (collection: string) => void
    store: Store[] | null
}

type StoreProviderProps = {
    children: ReactNode;
};

export const StoreContext = createContext({} as StoreContextProvider);
export const useStore = () => useContext(StoreContext);

export const StoreProvider = (props: StoreProviderProps) => {
    const [store, setStore] = useState<Store[] | null>([]);
    const [collections, setCollections] = useState('');

    const getStore = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "store"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as unknown as Store
        setStore(Object.values(data))
    }, []);

    return (
        <StoreContext.Provider value={{
            getStore,
            collections,
            setCollections,
            store,
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}
