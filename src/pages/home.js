import Button from "../components/button";
import ProductList from "../components/productList";

function Home() {
    return (
      <div>
        <h1>Products</h1> 
        <li>product1</li><Button/>
        <ProductList/>
        
      </div>
    );
  }
  
  export default Home;