import "./styles.css"
import Title from "../Title/Title"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const productos = [
    { id: 1, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-lacoste-unisex-crudo-40002h170123056-1.jpg", categoria:"buzos", titulo: "Buzo con capucha Lacoste" },
    { id: 2, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-asics-icon-sp-negro-13002i000026577-1.jpg",categoria:"buzos", titulo: "Buzo con capucha Asics" },
    { id: 3, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-fila-letter-colors-rojo-30002l506013297-1.jpg",categoria:"buzos", titulo: "Buzo Fila cuello redondo" },
    { id:4, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-adidas-egle-gfx-unite-negra-100020gn9144001-1.jpg", categoria:"remeras", titulo:"Remera Adidas Egle Unite" },
    { id:5, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-nike-worldwide-hbr-blanca-510020dj1369100-1.jpg", categoria:"remeras", titulo:"Remera Nike Worldwide blanca" },
    { id:6, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/p/a/pantalon-topper-entrenamiento-slim-negro-800020163051001-1.jpg", categoria:"pantalones", titulo:"Pantalón Topper entrenamiento slim" },
    { id:7, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/p/a/pantalon-reebok-entrenamiento-workout-gris-111020du2201001-1.jpg", categoria:"pantalones", titulo:"Pantalón Reebok entrenamiento workout" }
]

const ItemListContainer = () => {
    const [data, setData] = useState([])

    const {categoryId} = useParams() 

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
        if (categoryId) {
            getData.then(res => setData(res.filter(producto => producto.categoria === categoryId)))
        } else {
            getData.then(res => setData(res))
        }
    }, [categoryId])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }
    
    return (
        <>
            <Title greeting="Este es el título" />
            <ItemCount inicial={1} stock={10} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer