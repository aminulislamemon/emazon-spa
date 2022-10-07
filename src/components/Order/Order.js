import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Shop/Shop.css'

const Order = () => {
    const {products, prevCart} = useLoaderData();
    const [cart, setCart] = useState(prevCart)

    const removeItemHandler = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart (remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
            {
                cart.map(product => <ReviewItem 
                    key={product.id} 
                    product={product} 
                    removeItemHandler={removeItemHandler}
                    />)
            }
            </div>
            <div className='order-cart'>
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Order;