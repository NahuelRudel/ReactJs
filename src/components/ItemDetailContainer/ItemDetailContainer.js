import "./styles.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        const querydb = getFirestore()
        const queryDoc = doc(querydb, "products", itemId)
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}))
    }, [itemId])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer