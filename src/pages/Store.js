import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from '../components/ProductCard';


function Store() {
    return (
        <>
        {/* p-1, p-1, etc is bootstrap for react PADDING property */}
            <h1 align="center" className="p-2">Welcome to the store!</h1>
            {/* xs={1} means only one column will show per row on mobile/ md={3} means that 3 columns will show per row on laptop*/}
            <Row xs={1} md={3} className="g-4">
                
                {/* here Store.js is retrieving data from productsStore.js */}
                {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>

                {/* here ProductCard is being pulled with the properties of product from productsStore.js */}
                   <ProductCard product={product}/>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;