import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Product.css"
function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
            }
            return (componentMounted = false);
        };
        getProduct();
    }, []);

    const filterProduct = (cat) => {
        const updatProudct = data.filter((e) => e.category === cat)
        setFilter(updatProudct)
    }
    document.querySelectorAll(".button button").forEach((e)=>{
        
        e.addEventListener("click",()=>{
            document.querySelectorAll(".button button").forEach(ee=>{
                ee.classList.remove("active")
            })
            e.classList.add("active")
        })
    })
    function ShowProducts() {
        return (
            <>
                <div className="button text-center m-3">
                    <Button className="active" variant="outline-dark m-2 ms-0" onClick={() => setFilter(data)}>All</Button>
                    <Button className="" variant="outline-dark m-2 ms-0" onClick={() => filterProduct("men's clothing")}>Men’s Clothing</Button>
                    <Button className="" variant="outline-dark m-2 ms-0" onClick={() => filterProduct("women's clothing")}>Women’s Clothing</Button>
                    <Button className="" variant="outline-dark m-2 ms-0" onClick={() => filterProduct("jewelery")}>jewelery</Button>
                    <Button className="" variant="outline-dark m-2 ms-0" onClick={() => filterProduct("electronics")}>Electronic</Button>
                </div>
                {filter.map((product) => (
                    <Card style={{ width: '18rem' }} key={product.id} className="text-center py-4 px-2 m-2">
                        <Card.Img variant="top" src={product.image} height="250px" />
                        <Card.Body>
                            <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                            <Card.Text>
                                {product.price} $
                            </Card.Text>
                            <Button variant="outline-dark mx-2 ms-0">
                                <Link to={`/product/${product.id}`} className="nav-link">Click for more</Link>
                            </Button>
                            <Button variant="outline-dark">
                                <Link to={`/buynow/${product.id}`} className="nav-link">Buy Now</Link>
                            </Button>
                                
                        </Card.Body>
                    </Card>
                ))}
            </>
        );
    }
    function Loading() {
        return (
            <>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
                <Card style={{ width: '18rem' }} className="text-center py-4 px-2 m-2 Skeleton">
                    <Skeleton />
                </Card>
            </>

        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row pt-3">
                    <div className="col-12">
                        <h3 className="display-6 fw-bolder text-center">Latest Products</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? Loading() : ShowProducts()}
                </div>
            </div>
        </div>
    );
}

export default Product;
