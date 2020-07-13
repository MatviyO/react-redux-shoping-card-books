import React from "react";
import {Card, Image, Icon, Button} from "semantic-ui-react";

const BookCart = ({title, author, price, image, onAdd}) => (
    <Card>
        <Image src={image}  />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='usd' />
                {price}
            </a>
        </Card.Content>
        <Button onClick={onAdd}>Buy </Button>
    </Card>
)
export default BookCart
