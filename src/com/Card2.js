import React from 'react'
import {Container ,Card, Col, Button} from 'react-bootstrap'; 

export default function MyCard(props) {

  const handleClick = () => {
    console.log("clicked")
  }

  return (
  
    <div className="App">  
    <Container className='p-4'>  
   <Col md="4">  
   <Card style={{width:"500px", height:"300px"}}>  
   <Card.Img variant="top" src={props.img} style={{width:"500px", height:"250px"}}/>  
   <Card.Body>  
     <Card.Title>{props.title}</Card.Title>  
      
   </Card.Body>  
 </Card>  
     </Col>  
 </Container>  
     </div>  
  )
}
