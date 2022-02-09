import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios"
import swal from "sweetalert"
import { useState } from "react";
import {AiTwotoneDelete} from "react-icons/ai"

export default function FormCreate() {
  const [field, setField] = useState([]);
  const [counter, setCounter] = useState(1);
  const { register, handleSubmit } = useForm();

  const onSubmit =async (data) => {
    // console.log(data);
    
    if(data.fullName.length==0 || data.email.length==0|| data.userName.length==0)
    {
      alert("All fields are mandatory")
    }
    else{
      const response = await axios.post("http://localhost:4000/addUsers",data)
      swal({
        title:`${response.data.message}`,
        icon:"success"
      }).then(()=>{
        window.location="/table"
      })
    }
    
  };

  const addField = () => {
    setField((prevfield) => [...prevfield, counter]);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(field);
  };
  const removeField = (index) => () => {
    setField((prevfield) => [
      ...prevfield.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearField = () => {
    setField([]);
  };

  return (
    <div className="flex justify-center bg-black h-fit p-5">
      <Form
        className="text-white border-8 border-white p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset name="1" key="1">
          <Row>
            <Col lg={4}>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                />
                <Form.Text className=" text-black">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  {...register("userName", {minLength:4})}
                />
              </Form.Group>
            </Col>
          </Row>
        </fieldset>
        {field.map((index) => {
          const fieldName = `input[${index}]`;
          return (
            <fieldset name={fieldName} key={fieldName} className="mb-3">
              <Row>
                <Col lg={4}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      {...register(`${fieldName}.fullName`)}
                    />
              
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      {...register(`${fieldName}.email`)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      {...register(`${fieldName}.userName`,  {minLength:4})}
                    />
                  </Form.Group>
                </Col>
                <Col lg={1} className="flex justify-start items-center mb-3">
                  <button
                    type="button"
                    onClick={removeField(index)}
                    className="btn btn-danger p-2 mt-9"
                  >
                    <AiTwotoneDelete className = ""/>
                  </button>
                </Col>
              </Row>
            </fieldset>
          );
        })}
        <div className="flex justify-center space-x-8 mt-16">
          <button type="button" onClick={addField} className="btn btn-primary">
            Add Field
          </button>
          <button
            type="button"
            onClick={clearField}
            className="btn btn-danger"
          >
            Clear All Field
          </button>
        </div>
        <div className=" p-4 flex justify-center items-center">
          <input type="submit" className="btn btn-success" />
        </div>
      </Form>
    </div>
  );
}