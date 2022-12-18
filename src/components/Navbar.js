import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext"
import CartProduct from "./CartProduct";


function NavbarComponent() {
    // here we use state to set the modal.  Modal is closed until Button is clicked which triggers {handleShow} function, then opens.
    const cart = useContext(CartContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const checkout = async () => {
        await fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        })
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Cart {productsCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                {/* closeButton is the 'x' on the modal header to close it */}
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            {/* <p>Items in your cart: </p>
                            {cart.items.map((currentProduct, idx) => (
                                <h1>Hello{currentProduct.title}</h1>
                            ))}
                            <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1> */}

                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx ) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h3>Total: ${cart.getTotalCost().toFixed(2)}</h3>
                        </>
                        :
                        <p>There are no items in your cart! </p>
                    }
                    <Button variant="success" onClick={checkout}>Make Purchase Now</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;
