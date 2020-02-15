import React from 'react'
import Card from 'react-bootstrap/Card';

interface TutorCardProps {
    image: string;
    name: string;
}

const TutorProfileCard = (props: TutorCardProps) => {
    
    return (
        <Card bg="light" border="primary">
            {props.name}
        </Card>
    );

}

export default TutorProfileCard;