import logo from './logo.svg';
import './App.css';

import Products from './compnents/Products';
function App() {
  const list =[
    {
      id : 'p1',
      name : 'niram',
      amount: '200' ,
      date : new Date(2021 , 5, 5)
    } ,
    {
      id : 'p2',
      name : 'asd',
      amount: '2200' ,
      date : new Date(2022 , 51, 25)
    } ,
    {
      id : 'p3',
      name : 'nim',
      amount: '100' ,
      date : new Date(221 , 0, 1)
    } ,
    {
      id : 'p4',
      name : 'sdf',
      amount: '2080' ,
      date : new Date(1334 , 53, 7)
    } ,
  ]
  return (
      <div>
          <Products items={list}></Products>
      </div>
  );
}

export default App;
