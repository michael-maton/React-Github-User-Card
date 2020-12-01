import React from "react";
import styled from "styled-components";

export default function Card(props) {
    console.log(props.data);
  return (
    <CardContainer>
        <h2>{props.data.name}</h2>
        <p>{props.data.login}</p>
        <img src={props.data.avatar_url} alt={`Avatar for ${props.data.name}`} key={props.data.avatar_url}/>
    </CardContainer>
  );
}


const CardContainer = styled.div`
    p {
        font-style: italic;
    }



`