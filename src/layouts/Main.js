import Header from './Header.js';
import Footer from './Footer.js';
function Main(props) {
  return (
    <div className="container mx-auto px-4">
      <Header />
      {props.include}
      <Footer />
    </div>
  );
}

export default Main;
