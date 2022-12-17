import { Card, Button, Form, Row, Col } from "react-bootstrap";

// no reason to import productsStore.js because the properties of productsArray are being passed from map logic in Store.js

function ProductCard(props) {
    const product = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;