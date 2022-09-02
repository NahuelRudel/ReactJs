import "./styles.css"

const Item = ({info}) => {
    return (
        <a href="" className="producto">
            <img src={info.imagen} alt="Buzo 1" />
            <p>{info.titulo}</p>
        </a>
    )
}

export default Item