import CartItem from "../CartItem/CartItem";
import { CartItemType, WrapperPropsType } from "../utils/types";
import { Wrapper } from "./Cart.styles";
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from "@material-ui/core";

type Props = {
    cartItems: CartItemType[]
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const useStyles = makeStyles({
    title: {
        fontSize: "1.2rem"
    },
    total: {
        fontSize: "1.1rem"
    }
})

const Cart: React.FC<Props> = ({ cartItems, handleAddToCart, handleRemoveFromCart }) => {
    const classes = useStyles();
    const calculateTotal = (items: CartItemType[]) => 
        items.reduce((ac: number, item) => ac + item.amount * item.price, 0);

    // const matchesMedium = useMediaQuery(

    const matchesMedium = useMediaQuery(
        json2mq({
            minWidth: 425,
            maxWidth: 768,
        }),
    );

    const matchesSmall = useMediaQuery(
        json2mq({
            maxWidth: 425,
        }),
    );

    let wrapperSize: WrapperPropsType = "big" as any;
    if(matchesMedium) wrapperSize = "medium" as any;
    else if(matchesSmall) wrapperSize = "small" as any;

    return (
        <Wrapper size={wrapperSize as any} >
            <h2 className={classes.title} > Your Shopping Cart </h2>
            { cartItems.length === 0 && <p>No items in cart</p> }
            
            { cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            )) }
            <h2 className={classes.total} > Total: ${calculateTotal(cartItems).toFixed(2)} </h2>
        </Wrapper>
    )
}

export default Cart;