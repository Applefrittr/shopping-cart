import "../Styles/Cart.css";

const Cart = (props) => {
  const itemsArray = props.items.map((item) => {
    return (
      <div key={item.name}>
        <h3>{item.name}</h3>
        <div className="basket-item-count">
          <button id={item.name} onClick={props.subtract}>
            -
          </button>
          <div>{item.count}</div>
          <button id={item.name} onClick={props.add}>
            +
          </button>
        </div>
      </div>
    );
  });

  return (
    <div id="basket">
      <h1> This is the Cart Page</h1>
      {itemsArray}
      <button onClick={props.display}>Back</button>
    </div>
  );
};

export default Cart;
