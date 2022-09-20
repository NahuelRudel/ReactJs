import "./styles.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity)
  }

  return (
    <div className="container">
      <div className="detail">
        <div>
          <img className="detailImage" src={data.image} alt={data.title} />
        </div>
        <div>
          <h1 className="detailTitle">{data.title}</h1>
          <h2 className="detailPrice">$ {data.price}</h2>
          {
            goToCart 
            ? <button>
                <Link to="/carrito" className="link">Terminar compra</Link>
              </button>
            : <ItemCount inicial={1} stock={10} onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail