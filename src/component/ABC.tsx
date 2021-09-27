import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
        </React.Fragment>
    );
}

// display="flex"
// justifyContent="center"
// alignItems="center"
// minHeight="100vh"
export default function NestedGrid() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            minWidth: '100vh'
        }}>
            <Grid container>
                <Grid item xs="auto">
                    <Box>asdasdasdasdasdasdasd</Box>
                </Grid>
                <Grid container item xs={11}>
                    <FormRow/>
                </Grid>
                <Grid item xs="auto">
                    <Box>asd</Box>
                </Grid>
            </Grid>
        </Box>
    );
}
