import React from 'react'
import {Container ,Card, Col, Button} from 'react-bootstrap'; 

export default function MyCard(props) {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
    // <div className='article-card' onClick={handleClick()}>
    //    <h1>{props.title}</h1>
    //    <img id="crd_title_img"src={props.img} alt="" />
    //    <p>{props.over}</p>
    //    <br></br>
    //    <p>{props.des}</p>
    //    <br></br>
    //    <p>{props.con}</p>
    // </div>


    <div className="App">  
    <Container className='p-4'>  
   <Col md="4">  
   <Card style={{width:"240px"}}>  
   <Card.Img variant="top" src={props.img} />  
   <Card.Body>  
     <Card.Title>{props.title}</Card.Title>  
     <Card.Text  style={{height: "200px" ,overflow: "hidden"}}
  >  
        {props.over}
     </Card.Text> 
     
     <Button variant="primary">Read More</Button>  
   </Card.Body>  
 </Card>  
     </Col>  
 </Container>  
     </div>  
  )
}
