import { useState } from "react"
import app from "../../firebaseConfig"
import { getDatabase, ref, get} from "firebase/database"

interface Post {
    title: string;
    text: string;
}

export default function Read() {

    const [dataArray, setDataArray] = useState<{ [key: string]: Post }>({})

    const getData = async () => {
        const db = getDatabase(app)
        const data = await get(ref(db, "posts"))
        setDataArray(data.val())
    }

    return (
        <div>
            <h1>Read</h1>
            <button onClick={getData}>Get Data</button>
            <div>
                {Object.keys(dataArray).map((key) => {
                    return (
                        <div key={key}>
                            <h1>{dataArray[key].title}</h1>
                            <p>{dataArray[key].text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}