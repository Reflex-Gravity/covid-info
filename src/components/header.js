import React, { memo } from 'react';

function Header(props){

    return <header className="flex justify-between">
        <span>{props.title}</span>
        <span>STAY SAFE, STAY HOME!</span>
    </header>
}

export default memo(Header)