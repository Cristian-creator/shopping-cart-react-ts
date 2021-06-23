import CartItem from "../CartItem/CartItem";
import { CartItemType } from "../utils/types";
import { Wrapper } from "./Cart.styles";

type Props = {
    cartItems: CartItemType[]
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ac: number, item) => ac + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2> Your Shopping Cart </h2>
            { cartItems.length === 0 ? <p>No items in cart</p> : null }
            { cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            )) }
            <h2> Total: ${calculateTotal(cartItems).toFixed(2)} </h2>
        </Wrapper>
    )
}

export default Cart;