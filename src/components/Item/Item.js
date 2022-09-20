import "./styles.css"
import { Link } from "react-router-dom"

const Item = ({info}) => {

    return (
        <Link to={`/item/${info.id}` } className="producto">
            <img src={info.image} alt={info.title} />
            <p>{info.title}</p>
        </Link>
    )
}

export default Item