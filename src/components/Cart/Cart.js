import "./styles.css"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const Cart = () => {
    const {cart, totalPrice} = useCartContext()

    const order = {
        buyer: {
            name: "Nahuel",
            email: "nahuel@gmail.com",
            phone: "12345678",
            adress: "direccion 1234"
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
               <p>No hay elementos en el carrito</p>
               <Link to='/' className="link">Ver productos disponibles</Link> 
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>Total: ${totalPrice()}</p>
            <button onClick={handleClick}>Generar orden de compra</button>
        </>
    )
}

export default Cart