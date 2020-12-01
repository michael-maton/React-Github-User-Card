import React from "react";
import styled from "styled-components";

export default function Card(props) {
    console.log(props.data);
  return (
    <CardContainer>
        <h2>{props.data.name}</h2>
        <p>{props.data.login}</p>
        <img src={props.data.avatar_url} alt={`Avatar for ${props.data.name}`} key={props.data.avatar_url}/>
        <div className="details">
            <p>Location: {props.data.location}</p>
            <p>Bio: {props.data.bio}</p>
            <p>Followers: {props.data.followers}</p>
            {
                props.followers.map(user => {
                   return (<div>
                        <p>{user.login}</p>
                        <img width="100" src={user.avatar_url} alt={`Avatar for ${user.name}`} key={user.avatar_url}/>
                    </div>)
                })
            }
        </div>
    </CardContainer>
  );
}


const CardContainer = styled.div`
    p:nth-of-type(1) {
        font-style: italic;
    }

`