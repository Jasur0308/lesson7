import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div className='card'>
      <div className='card__image-container'>
        <Link to={`/product/${product.id}`}>
          <img className='card__image' src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className='details'>
        <h4 className='card__title'>{product.title.slice(0, 20)}</h4>
        <p className='card__price'>${product.price}</p>
        <div className='card__meta'>
          <p className='card__category'>Category: {product.category}</p>
          <p className='card__rate'>Rating: {product.rating.rate} / 5</p>
          <p className='card__count'>Review Count: {product.rating.count}</p>
          <p className='card__id'>Product ID: {product.id}</p>
        </div>
      </div>
    </div>


  )
}

export default Card