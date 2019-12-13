import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


const StudentCard = ({firstName, lastName, age, image}) => (




    <Card>
        <Image src={image} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>
                {firstName}
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                    {lastName}
                </span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='rub'/>
                {age}

            </a>
        </Card.Content>
    </Card>
);


export default StudentCard;