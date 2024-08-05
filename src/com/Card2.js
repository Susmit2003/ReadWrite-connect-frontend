// import React from 'react'
// import {Container ,Card, Col, Button} from 'react-bootstrap'; 

// export default function MyCard(props) {

//   const handleClick = () => {
//     console.log("clicked")
//   }

//   return (
  
//     <div className="App">  
//     <Container className='p-4'>  
//    <Col md="4">  
//    <Card style={{width:"1100px", height:"500px"}}>  
//    <Card.Img variant="top" src={props.img} style={{width:"100%", height:"400px"}}/>  
//    <Card.Body>  
//      <Card.Title>{props.title}</Card.Title>  
     
      
//    </Card.Body>  
//  </Card>  
//      </Col>  
//  </Container>  
//      </div>  
//   )
// }

import React from 'react';

export default function Card2(props) {
  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div className="w-full p-2">
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-56 object-cover" 
          src={props.img} 
          alt={props.title} 
          style={{ marginBottom: '10px' }} 
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold">{props.title}</h2>
        </div>
      </div>
    </div>
  );
}





