import React,{useState,useEffect} from "react"
import Cart from "./components/Cart/index"
import axios from "axios";
import Products from "./components/Products/index"
import NavBar from "./components/NavBar/index"
import { Routes, Route} from "react-router-dom"

function App() {

  const [productItem, setProductItem] = useState();

  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () =>{
    const result = await axios.get("https://dummyjson.com/products?limit=100");
    //console.log(result.data.products) 
    setProductItem(result.data.products)
    console.log(productItem)
  }

  useEffect(() => {
    fetchProducts();
  },[]);


  const handleAddproduct = (product) =>{
    if(product.stock<50){
      alert("hurry up! only few are left")
    }
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {
        ...ProductExist, quantity: ProductExist.quantity+1} : item
      ))
      }
      else{
        setCartItems([...cartItems,{product, quantity:1}])
      }
}

  
  return (
    <>
        <NavBar/>
         <Routes>
           <Route path="/products" element={<Products productItem = {productItem} handleAddproduct={handleAddproduct} />}/>
           <Route path="/cart" element={<Cart cartItems={cartItems} handleAddproduct={handleAddproduct}/>}/>
         </Routes>


    </>
  );
}

export default App;
