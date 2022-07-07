import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";


function Friday(props) {
  const history = useHistory();
  const [count, setState] = React.useState(0)

  return (
      <>
      <Title><Theday>금요일</Theday> 평점 남기기</Title>
      <SevenDay>
        금
        {Array.from({length : 5}, (v, i) => {
          return (
           <div
            key = {i}
            onClick={() => {
              setState(i + 1)
            }}
           style={{
            width: "30px",
            height: "30px",
            borderRadius : "50%",
            backgroundColor : count < i + 1 ? "black" : "blue",
            margin: "5px",
            cursor : "pointer",
           }} 
           >
           </div>
          )
        })}          
       </SevenDay>
       <PyengBtn onClick={() => history.push("/")}>
          평점 남기기
       </PyengBtn>
       </>
  )
}
const Title = styled.h1`

margin : 10px auto 10px auto;

`;

const Theday = styled.span`

color : white;
background-color : black;
padding : 0.2rem;
border-radius : 5px;


`;


const CirCle = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: black;
margin: 5px;
border-color: black;
`;

const SevenDay = styled.div`

display: flex;
justify-content: center;
align-items: center;

margin: 1rem 0px;
width: 100%;

`;

const PyengBtn = styled.button`

  background-color: black;
  border-radius: 5px;
  border: transparent;
  color: white;

  width: 250px;
  height: 50px;
  font-size: large;
  margin : 10px auto; 


  `;





export default Friday;
