import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Arrivals from "./components/arrivals"
import Selling from "./components/selling"
import Browse from "./components/browse"
import Customers from "./components/customers"
export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Arrivals/>
      <Selling/>
      <Browse/>
      <Customers/>
    </div>
  )
}
