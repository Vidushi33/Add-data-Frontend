import { Container, Row, Card, Button, Form, Col } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import swal from "sweetalert";

import { useState, useEffect } from "react";

export default function FormCreate(props) {

  
  
  const { register, handleSubmit, reset } = useForm();
  const submitData = async (data) => {
    console.log(data)
    
    const response = await axios.post("https://add-delete-data.herokuapp.com/addUser", data);

    if (response.data.message) {
      swal({
        title: `${response.data.message}`,
        icon: `${response.data.icon}`,
      }).then(()=>{
        window.location = "/table"
      });
    reset()
    }
  }
    

    
     
  return props.formDetails.map((val, idx) => {
    let email = `email-${idx}`,
      fullName = `fullName-${idx}`,
      userName = `userName-${idx}`;

    return (
      <Container fluid>
        <Row >
          <Col className = "mt-5 ">
           
            
                <h1 className="text-center text-5xl ">Form</h1>
            
               

                <Form onSubmit = {handleSubmit(submitData)} >
                  <div className = "d-flex mt-5 mx-auto items-center  justify-center">
                  <Form.Group
                    className="mb-3 mr-12"
                    
                  >
                    <Form.Label className="text-black ">Email: </Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Enter your mailId"
                      data-id={idx}
                      id={email}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 mr-12"
                    
                  >
                    <Form.Label className="text-black ">FullName: </Form.Label>
                    <Form.Control
                      type="text"
                      {...register("fullName", { required: true })}
                      placeholder="Enter your full name"
                      data-id={idx}
                      id={fullName}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 mr-12"
                    
                  >
                    <Form.Label className="text-black ">Username: </Form.Label>
                    <Form.Control
                      type="text"
                      {...register("userName", { required: true, min:4 })}
                      placeholder="Enter your user name"
                      data-id={idx}
                      id={userName}
                    />
                  </Form.Group>
                  <div style={{ float: "right" }}>
                  {idx === 0 ? (
                    <button
                      onClick={() => props.add()}
                      type="button"
                      className="btn btn-primary text-center mt-4"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => props.delete(val)}
                    >
                      Delete
                    </button>
                  )}
                </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="primary" type="submit" >Submit</Button>
                  </div>
                </Form>
                
             
          </Col>
        </Row>
      </Container>
    );
  });
  }