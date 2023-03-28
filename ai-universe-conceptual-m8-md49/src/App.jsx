import Button from './assets/components/Button/Button';
import Cart from './assets/components/Cart/Cart';
import Header from './assets/components/Header/Header';

const App = () => {
  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Cart></Cart>

      <Button>See More</Button>
    </>
  );
};

export default App;