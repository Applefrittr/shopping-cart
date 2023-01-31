import ProductCard from "./ProductCard"
import "../Styles/Catalog.css"
import {Link} from 'react-router-dom'

const Catalog = (props) => {

    const cardArray = props.catalog.map(product => {
       return <Link to={`/catalog/${product.name}`} key={product.name}><ProductCard name={product.name} price={product.price}/></Link>
    })
    
    return (
        <div id="shop-container">
            <h1> This is the Catalog Page</h1>
            <div id="products">{cardArray}</div>
        </div>
    )
}

export default Catalog