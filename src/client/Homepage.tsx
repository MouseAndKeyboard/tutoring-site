import Navigation from './Navbar';
import { Container, Button, Card, CardHeader, CardBody } from 'reactstrap';
import React, { useState, useEffect, Fragment } from "react";
import GaugeChart from 'react-gauge-chart';
import Typist from 'react-typist';

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
            <div className="herobg"></div>
            <Container >

                <span className="title">
                    We are:
                    {count ? (
                        <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)} className="d-inline">
                            <span> high acheivers</span>
                            <Typist.Backspace count={14} delay={2500} />
                            <span> students</span>
                            <Typist.Backspace count={8} delay={2500} />
                            <span> affordable</span>
                            <Typist.Backspace count={10} delay={2500} />
                            <span> passionate</span>
                            <Typist.Backspace count={10} delay={2500} />
                            <span> tutors</span>
                            <Typist.Backspace count={6} delay={2500} />
                        </Typist>
                    ) : (
                            ""
                        )}
                    <br />
                    <Button color="success" size="lg" className="m-3 p-3 px-5">Book a Tutor Now</Button>
                </span>
                
                <ul id="notes" className="list-inline d-flex justify-content-around">
                    <li className="list-inline-item">
                        <p>99+
                        ATAR
                        </p>
                        
                        <span className="muted">Our tutors have scored in the top 1% of the state.</span>
                    </li>
                    <li className="list-inline-item">
                        <p>Well Rounded</p>
                        <span className="muted">Our tutors strive to foster a love for learning, not just high marks.</span>
                        <p></p>
                    </li>
                    <li className="list-inline-item">
                        <p>Supporting</p>
                        <span className="muted">Our tutors can unlock your potential by providing a positive a strong support.</span>
                    </li>
                </ul>



            </Container>

        </Fragment>

    );
}

export default Homepage;
