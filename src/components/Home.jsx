import { useState } from "react"
import Navbar from "./Navbar"
import Products from "./Products"

const Home = ()=>{

  const [cart, setCart] = useState(0)

  const handleClick = ()=>{
    setCart(cart+1)
    localStorage.setItem("cart", cart)

  } 


  const [searchQuery, setSearchQuery] = useState("")


  return(
    <>
      <Navbar cart={cart} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Products handleClick={handleClick} searchQuery={searchQuery}/>
    </>
  )
}

export default Home



// <>
    //   <Navbar cart={cart}/>
    //   <Products handleClick={handleClick} />
    // </>