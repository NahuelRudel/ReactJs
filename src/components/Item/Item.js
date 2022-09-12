import "./styles.css"
import { Link } from "react-router-dom"

const Item = ({info}) => {
    return (
        <Link to={`/item/${info.id}` } className="producto">
            <img src={info.imagen} alt={info.titulo} />
            <p>{info.titulo}</p>
        </Link>
    )
}

export default Item