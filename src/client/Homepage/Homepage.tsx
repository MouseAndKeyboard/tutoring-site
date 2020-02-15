import React, { useState, useEffect, Fragment } from 'react'
import Navigation from '../Navbar';
import { Container, Jumbotron, Carousel, CarouselItem } from 'react-bootstrap';

import Typist from 'react-typist';

import TutorProfileCard from '../TutorProfileCard';

const Homepage = () => {

    let onHeaderTyped = () => {

    }

    return (
        <Fragment>
            <Navigation />

            <Jumbotron>
                <Container>
                    <div className="d-flex">
                        <span className="title px-2">We are: </span>
                        <Typist 
                            className="title"
                            >
                            students
                        </Typist>
                    </div>
                    
                </Container>
            </Jumbotron>
        </Fragment>
        
    );
}

export default Homepage;