import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid, Skeleton} from "@mui/material";
import MyInfo from "./MyInfo";
import {PageDetail} from "../App";
import {useEffect, useState} from "react";

export default function PortfolioCard(props: PageDetail) {
    const [imageIsLoading, setImageIsLoading] = useState(true);
    // const [image, setImage] = useState({});
    const handleImageLoaded = () => {
        setImageIsLoading(false);
    };

    useEffect(() => {
        setImageIsLoading(true);

        const image = new Image();
        image.onload = handleImageLoaded;
        image.src = props.image;
        // setImage(image);
    }, [props.image]);

    return (
        <Card sx={{width: '100%'}}>
            <Grid container columns={2}>
                <Grid item xs={1} sx={{
                    background: `linear-gradient(to top, #414345, #232526)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }}>
                    <MyInfo {...props}/>
                </Grid>
                <Grid item xs={1} sx={{width: '100%', background: `linear-gradient(to top, #414345, #232526)`}}>
                    {imageIsLoading &&
                    <Skeleton animation="wave" sx={{bgcolor: 'grey.900', height: '100%', width: '100%'}}/>}
                    {!imageIsLoading && (
                        <CardMedia
                            style={{
                                height: '100%',
                                backgroundBlendMode: 'darken'
                            }}
                            image={props.image}
                            title="choi kok hou"
                        />
                    )}

                </Grid>
            </Grid>
        </Card>
    );
}