import React from 'react';
import Container from '@material-ui/core/Container';
import {useSpring, animated} from 'react-spring';

function Card() {
    const props = useSpring({ to: async (next, cancel) => {
        await next({opacity: 1, color: '#ffaaee'})
        await next({opacity: 0, color: 'rgb(14,26,19)'})
      },
      from: {opacity: 0, color: 'red'}
    });

    const test = useSpring({to: async (next) => {
        await next({opacity: 1, color: '#172751'})
        await next({opacity: 0, color: '#511727)'})
      },
      from: {opacity: 0, color: '#172751'}

    })

    return (
        <Container>
        <animated.div style={props}>I will fade in and out</animated.div>
        <animated.body style={test}>Testing Test</animated.body>
        </Container>


        
    )

    
       
    
};

export default Card; 