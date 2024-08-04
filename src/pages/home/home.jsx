import Layout from '../../components/layout/layout';
import HeroSection from '../../components/heroSection/herosection';
import Filter from '../../components/filter/filter';
import ProductCard from '../../components/productcard/productcard';
import Track from '../../components/track/track';
import Tesimonial from '../../components/testimonials/testimonlials';
import { Link } from 'react-router-dom';

function Home(){  
    return(
    <div>
      <Layout>
        <HeroSection /> 
        <Filter />
        <ProductCard />
        <div className="flex justify-center -mt-10 mb-4">
          <Link to={'/allproducts'}>
            <button className='bg-gray-300 py-2 rounded-xl'>See more</button>
          </Link>
        </div>
        <Track />
        <Tesimonial />
      </Layout>
    </div>
  )
}

export default Home;