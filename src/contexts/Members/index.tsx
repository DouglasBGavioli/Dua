import { collection, getDocs } from "firebase/firestore";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { db } from "../../config/firebaseClient";

interface Members {
    id: string; xp: number, name: string, insta: string, level: number, file: string
}

type MembersContextProvider = {
    getMembers: () => Promise<void>,
    members: Members[] | null,
}

type MembersProviderProps = {
    children: ReactNode;
};

export const MembersContext = createContext({} as MembersContextProvider);
export const useMembers = () => useContext(MembersContext);

export const MembersProvider = (props: MembersProviderProps) => {
    const [members, setMembers] = useState<Members[] | null>([]);

    const getMembers = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "members"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as unknown as {}
        setMembers(Object.values(data))
    }, []);

    return (
        <MembersContext.Provider value={{
            members,
            getMembers,
        }}>
            {props.children}
        </MembersContext.Provider>
    )

}
