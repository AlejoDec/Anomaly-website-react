import { useState, useEffect } from "react"
import app from "../../firebaseConfig"
import { getDatabase, ref, get, set} from "firebase/database"
import { useParams } from "react-router-dom"



export default function UpdateRead() {

    const {postId} = useParams()

    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase(app)
            const data = get(ref(db, `posts/${postId}`))
            data.then((snapshot) => {
                const myData = snapshot.val()
                setTitleInput(myData.title)
                setTextInput(myData.text)
            })
        }
        fetchData();
    },[postId])



    const saveData = async () => {
        const db = getDatabase(app)
        set(ref(db, `posts/${postId}`), {
            title: titleInput,
            text: textInput
        }).then(() => {
            console.log("Data updated successfully");
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    return (
        <div>
            <h1>Update</h1>
            {/* <button onClick={getData}>Get Data</button> */}
            <input type="text" className="text-black" value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>

            <input type="text" value={textInput} onChange={(e) => setTitleInput(e.target.value)}/>

            <button onClick={saveData}>UPDATE</button>
        </div>
    )
}