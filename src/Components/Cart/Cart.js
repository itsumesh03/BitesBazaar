import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../Store/cart-context';
import CartItems from './CartItems';

const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoverHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (

            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item)=>(
                    <CartItems key={item.id} 
                    name={item.name} 
                    price={item.price} 
                    amount={item.amount} 
                    onRemove={cartItemRemoverHandler.bind(null, item.id)} 
                    onAdd={cartItemAddHandler.bind(null, item)} />
                ))}
            </ul>
            )

        return <Modal onClose={props.onClose}> 
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className={classes.button} >
                    Order
                </button>}
            </div>
        </Modal>
}

export default Cart;