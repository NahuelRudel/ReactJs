import "./styles.css"
import {useState} from "react"

const ItemCount = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)

    const incrementar = () => {
        setCount(count + 1)
    }

    const decrementar = () => {
        setCount(count - 1)
    }

  return (
    <div className="contador">
        <button disabled={count <= 1} onClick={decrementar}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={incrementar}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount