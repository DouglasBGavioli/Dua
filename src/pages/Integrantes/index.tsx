import { getDocs, collection } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { db } from "../../config/firebaseClient";
import "./style.min.css"
import { TitlePage } from "../../components/TitlePage";
import ProgressBar from "../../components/ProgressBar";


const ArrayLevel = [
    {
        img: "./trainee.png",
        lvl: "CDT"
    },
    {
        img: "./recruit.png",
        lvl: "RCT"
    },
    {
        img: "./private.png",
        lvl: "SDR"
    },
    {
        img: "./private_first.png",
        lvl: "SPC"
    },
    {
        img: "./croporal.png",
        lvl: "CAB"
    },
    {
        img: "./sergeant.png",
        lvl: "SGT"
    },
    {
        img: "./ssg01.png",
        lvl: "SGT¹"
    },
    {
        img: "./ssg02.png",
        lvl: "SGT²"
    },
    {
        img: "./ssg03.png",
        lvl: "SGT3"
    },
    {
        img: "./sfc01.png",
        lvl: "SG"
    },
    {
        img: "./msg03.png",
        lvl: "SGM"
    },
    {
        img: "./csm01.png",
        lvl: "SMC"
    },
    {
        img: "./2lt01.png",
        lvl: "ST"
    },
    {
        img: "./1lt01.png",
        lvl: "PT"
    },
    {
        img: "./cpt01.png",
        lvl: "CAP"
    },
    {
        img: "./maj01.png",
        lvl: "MAJ"
    },
    {
        img: "./ltc01.png",
        lvl: "TNC"
    },
    {
        img: "./col01.png",
        lvl: "CEL"
    },
    {
        img: "./star_lv1.png",
        lvl: "GB"
    },
    {
        img: "./star_lv2.png",
        lvl: "GD"
    },
    {
        img: "./star_lv3.png",
        lvl: "TG"
    },
    {
        img: "./star_lv4.png",
        lvl: "GEN"
    },
    {
        img: "./star_lv5.png",
        lvl: "GE"
    },
    {
        img: "./logo.png",
        lvl: "GM"
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
                {members?.map((member, index) => (
                    <div className="dua-members__cards__content" key={index}>
                        <div className="dua-members__cards__content-card">
                            <div className="dua-members__cards__content-card-image">
                                <img src={member.file} alt="Card" />
                            </div>
                            <div className="dua-members__cards__content-card-descriptions">
                                <div className="dua-members__cards__content-card-descriptions-text">
                                    <div className="dua-members__cards__content-card-descriptions-text-content">
                                        <h2>{member.name}</h2>
                                        <p>{member.insta}</p>
                                    </div>
                                    <div className="dua-members__cards__content-card-descriptions-text-imgLvl">
                                        <img src={ArrayLevel[member?.level]?.img} alt={ArrayLevel[member.level]?.lvl} title={ArrayLevel[member.level]?.lvl} />
                                        <p>{ArrayLevel[member.level]?.lvl}</p>
                                    </div>

                                </div>
                                <div className="dua-members__cards__content-card-descriptions-xp">
                                    <p>XP</p>
                                    <ProgressBar percentage={member.xp} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}