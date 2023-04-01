import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../../rtk/Slice/cartSlice";
import './ProductShow.css'

function ProductShow() {

    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    function ShowProducts() {
        return (
            <>
                <div className="col-md-6 img">
                    <Card.Img variant="top" src={product.image} height="450px" />
                </div>
                <div className="col-md-6">
                    <Card.Body>
                        <h4 className="text-uppercase text-black-50">{product.category}</h4>
                        <h1 className="display-5">{product.title}</h1>
                        <Card.Text className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            <FaStar />
                        </Card.Text>
                        <h3 className="display-6 fw-bold my-4">{product.price}$</h3>
                        <h3 className="lead my-4">{product.description}</h3>
                        <Button variant="outline-dark px-4 py-2" onClick={()=>dispatch(addCart(product))}>
                            Add To Cart
                        </Button>
                        <NavLink to="/cart" className="btn btn-dark ms-2 py-2 px-3">
                            Go To Cart
                        </NavLink>

                    </Card.Body>
                </div>
            </>
        );
    }
    function Loading() {
        return (
            <>
                <div className="col-md-6 Skeletons">
                    <Skeleton height={450} width={400} />
                </div>
                <div className="col-md-6">
                    <div className="Skeleton1 SK">
                        <Skeleton />
                    </div>
                    <div className="Skeleton2 SK">
                        <Skeleton />
                    </div>
                    <div className="Skeleton3 SK">
                        <Skeleton />
                    </div>
                    <div className="Skeleton4 SK">
                        <Skeleton />
                    </div>
                    <div className="Skeleton5 SK">
                        <Skeleton />
                    </div>
                    <div className="Skeleton6 SK">
                        <Skeleton />
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <div className="container py-5">
                    <div className="row py-5 justify-content-center">
                        {loading ? Loading() : ShowProducts()}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductShow;