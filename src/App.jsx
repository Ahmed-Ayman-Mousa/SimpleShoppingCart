import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './index.css'
import Cart from './pages/Cart';
import Home from './pages/Home';

class App extends Component {
  state = { 
    menu: [
      { id: 1, name: "Burger", price: 50, },
      { id: 2, name: "Cola",   price: 10, },
      { id: 3, name: "pepsi",  price: 7,  },
      { id: 4, name: "Fries",  price: 30, },
    ],
    cart: []
  }

  // setMenuState = (newState) =>{
  //   this.setState({ menu: newState });
  // }
  setCartState = (newState) =>{
    this.setState({ cart: newState });
  }

  getCartCount = () => {
    let count = 0;
    this.state.cart.map(i => count += i.count)
    return count;
  }

  render() { 
    return (
      <>
        <header className='flex items-center justify-between bg-slate-600 p-3'>
          <div className='flex items-center h-full'>
            <h1 className='text-2xl mr-5'>MEDO</h1>
            <div>
              <Link to="/" className='mr-2 bg-sky-800 py-2 px-4 transition-colors rounded-lg hover:bg-sky-900'>Home</Link>
              <Link to="/cart" className=' bg-sky-800 py-2 px-4 transition-colors rounded-lg hover:bg-sky-900'>Cart</Link>
            </div>
          </div>
          <div className='bg-sky-500 py-1 px-3 rounded-full'>
            {this.getCartCount()}
          </div>
        </header>
        <Routes>
          <Route path='/' element={ <Home menu={this.state.menu} setCartState={this.setCartState}  cart={this.state.cart} /> }></Route>
          <Route path='/cart' element={ <Cart menu={this.state.menu} setCartState={this.setCartState}  cart={this.state.cart} /> }></Route>
        </Routes>
      </>
    );
  }
}

export default App;