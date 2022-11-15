import React, { Component } from 'react';

class Home extends Component {
  state = {  } 

  addCartItem = (id) => {
    let cart = [...this.props.cart];
    if (cart.filter(p => p.id === id).length > 0) {
      let index = cart.indexOf(cart.filter(p => p.id === id)[0])
      cart[index].count = cart[index].count + 1
      this.props.setCartState([...cart]);
    } else {
      this.props.setCartState([...cart, {id, count: 1}]);
    }
  }

  render() { 
    return (
      <div className='w-full p-5 flex justify-center'>
        <table className='w-2/3 text-center'>
          <thead>
            <tr className='border-b-2'>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.menu.map(p => 
              <tr key={p.id} className="border-b-2">
                <th>{p.id}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td><button className="fa-solid fa-cart-plus" onClick={() => this.addCartItem(p.id)}></button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;