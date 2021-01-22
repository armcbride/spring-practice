import React from 'react'
import { useSpring } from 'react-spring'; 

export default function Fadecomponent() {
    return (
        <useSpring
        from={{ opacity: 0, marginTop: -500}}
        to={{opacity: 1, marginTop: 0}}>
            {props => (
            <div style={props}>
                <div style={c1Style}>
                    <h1>Component One</h1>
                        <p>
                            Dolor exercitation officia nostrud irure eiusmod pariatur.
                        </p>
                </div>
            </div>
            )}
        </useSpring>


       
    )
}


const c1Style = { 
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
};