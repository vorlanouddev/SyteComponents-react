import React, { useState, useEffect } from "react";
import { Container } from "../styles/layoutStyled";
import axios from "axios";
function About() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setdata(res.data));
  }, []);
  console.log(data);
  return (
    <Container>
      <h1>About</h1>
      <hr />
      <h3>My name is{data.name}</h3>
      <ul>
        <li>email :{data.email}</li>
        <li>phone :{data.phone}</li>
        <li>website :{data.website}</li>
      </ul>
    </Container>
  );
}

export default About;
