import Navigation from './Navbar';
import { Container, Jumbotron, Carousel, CarouselItem } from 'react-bootstrap';
import React, { useState, useEffect, Fragment } from "react";

import Typist from 'react-typist';

import TutorProfileCard from './TutorProfileCard';

const Homepage = () => {
    const whoweare = [
        "high acheivers",
        "students",
        "teachers",
        "tutors",
        "trainers"
    ];

    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(1);
    }, [count]);

    return (
        <Fragment>
            <Navigation />

            <Jumbotron>
                <Container>
                    <span className="title">
                        We are:
                    {count ? (
                            <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)} className="d-inline">
                                <span> high acheivers</span>
                                <Typist.Backspace count={14} delay={2500} />
                                <span> students</span>
                                <Typist.Backspace count={8} delay={2500} />
                                <span> teachers</span>
                                <Typist.Backspace count={8} delay={2500} />
                                <span> tutors</span>
                                <Typist.Backspace count={6} delay={2500} />
                                <span> trainers</span>
                                <Typist.Backspace count={8} delay={2500} />
                            </Typist>
                        ) : (
                                ""
                            )}
                    </span>


                </Container>
            </Jumbotron>
        </Fragment>

    );
}

export default Homepage;
