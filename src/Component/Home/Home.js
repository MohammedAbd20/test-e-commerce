import { Card } from "react-bootstrap";
import "./Home.css"

function Home() {
    return (
        <>
            <Card className="bg-dark text-black border-0">
                <Card.Img src="https://www.csc.gov.sg/images/default-source/ethos-images/ethos-digital-edition-(aug-2021)/role-of-govt-in-ecommerce_banner-teaser.jpg?sfvrsn=691dd9fc_2" alt="Card image" height="550px" />
                <Card.ImgOverlay className="container">
                    <Card.Title className="display-3 fw-bolder mb-0">New Season Arrivals</Card.Title>
                    <Card.Text className="fs-2 lead">Check out all the trends</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default Home;