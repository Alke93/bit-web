import { Badge, Button, Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useState } from "react";

export const AutoCard = ({ name, desc, img, price }) => {
    const carAdded = 'Added to cart';
    const [inCart, setInCart] = useState(false)

    const changeCart = () => {
        setInCart(true);
        console.log(inCart);
    }

    const setButtonOrText = () => {
        if (inCart) {
            return <h1>{carAdded}</h1>
        } else {
            return <Button onClick={changeCart} className="mt-auto font-weight-bold" variant="success" block>
                Buy Car
            </Button>
        }
    }

    return (
        <Card className="shadow-sm bg-white rounded">
            <Card.Img variant="top" src={img} alt={img} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {name}
                    </Card.Title>
                    <Badge pill className="mb-1" variant="warning">
                        {price} €
                    </Badge>
                </div>
                <Card.Text className="text-secondary">{desc}</Card.Text>
                {setButtonOrText()}
            </Card.Body>
        </Card>
    )
}

AutoCard.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

AutoCard.defaultProps = {
    img: 'No image',
    desc: 'Add description'
}
