import { useState } from "react"
import { useQuery } from "react-query"

import { LinearProgress,
  Grid,
  Drawer,
  Badge 
} from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper } from "./App.styles";
import { CartItemType } from "./utils/types";
import { getProducts } from "./utils/api";
import Item from "./Item/Item";
import { StyledButton } from "./App.styles";
import Cart from "./Cart/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
     getProducts
  );

  console.log(data);

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ac: number, item) => ac + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // Is the item already added in the cart
      const isItemInCart = prev.find((item) => item.id == clickedItem.id);
      
      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id 
            ? { ...item, amount: item.amount + 1 } 
            : item
        ))
      };

      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => 
      prev.reduce((ac, item) => {
          if (item.id === id) {
            if (item.amount === 1)
              return ac;
            return [...ac, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ac, item];
          }
        }, [] as CartItemType[])
    );
  };

  if(isLoading) return <LinearProgress />
  if(error) return <div className="">Something were wrong</div>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={5}>
        { data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
