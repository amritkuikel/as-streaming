import NavBar from './1-navbar/Navbar'
import Hero from './2-hero/Hero'
import Trending from './3-trending/Trending'
import Trailers from './4-trailers/Trailers'
import Popular from './5-popular/Popular'
import Footer from './footer/Footer'

export default function Homepage() {
  return (
    <div>
        <NavBar />
        <Hero />
        <Trending />
        <Trailers />
        <Popular />
        <Footer />
    </div>
  )
}

