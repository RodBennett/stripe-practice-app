import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";

function NavbarComponent() {
    // here we use state to set the modal.  Modal is closed until Button is clicked which triggers {handleShow} function, then opens.
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                {/* closeButton is the 'x' on the modal header to close it */}
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default NavbarComponent;
