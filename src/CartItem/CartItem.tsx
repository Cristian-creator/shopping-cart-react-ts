import { Button } from "@material-ui/core";
import { CartItemType } from "../utils/types";
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, handleAddToCart, handleRemoveFromCart }) => (
    <Wrapper>
        <div className="">
            <h3> {item.title} </h3>
            <div className="information">
                <p> Price: ${item.price} </p>
                <p> Total: ${(item.amount * item.price).toFixed(2)} </p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => handleRemoveFromCart(item.id)}
                > - </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => handleAddToCart(item)}
                > + </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </Wrapper>
)

export default CartItem;
