import { useCallback, useEffect, useState } from "react"
import "./style.min.css"

import { storage, app } from "../../config/firebaseClient"
import { getDownloadURL, listAll, ref, StorageReference } from "firebase/storage"
import ImageCard from "../../components/ImageCard";

interface Image {
    url: string;
}
export default function History() {
    const [images, setImages] = useState<Image[]>([]);

    const getImages = useCallback(async () => {
        try {
            const storageRef: StorageReference = ref(storage);
            const res = await listAll(storageRef);
            const urls = await Promise.all(res.items.map(async (itemRef) => {
                try {
                    const url = await getDownloadURL(itemRef);
                    return { url };
                } catch (error) {
                    console.log(error);
                    return null;
                }
            }));
            const filteredUrls = urls.filter(url => url !== null) as Image[];
            setImages(filteredUrls);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getImages();
    }, [getImages]);

    return (
        <div className="dua-history">
            <div className="dua-history__title">
                <h1>Nossa história</h1>
            </div>
            <div className="dua-history__image">
                {images.map((image, index) => (
                    <ImageCard url={image.url} data="23/11/22" evento="Lumberjack" key={index} />
                ))}
            </div>
        </div>
    )
}

