import React, { useState, useEffect } from "react";
import { Container } from "../styles/layoutStyled";

function Hom() {
  const [btnshow, setBtnshow] = useState(false);
  const styles = {
    transac_success: {
      cursor: "pointer",
      background: "#28A138",
      padding: "1px 12px",
      borderRadius: "4px",
      color: "white",
      width: "32px",
      height: "32px",
    },
    transac_unsuccess: {
      width: "32px",
      height: "32px",
      background: "#E8EDF1",
      color: "white",
      borderRadius: "3px",
    },
  };

  console.log(btnshow);

  //   const btnStyle=

  return (
    <Container>
      <h1> Home</h1>
      <hr />
      <p>This is home page</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        perspiciatis nam provident recusandae, beatae placeat distinctio nihil
        excepturi expedita? Sunt, culpa. Totam adipisci temporibus velit
        repudiandae iure nostrum omnis pariatur, sequi nobis cum fugit ullam
        explicabo, eius voluptas minima cumque, voluptates impedit veritatis
        recusandae? Quas eligendi laborum ea cum sed!
      </p>
      {/* <button
        onClick={() => {
          setBtnshow(!btnshow);
        }}
        style={btnshow ? styles.transac_success : styles.transac_unsuccess}
      >
        hi
      </button> */}
    </Container>
  );
}

export default Hom;
