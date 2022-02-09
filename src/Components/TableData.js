import React from "react";
import { Table , Container} from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import { useState, useEffect } from "react";

export default function TableData(){
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:4000/getUsers");
    setData(response.data.users);
  },[]);

    return(
      <Container fluid className = "h-screen" style = {{background: "linear-gradient(to right, #ee9ca7, #ffdde1)"}}>
        <h1 className="text-center text-5xl ">Table</h1>
           <Table
              striped
              bordered
              hover
              variant="dark"
              style={{ width: "60vw" }}
              className="p-4 text-center mx-auto mt-5"
            >
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>User Name</th>
                 
                </tr>
              </thead>
              <tbody>
                {data.map((user)=>(
                <tr>
                <td>{user.email}</td>
                <td>{user.fullName}</td>
                <td>{user.userName}</td>
                
                
                </tr>
               ))}
              </tbody>
            </Table>
      </Container>
       
    )
}