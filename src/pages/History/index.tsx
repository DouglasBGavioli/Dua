import { useCallback, useEffect, useState } from "react"
import "./style.min.css"

import { storage, db } from "../../config/firebaseClient"
import { getDownloadURL, listAll, ref, StorageReference } from "firebase/storage"
import ImageCard from "../../components/ImageCard";
import { useLoader, useMidias } from "../../contexts";


interface Gallery {
    id: string,
    data: string,
    description: string,
    url: string[]
}

export default function History() {
    const { getMidias, setCollections, gallery, collections } = useMidias()
    const { handleLoader } = useLoader();
    const [arrGallery, setArrGallery] = useState<Gallery[]>()

    useEffect(() => {
        setCollections("images")
        getMidias()
        const myGallery: Gallery | null = gallery; // exemplo de valor que pode ser nulo
        if (myGallery) {
            const myArray = Object.values(myGallery);
            setArrGallery(myArray);
        }
    }, [gallery, getMidias, setCollections]);



    return (
        <div className="dua-history">
            <div className="dua-history__title">
                <h1>Nossa história</h1>
            </div>
            <div className="dua-history__image">
                {arrGallery?.map((item, index) => (
                    <ImageCard url={item.url?.[1]} data={item.data} evento={item.description} key={index} />
                ))}
            </div>
        </div>
    )
}

