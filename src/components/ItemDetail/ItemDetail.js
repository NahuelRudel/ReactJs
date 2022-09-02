import "./styles.css"

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="detail">
        <div>
          <img className="detailImage" src={data.imagen} alt={data.titulo} />
        </div>
        <div>
          <h1 className="detailTitle">{data.titulo}</h1>
          <h2 className="detailPrice">$ {data.precio}</h2>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail