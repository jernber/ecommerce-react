import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://footwearnews.com/wp-content/uploads/2020/09/IMG_2057.png?w=700&h=437&crop=1'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000'},
]
export const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products