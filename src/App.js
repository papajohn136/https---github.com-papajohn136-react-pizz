import '../src/src/scss/app.scss';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import book from './img/book.png'
import book2 from './img/book2.png'
import book3 from './img/book3.png'
import book4 from './img/book4.png'

function App() {
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
            <PizzaBlock 
            title = "Властелин Колец Трилогия"
            price = {5000}
            src = {book}
            />
            <PizzaBlock 
            title = "Властелин Колец Трилогия"
            price = {6000}
            src = {book2}
            />
            <PizzaBlock 
            title = "Властелин Колец Трилогия"
            price = {5000}
            src = {book3}/>
            <PizzaBlock 
            title = "Бестиарий Ведьмак"
            price = {3500}
            src = {book4}
            />
            <PizzaBlock 
            title = "Бестиарий Ведьмак"
            price = {3500}
            src = {book4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
