import React, {memo, useState, useEffect} from 'react';
import { Container } from '@material-ui/core';
import * as Api from "../transport/api"

function Home(props) {

    const [countryData, setCountryData] = useState(null);

    useEffect(()=>{
        Api.getCasesByCountry("India", (resp)=>{
            setCountryData(resp)
        })
    },[])

    return (
        <Container>
            <section className="top-counter-area">
                Cases: {countryData && countryData.cases}
                {
                    countryData && Object.keys(countryData).map( _key => {
                        return <div key={_key}><span>{_key}: {countryData[_key]}</span><br/></div>
                    })
                }
            </section>
            <section className="controller-area">
                
            </section>
            <section className="description-area">
                
            </section>
        </Container>
    )
}

export default memo(Home);