import "../Styles/ProductCard.css"

const ProductCard = (props) => {

    return (
        <div className="card-container">
            <div>Image Here</div>
            <h1 className="product-name">{props.name}</h1>
            <h3 className="product-price">{props.price}</h3>
        </div>
    )
}

export default ProductCard