import "./styles.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from "react"

const producto = { id: 1, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-egle-gfx-unite-negra-100020gn9144001-1.jpg", titulo: "Remera Adidas Egle Unite", precio: 10000}

const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(producto)
            }, 2000)
        })

        getData.then(res => setData(res))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer