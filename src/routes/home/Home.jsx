import './Home.css'
import instance from '../../api/Axios'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    instance('/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <>
      <Navbar/>
      <div className='home'>
        <div className="container">
          <div className="home__wrapper">
            <h3 className='home__title'>Our products</h3>
            <div className="home__cards">
              {loading ? (
                <div className="loader__wrappper">
                  <div className="loader"></div>
                </div>
              ) : (
                products.map(product => (
                  <Card key={product.id} product={product}/>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;