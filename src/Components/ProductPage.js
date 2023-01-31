import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

const ProductPage = (props) => {
    const {name} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.catalog.find(product => product.name === name))
    }, [props.catalog, name])
    
    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <Link to={"/catalog"}><button>Back</button></Link>
            <button onClick={props.add} id={product.name}>Add</button>
        </div>
    )
}

export default ProductPage