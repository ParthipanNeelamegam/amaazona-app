import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen.js';
import ProductScreen from './Screens/ProductScreen.js';
import CartScreen from './Screens/CartScreen.js';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './Screens/SigninScreen.js';
import { signout } from './actions/userActions.js';
import RegisterScreen from './Screens/RegisterScreen.js';
import ShippingAddressScreen from './Screens/ShippingAddressScreen.js';
import PaymentMethodScreen from './Screens/PaymentMethodScreen.js';
import PlaceOrderScreen from './Screens/PlaceOrderScreen.js';
import ProfileScreen from './Screens/ProfileScreen';
import OrderScreen from './Screens/OrderScreens.js';
import PrivateRoute from './Components/PrivateRoute';

function App() 
{
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    }
  return (
      <BrowserRouter>
            <div className="grid-container">
            <header className="row">
                <div>
                    <Link to="/" className="brand">ama-zan</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                        <span className='badge'>{cartItems.length}</span>
                    )}
                    </Link> 
                    {userInfo ? (
                        <div className='dropdown'>
                        <Link to="#">
                            {userInfo.name}  <i className='fa fa-caret-down'></i>{'  '}
                        </Link>
                        <ul className='dropdown-content'>
                        <li>
                            <Link to="/profile">User Profile</Link>
                        </li>
                            <Link to="#signout" onClick={signoutHandler} >
                                Sign Out
                            </Link>
                        </ul>
                        </div>
                        ) :
                        (
                            <Link to="/signin">Sign In</Link>
                        )
                    }
                    {userInfo && userInfo.isAdmin && (
                    <div className="dropdown">
                        <Link to="#admin">
                        Admin <i className="fa fa-caret-down"></i>
                        </Link>
                        <ul className="dropdown-content">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/productlist">Products</Link>
                        </li>
                        <li>
                            <Link to="/orderlist">Orders</Link>
                        </li>
                        <li>
                            <Link to="/userlist">Users</Link>
                        </li>
                        </ul>
                    </div>
                    )}
                    
                </div>
            </header>
            <main>
                <Route path="/cart/:id?" component={CartScreen}></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/signin" component={SigninScreen}></Route>
                <Route path="/register" component={RegisterScreen}></Route>
                <Route path="/shipping" component={ShippingAddressScreen}></Route>
                <Route path="/payment" component={PaymentMethodScreen}></Route>
                <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                <Route path="/order/:id" component={OrderScreen}></Route>
                <PrivateRoute
                    path="/profile"
                    component={ProfileScreen}
                ></PrivateRoute>
                <Route path="/" component={HomeScreen} exact></Route>
                
            </main>
            <footer className="row center">
                    All right reserved..
            </footer>
        </div>
    </BrowserRouter>
        );
}

export default App;
