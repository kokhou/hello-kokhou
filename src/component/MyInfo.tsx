import React, {createRef, useEffect, useMemo, useRef, useState} from 'react';
import {type} from "../TextAnimation";
import {Box, Link, Typography} from "@mui/material";
import {PageDetail} from "../App";

const MyInfo = (props: PageDetail) => {
    let infos = props.infos;

    let listOfTarget: any[] = [];

    for (let info of infos) {
        listOfTarget.push(useRef(null))
    }

    useEffect(() => {
        // console.log("----2-----")
        for (let i = 0; i < infos.length; i++) {
            let listOfTargetElement = listOfTarget[i];
            if (listOfTargetElement.current) {
                type(listOfTargetElement.current, infos[i].description).then(_ => {
                });
            }
        }
    }, [infos])


    return (
        <Box sx={{
            overflowY: 'hidden',
            color: 'white',
            height: '100%',
            maxHeight: '80vh',
            minHeight: '80vh',
            margin: '20px',
        }}>
            <Typography variant='h3'>{props.title}</Typography>
            <Box>
                {infos.map((info, index) => (
                    <div key={index} style={{marginTop: "50px"}}>
                        <Typography variant='h4'>{info.header}</Typography>
                        <Typography variant='h6' ref={listOfTarget[index]}/>
                    </div>
                ))}
            </Box>
        </Box>
    );
};
// <span>http://www.eilift.store</span>
export default MyInfo;