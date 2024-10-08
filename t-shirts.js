const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
];

function App() {
  const [tshirtData, setTshirtData] = React.useState(tshirts);

  function handleBuy(index, quantity) {
    const newTshirts = [...tshirtData];
    newTshirts[index].stock -= quantity;
    setTshirtData(newTshirts);
  }

  function handleQuantityChange(event, index) {
    const newTshirts = [...tshirtData];
    newTshirts[index].quantity = parseInt(event.target.value);
    setTshirtData(newTshirts);
  }

  return (
    <div>
      <h1>T-Shirt Store</h1>
      <div className="tshirt-list">
        {tshirtData.map((tshirt, index) => (
          <div key={index} className="tshirt">

            <img src={tshirt.image} alt={tshirt.title} />
            <h2>{tshirt.title}</h2>
            <p>Price: ${tshirt.price.toFixed(2)}</p>
            <p >
              Stock: {tshirt.stock > 0 ? tshirt.stock : 'Out of Stock'}
            </p>

            {tshirt.stock > 0 && (
              <React.Fragment>
                <select
                  value={tshirt.quantity}
                  onChange={(event) => handleQuantityChange(event, index)}
                >
                  {[...Array(tshirt.stock).keys()].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(index, tshirt.quantity)}>
                  Buy
                </button>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
