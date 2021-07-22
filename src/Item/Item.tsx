import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

import { descriptionSnippet } from "../utils/descriptionSnippet";
import { theme } from "../utils/theme";
// Types
import { CartItemType } from "../utils/types";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 375,
        [theme.breakpoints.down('sm')]: {
            height: 325
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 350
        }
    },
    media: {
        height: 140,
        [theme.breakpoints.down('sm')]: {
            height: 110
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: 125
        }
    },
    itemTitle: {
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        }
    },
    itemDescription: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
        }
    },
    itemPrice: {
        paddingTop: "10px",
        textAlign: "center",
        color: "green",
        fontSize: "1.1rem"
    },
    cartButton: {
        width: "100%",
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
    },
    cardActions: {
        padding: 0
    },
    cardContent: {
        [theme.breakpoints.down('sm')]: {
            paddingBottom: "0px"
        }
    }
})

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    const classes = useStyles();

  return (
    <Card className={classes.root} >
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between"  >
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={item.image}
                title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent} >
                    <Typography className={classes.itemTitle} gutterBottom variant="h5" component="h2">
                        {descriptionSnippet(item.title)}
                    </Typography>
                    <Typography className={classes.itemDescription} variant="body2" color="textSecondary" component="p">
                        {descriptionSnippet(item.description)}
                    </Typography>
                    <Typography className={classes.itemPrice} variant="body2" color="textSecondary" component="h2">
                        ${item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions} >
                <Button className={classes.cartButton} onClick={() => handleAddToCart(item)} size="small" color="primary">
                Add to cart
                </Button>
            </CardActions>
        </Box>
    </Card>
  );
};

export default Item;