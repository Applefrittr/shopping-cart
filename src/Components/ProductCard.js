import "../Styles/ProductCard.css";

const ProductCard = (props) => {
  const product = props.product
  const price = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  const usd = price.format(product.price)

  return (
    <div className="card-container">
      <img src={product.img1} alt={product.name} className="thumbnail top"></img>
      <img src={product.img2} alt={product.name} className="thumbnail bottom"></img>
      <h1 className="product-name"><i>{product.name}</i></h1>
      <h3 className="product-price">{usd}</h3>
    </div>
  );
};

export default ProductCard;
