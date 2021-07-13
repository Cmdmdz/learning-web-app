import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: "400px",
        width: "400px"
    },
    cardContent: {
        flexGrow: 1,
    },

}));


export default function FeaturedPost(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <CssBaseline />
                {/* End hero unit */}
                <Grid container spacing={4}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120059.jpg"
                                title="Image title"
                            />
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120060.jpg"
                                title="Image title"

                            />
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120061.jpg"
                                title="Image title"

                            />
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120062.jpg"
                                title="Image title"

                            />
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120063.jpg"
                                title="Image title"

                            />
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://exl-research.s3.ap-northeast-2.amazonaws.com/myImage/120064.jpg"
                                title="Image title"

                            />
                        </Card>

                    </Grid>


                </Grid>
            </div>

        </React.Fragment>
    );
}
