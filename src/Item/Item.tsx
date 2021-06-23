import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../utils/types";
// Styles
import { Wrapper } from "./Item.style";
import { StyledHero } from "./StyledHero";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
       {/* <img src={item.image} alt={item.title} />  */}
       <StyledHero myImage={item.image} />
       <div className="">
           <h3> {item.title} </h3>
           <p> {item.description} </p>
           <h3> ${item.price} </h3>
       </div>
       <Button onClick={() => handleAddToCart(item)}> Add to cart </Button>
    </Wrapper>
);

export default Item;