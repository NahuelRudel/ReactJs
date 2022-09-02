import "./styles.css"

const Item = ({info}) => {
    return (
        <a href="#" className="producto">
            <img src={info.imagen} alt={info.titulo} />
            <p>{info.titulo}</p>
        </a>
    )
}

export default Item