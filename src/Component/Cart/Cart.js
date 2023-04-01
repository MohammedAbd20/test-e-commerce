import { useEffect, useState } from "react";
import { Button, Card, Container, Image, Row, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCart,clearAll, deleteCart } from "../../rtk/Slice/cartSlice";
import './Cart.css'

function Cart() {
    
    const productCart = useSelector(state => state.cart)
    console.log(productCart)
    const dispatch = useDispatch();
    const [quentity, setQuentity] = useState(1);
    const totalPrice = productCart.reduce((count, product) => {
        if (quentity <= 0) {
            setQuentity(1);
        }
        count += product.price * quentity;
        return count
    }, 0)

    return (
        <>
            <Container className="py-5">
                <Row className="py-5 px-3">
                    <Card.Text className="textLeft">
                        The Toltal is : {totalPrice}$
                    </Card.Text>
                    <Button className="mb-3 buttonDelete" onClick={() => { dispatch(clearAll()) }}>Delete All</Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productCart.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title.substring(0, 12)}</td>
                                    <td><Image src={product.image} alt={product.title} /></td>
                                    <td>{product.price} $</td>
                                    <td>
                                        Quantity : <input type="number" onChange={(e) => setQuentity(e.target.value)} />
                                        <p>{quentity}</p>
                                    </td>
                                    <td><Button variant="outline-dark" onClick={() => dispatch( deleteCart(product))}><FaTrash /> <span>Delete</span></Button></td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default Cart;