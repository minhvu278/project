import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const productList = [
//     {
//         name: "Quan",
//         price: 100000,
//         status: true
//     },
//     {
//         name: "Ao",
//         price: 200000,
//         status: true
//     }
// ]
// const showProduct = (products) =>(
//      products.map(product =>(
//         <div>
//             <h1>Gio hang</h1>
//             <ul className="menu">
//                 <li>Ten san pham: {product.name}</li>
//                 <li>Gia san pham: {product.price}</li>
//                 <li>Trang thai: {product.status ? 'Con hang' : 'het hang'}</li>
//             </ul>
//         </div>
//     ))
// )
// const element = (
//     <div>
//         {showProduct(productList)}
//     </div>
// )

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
