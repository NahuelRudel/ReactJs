import "./styles.css"
import Title from "../Title/Title"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }
    
    return (
        <>
            <Title greeting="Este es el título" />
            <ItemCount inicial={1} stock={10} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer