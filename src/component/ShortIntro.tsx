import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from "@mui/material";
import MyInfo from "./MyInfo";
import {PageDetail} from "../App";

export default function MediaControlCard(props: PageDetail) {

    return (
        <Card sx={{width: '100%'}}>
            <Grid container columns={2}>
                <Grid item xs={1} style={{
                    background: `linear-gradient(to top, #414345, #232526)` /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                }}>
                    <MyInfo {...props}/>
                </Grid>
                <Grid item xs={1} sx={{width: '100%'}}>
                    <CardMedia
                        style={{
                            height: '100%',
                            backgroundBlendMode: 'darken'
                        }}
                        image={props.image}
                        title="choi kok hou"
                    />
                </Grid>
            </Grid>
        </Card>
    );
}