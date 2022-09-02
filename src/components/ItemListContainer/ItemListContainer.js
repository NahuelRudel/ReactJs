import "./styles.css"
import Title from "../Title/Title"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import {useState, useEffect} from "react"

const productos = [
    { id: 1, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-lacoste-unisex-crudo-40002h170123056-1.jpg", titulo: "Buzo con capucha Lacoste" },
    { id: 2, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-con-capucha-asics-icon-sp-negro-13002i000026577-1.jpg", titulo: "Buzo con capucha Asics" },
    { id: 3, imagen: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/b/u/buzo-fila-letter-colors-rojo-30002l506013297-1.jpg", titulo: "Buzo Fila cuello redondo" }
]

const ItemListContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        }) 
        getData.then(res => setData(res))
    }, [])

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