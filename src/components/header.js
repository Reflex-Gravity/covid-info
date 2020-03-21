import React, { memo } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Icon } from '@material-ui/core';

function Header(props){

    return (
        <AppBar elevation={0} position="static" className="shadow-md">
            <Toolbar variant="dense" className="justify-between">
                <Typography>{props.title}</Typography>
                <Typography>STAY SAFE, STAY HOME!</Typography>
                <div className="flex">
                    <Icon>call</Icon>
                    <Typography>Call 104</Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default memo(Header)