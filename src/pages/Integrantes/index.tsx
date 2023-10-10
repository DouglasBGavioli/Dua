import { getDocs, collection } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { db } from "../../config/firebaseClient";
import "./style.min.css"
import { TitlePage } from "../../components/TitlePage";
import ProgressBar from "../../components/ProgressBar";


const ArrayLevel = [
    {
        img: "./soldadon.png",
        lvl: "SD"
    },
    {
        img: "./cabo.png",
        lvl: "CB"
    },
    {
        img: "./sargento.png",
        lvl: "SGT"
    },
    {
        img: "./tenente.png",
        lvl: "TEN"
    },
    {
        img: "./capitao.png",
        lvl: "CAP"
    },
]

export default function Integrantes() {
    const [members, setMembers] = useState<{ id: string; xp: number, name: string, insta: string, level: number, file: string }[]>([])

    const getMembers = useCallback(async () => {
        const querySnapshot = await getDocs(collection(db, "members"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as unknown as {}
        setMembers(Object.values(data))
    }, []);
    useEffect(() => {
        getMembers()
    }, [getMembers])

    return (
        <div className="dua-members">
            <TitlePage title="Integrantes" subtitle="Integrantes e suas respectivas patentes(baseadas na experiência adquirida dentro da Divisão Urutu)" />
            <div className="dua-members__cards">
                {members
                    ?.slice()
                    .sort((a, b) => (a.level > b.level ? -1 : 1))
                    ?.map((member, index) => (
                        <div className="dua-members__cards__content" key={index}>
                            <div className="dua-members__cards__content-card">
                                <div className="dua-members__cards__content-card-image">
                                    <img src={member.file} alt="Card" />
                                </div>
                                <div className="dua-members__cards__content-card-descriptions">
                                    <div className="dua-members__cards__content-card-descriptions-text">
                                        <div className="dua-members__cards__content-card-descriptions-text-content">
                                            <h2>{member.name}</h2>
                                            <a
                                                href={`instagram://user?username=${member.insta.replace("@", "")}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.location.href = `https://www.instagram.com/${member.insta.replace("@", "")}/`;
                                                }}
                                            >
                                                {member.insta}
                                            </a>
                                        </div>
                                        <div className="dua-members__cards__content-card-descriptions-text-imgLvl">
                                            <img src={ArrayLevel[member?.level]?.img} alt={ArrayLevel[member.level]?.lvl} title={ArrayLevel[member.level]?.lvl} />
                                            <p>{ArrayLevel[member.level]?.lvl}</p>
                                        </div>

                                    </div>
                                    <div className="dua-members__cards__content-card-descriptions-xp">
                                        <p>XP</p>
                                        <ProgressBar percentage={member.level === 4 ? 100 : member.xp} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}