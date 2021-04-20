import React from 'react'

import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {PRODUCTS_QUERY} from '../Graphql/productsQuery';
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const CardList = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(PRODUCTS_QUERY)
    if (loading) {
      return 'Loading ...'
    }
    if (error) {
      return 'Error !!'
    }
    console.log(data)
    return (

        <React.Fragment>
            <section className="#">
                <div className="font-sans">
                    <div className="relative mt-8 flex flex-col lg:justify-center items-center">
                        <div className="mt-5 relative lg:max-w-screen-2xl w-full">
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-lg">
                                <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-800">
                                    <i className="fas fa-shopping-cart"></i> Products
                                </h1>
                                <hr></hr>
                                <br></br>
                                <Grid container alignItems="stretch" spacing={2}>
                                        {data.products.map((product) => {
                                            return (<Grid item style={{ display: 'flex' }} xs={3}>
                                            <Card style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image="https://img.advice.co.th/images_nas/pic_product4/A0135183/A0135183OK_ORI_1.jpg"
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <a href='/product/detail'>
                                                            <Typography gutterBottom variant="h7" component="h3">
                                                            {product.name}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                            {product.detail}
                                                            </Typography>
                                                            <Typography variant="h6" color="textinfo" align="right" component="p">
                                                                $50.00
                                                            </Typography>
                                                        </a>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>)
                                        })}
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </React.Fragment>
    )
}

export default CardList