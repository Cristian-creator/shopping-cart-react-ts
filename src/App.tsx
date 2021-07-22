import { useState } from "react"
import { useQuery } from "react-query"

import { LinearProgress,
  Grid,
  Drawer,
  Badge, 
  AppBar,
  Typography,
  Box,
  Button
} from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons";
import { Wrapper } from "./App.styles";
import { CartItemType } from "./utils/types";
import { getProducts } from "./utils/api";
import Item from "./Item/Item";
import Cart from "./Cart/Cart";
import { makeStyles } from '@material-ui/core/styles';
import { theme } from "./utils/theme";


const useStyles = makeStyles({
  root: {
    margin: 0
  },
  button: {
    color: "white"
  },
  drawer: {
    width: "460px",
    [theme.breakpoints.down('sm')]: {
        width: "300px"
    }
  }
})

const App = () => {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery(
    'products',
    getProducts,
    { 
      notifyOnChangeProps: ['data'],
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  );

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ac: number, item) => ac + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // is the item already added in the cart
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      
      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id 
            ? { ...item, amount: item.amount + 1 } 
            : item
        ))
      };

      // first time the item is added
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
    <>
      <AppBar position="sticky">
      <Box padding={2} display="flex" justifyContent="space-between" alignItems="center" >
          <Typography variant="h6" className={""}>
            react-typescript-cart
          </Typography>
          <Button className={classes.button} onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
                <AddShoppingCart />
            </Badge>
          </Button>
        </Box>
      </AppBar>
      <Wrapper>
        <Drawer className={classes.drawer} anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
            cartItems={cartItems} 
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            />
        </Drawer>
        <Grid container spacing={4} justify="center" >
          { data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={2} >
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  )
}

export default App
