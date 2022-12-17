import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore"

function Store() {
    return (
        <>
        {/* p-1, p-1, etc is bootstrap for react PADDING property */}
            <h1 align="center" className="p-2">Welcome to the store!</h1>
            {/* xs={1} means only one column will show per row on mobile/ md={3} means that 3 columns will show per row on laptop*/}
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;