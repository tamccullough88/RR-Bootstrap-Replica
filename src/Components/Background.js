import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100vw" }} fluid >
            <div >
                <Card style={{ border: "none", minHeight: "428px", maxHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6", width: "100vw", backgroundSize: "auto", backgroundImage: "url(https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "right center" }} className="text-black" >
                    <div style={{ top: "auto", marginLeft: "100px", marginBottom: "50px", marginTop: "75px" }} >
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="Enter your address" style={{ width: "250px" }} />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            {/* <div >
                <img style={{ height: "428px", width: "25vw", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" alt="vegitables" />
            </div> */}

        </div>
    )
}

export default Background