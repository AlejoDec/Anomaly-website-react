import { useState } from "react"
// import { useParams } from "react-router-dom"
import app from "../../firebaseConfig"
import { getDatabase, ref, get, set, push } from "firebase/database"

interface Post {
    title: string;
    text: string;
    postId: string;
}

export default function Dashboard() {
    const [dataArray, setDataArray] = useState<Post[]>([])
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newPosts = push(ref(db, "posts"));
        set(newPosts, {
            title: titleInput,
            text: textInput
        }).then(() => {
            console.log("Data saved successfully");
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    const getData = async () => {
        const db = getDatabase(app)
        const data = await get(ref(db, "posts"))
        setDataArray(data.val())
    }

    return (
        <div>
            <h1>DashBorad Anomaly</h1>
            <button onClick={getData} className="bg-white text-black">Get Data</button>
            <div>
            {dataArray.map((post, index) => {
                    return (
                        <div key={index}>
                            <h1>{post.title}</h1>
                            <p>{post.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col w-screen h-screen items-center justify-center gap-4">
                <input type="text" value={titleInput} placeholder="Titulo" onChange={(e) => setTitleInput(e.target.value)} />
                <input type="text" value={textInput} placeholder="Texto" onChange={(e) => setTextInput(e.target.value)} />
                <button onClick={saveData} >Guardar</button>
            </div>
        </div>
    )
}