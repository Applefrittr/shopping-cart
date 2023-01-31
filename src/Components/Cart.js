import "../Styles/Cart.css"

const Cart = (props) => {

    return (
        <div id="basket">
            <h1> This is the Cart Page</h1>
            <button onClick={props.display}>Back</button>
        </div>
    )
}

export default Cart