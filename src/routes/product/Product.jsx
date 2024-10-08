import { useParams, Link } from 'react-router-dom';
import instance from '../../api/Axios';
import './Product.css';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Start loading
    instance(`/products/${id}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .finally(() => {
        setLoading(false); // Stop loading after data is fetched
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <div>
        {loading ? (
          <div className="loader__wrapper">
            <div className="loader"></div>
          </div>
        ) : product ? (
          <div className="product-page">
            <div className="product-page__container">
              <div className="product-page__image-container">
                <img className="product-page__image" src={product.image} alt={product.title} />
              </div>
              <div className="product-page__info">
                <h1 className="product-page__title">{product.title}</h1>
                <p className="product-page__price">${product.price}</p>
                <div className="product-page__rating">
                  <span className="product-page__rating-value">{product.rating.rate}</span>
                  <span className="product-page__rating-text"> / 5 ({product.rating.count} reviews)</span>
                </div>
                <p className="product-page__category">Category: {product.category}</p>
                <p className="product-page__description">{product.description}</p>
                <Link to="/" className="product-page__back-button">Back to Products</Link>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default Product;