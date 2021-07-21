import { Button, makeStyles } from "@material-ui/core";
import { CartItemType } from "../utils/types";
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
});

const CartItem: React.FC<Props> = ({ item, handleAddToCart, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Wrapper>
            <div className="">
                <h3 className="item-title"> {item.title} </h3>
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
    );
}
    // <Wrapper>
    //     <div className="">
    //         <h3 className="item-title"> {item.title} </h3>
    //         <div className="information">
    //             <p> Price: ${item.price} </p>
    //             <p> Total: ${(item.amount * item.price).toFixed(2)} </p>
    //         </div>
    //         <div className="buttons">
    //             <Button
    //                 size="small"
    //                 disableElevation
    //                 variant="contained"
    //                 onClick={() => handleRemoveFromCart(item.id)}
    //             > - </Button>
    //             <p>{item.amount}</p>
    //             <Button
    //                 size="small"
    //                 disableElevation
    //                 variant="contained"
    //                 onClick={() => handleAddToCart(item)}
    //             > + </Button>
    //         </div>
    //     </div>
    //     <img src={item.image} alt={item.title} />
    // </Wrapper>

export default CartItem;


