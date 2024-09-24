import { useState } from "react"
import app from "../../firebaseConfig"
import { getDatabase, ref, get} from "firebase/database"
import { useNavigate } from "react-router-dom"

interface Post {
    title: string;
    text: string;
    postId: string;
}

export default function UpdateRead() {

    const [dataArray, setDataArray] = useState<Post[]>([])
    const navigate = useNavigate()

    const getData = async () => {
        const db = getDatabase(app)
        const data = await get(ref(db, "posts"))
        const myData = data.val()
        const temporaryArray = Object.keys(myData).map(myFireID => ({
            ...myData[myFireID],
            postId: myFireID
        }))
        setDataArray(temporaryArray)
    }

    return (
        <div className="flex flex-col gap-2">
            <h1>Read</h1>
            <button onClick={getData} className="text-stone-300 text-4xl">Get Data</button>
            <div className="flex flex-col gap-4">
                {dataArray.map((post) => {
                    return (
                        <div key={post.postId} className="flex flex-col w-screen">
                            <h1 className="w-2/4 font-bold text-xl text-stone-300">{post.title}</h1>
                            <p className="w-2/4 font-base text-lg text-stone-300">{post.text}</p>
                            <button onClick={() => navigate(`/update/${post.postId}`)} >Update</button>
                        </div>
                    )}
                )}
            </div>
        </div>
    )
}