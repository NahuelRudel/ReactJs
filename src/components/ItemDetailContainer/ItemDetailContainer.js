import "./styles.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const products = [
    { id: 1, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-lacoste-unisex-crudo-40002h170123056-1.jpg", category:"buzos", title: "Buzo con capucha Lacoste", price:31000 },
    { id: 2, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-asics-icon-sp-negro-13002i000026577-1.jpg",category:"buzos", title: "Buzo con capucha Asics", price:12000 },
    { id: 3, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-fila-letter-colors-rojo-30002l506013297-1.jpg",category:"buzos", title: "Buzo Fila cuello redondo", price:13800 },
    { id: 4, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-egle-gfx-unite-negra-100020gn9144001-1.jpg", category:"remeras", title:"Remera Adidas Egle Unite", price:13900 },
    { id: 5, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-nike-worldwide-hbr-blanca-510020dj1369100-1.jpg", category:"remeras", title:"Remera Nike Worldwide blanca", price:8499 },
    { id: 6, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/p/a/pantalon-topper-entrenamiento-slim-negro-800020163051001-1.jpg", category:"pantalones", title:"Pantalón Topper entrenamiento slim", price:9499 },
    { id: 7, image: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-reebok-entrenamiento-workout-gris-111020du2201001-1.jpg", category:"pantalones", title:"Pantalón Reebok entrenamiento workout", price:13600 }
]


const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })

        getData.then(res => setData(res.find(product => product.id === parseInt(itemId))))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer