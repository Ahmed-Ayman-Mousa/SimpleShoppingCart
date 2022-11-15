import React, { Component } from 'react';

class Cart extends Component {
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
  
  minCartItem = (id) => {
    let cart = [...this.props.cart];
    let index = cart.indexOf(cart.filter(p => p.id === id)[0])
    cart[index].count = cart[index].count - 1
    this.props.setCartState([...cart]);
  }

  getCartPrice = () => {
    let price = 0;
    this.props.cart.map(p => {
      let productPrice = this.props.menu.filter(pr => pr.id === p.id)[0].price;
      price += productPrice * p.count;
    });
    return price;
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
              <th>Count</th>
              <th>Add</th>
              <th>Min</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((p, i) => {
              if (p.count > 0) 
                return  <tr key={p.id} className="border-b-2">
                          <th>{p.id}</th>
                          <td>{this.props.menu[i].name}</td>
                          <td>{this.props.menu[i].price}</td>
                          <td>{p.count}</td>
                          <td><button className="fa-solid fa-plus" onClick={() => this.addCartItem(p.id)}></button></td>
                          <td><button className="fa-solid fa-minus" onClick={() => this.minCartItem(p.id)}></button></td>
                        </tr>
            }
            )}
          </tbody>
          <tfoot>
            <tr>
              <th>-</th>
              <th>-</th>
              <th>{this.getCartPrice()}</th>
              <th>-</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Cart;