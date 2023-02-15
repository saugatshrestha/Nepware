import React from 'react';
import { Container } from 'react-bootstrap';
import uuid from 'react-uuid';
import Records from '../records.json';
import Styledcomponent from './Styledcomponent';

export default function Apicomponent() {
    return (
        <>
            <div className='api-component'>
                <Container>
                    <h3 className='section-title'>Fetching Data From JSON (Records)</h3>
                    <div className='records'>
                        {
                            Records && Records.map( record => {
                                return (
                                    <>
                                        <div className="record__card" key={uuid()}>
                                            {record.title}
                                            {
                                                record.tech && record.tech.map( data => {
                                                    return (
                                                        <>
                                                            <strong key={uuid()}>
                                                                {` - ${data.name}`}
                                                            </strong>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <Styledcomponent title="Styled Components"/>

                </Container>
            </div>
        </>
    )
}
