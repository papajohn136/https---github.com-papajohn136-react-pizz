import React from 'react'
import '../src/src/scss/app.scss';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

function App() {

  
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch("https://65e970fac9bf92ae3d392809.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((arr) => {
      setItems(arr);
    });
  }, [])

  return (
    <div className ="wrapper">
      <Header />
      <div className ="content">
        <div className ="container">
          <div className ="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className ="content__title">Все книги</h2>
          <div className ="content__items">

            {items.map( (obj) => (
              <PizzaBlock key = {obj.id} {...obj}
              />
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
