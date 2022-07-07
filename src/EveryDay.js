import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import Circle from "./Circle";


const EveryDay = (props) => {
    const history = useHistory();
  
    let sum = 0;
    let min = 1;
    let max = 5;
    const a = Math.floor(Math.random() * (max - min + 1) + min);
    const b = Math.floor(Math.random() * (max - min + 1) + min);
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    const d = Math.floor(Math.random() * (max - min + 1) + min);
    const e = Math.floor(Math.random() * (max - min + 1) + min);
    const f = Math.floor(Math.random() * (max - min + 1) + min);
    const g = Math.floor(Math.random() * (max - min + 1) + min);

    sum += a
    sum += b
    sum += c
    sum += d
    sum += e
    sum += f
    sum += g
    
      // sum

      
      // Truble Shooting
      // 지금 안되는 것은 하위요소에 있는 평균점수 값을 밖으로 내보내지 못하는 것이다.
      // 문제를 해결하기위한 방법에는 무엇이 있는가?
      // 1. 코드를 다시 짠다 
      // 2. 하위요소와 상위요소를 바꾼다.
      // => 시도해 봤으나 안된다.
      // 3. 리턴값을 하나로 합친다. 
      // => 되긴 되는데 랜덤한 요소가 아닌 값이 모두 동일하게 나온다.
      // 4. 그럼 맵을 써서 요소에 7개 값으로 나누어 주고 뿌려주면? 
      // => 지금 쓴 코드로는 안될거 같은데 지금쓴 코드로 뿌려줄려면 하나로 합쳐주고 그 인덱스 값만금 출력시켜야 된다.
      //    => 이미 7갠데?
      // 5. 망한거 같다 === true
      // 6. 각각의 실행된 함수에서 그 결과값을 추출해서 가져오면 어떤가.
      // => 가능한가? 안된다.
      // 7. 이벤트 버스 기능을 써봐야되나?
      // => 좀 아닌듯..

      const avgRate = (sum / 7).toFixed(1);
      const [avg, setAvg] = React.useState(avgRate);

    return (
        <div>
        <Title>내 일주일은?</Title>
        <SevenDay>
          월
          
          {Array.from({length : a}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - a}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          <TriAngle onClick={() => history.push("Monday")}/>
         </SevenDay>
        <SevenDay>
          화
          {Array.from({length : b}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - b}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          <TriAngle onClick={() => history.push("Tuesday")}/>
        </SevenDay>
        <SevenDay>
          수
          <>
          {Array.from({length : c}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - c}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          
          </> 
          <TriAngle onClick={() => history.push("Wednesday")}/>
        </SevenDay>
        <SevenDay>
          목
          <>
          {Array.from({length : d}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - d}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          </>
        
          <TriAngle onClick={() => history.push("Thursday")}/>
        </SevenDay>
        <SevenDay>
          금
          <>
          {Array.from({length : e}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - e}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          </>
          
          <TriAngle onClick={() => history.push("Friday")}/>
        </SevenDay>
        <SevenDay>
          토
          <>
          {Array.from({length : f}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - f}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          </>
         
          <TriAngle onClick={() => history.push("Saturday")}/>
        </SevenDay>
        <SevenDay>
          일
          <>
          {Array.from({length : g}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "blue", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          {Array.from({length : 5 - g}, (v, i) => {
            return(
              <div
              key = {i}
              style={{
               width: "30px",
               height: "30px",
               borderRadius: "50%",
               backgroundColor:  "black", 
               margin: "5px",
               cursor: "pointer",
              }} 
              >
              </div>

            )
          
          })}
          </>
         
          <TriAngle onClick={() => history.push("Sunday")}/>
        </SevenDay>
     
        <Average>
        평균평점
        <br />
        
        {avg}
        
        </Average>
        <SevenDay>
        <ResetBtn onClick={()=> {
          setAvg(parseInt(0).toFixed(1));
        }}> RESET</ResetBtn>
        </SevenDay>
        
        </div>
        
    );
    
};

const Title = styled.h3`
  text-align: center;
  
`;


const SevenDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction : row;
  margin: 1rem 0px;
  width: 100%;
`;

const TriAngle = styled.div`
  
  background-color: transparents;
  border-color: transparents;
  width: 0px;
  height: 0px;
  border-top: 30px solid #666666;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  transform: rotate(-90deg);
  color: black;
  cursor: pointer;
  margin: 5px;
`;


const ResetBtn = styled.button`
  background-color: black;
  border-radius: 5px;
  border: transparent;
  color: white;

  width: 100px;
  height: 50px;
  font-size: large;
  font-weight : bold;

  margin-top : 50px;
  ;
  

`;

const Average = styled.div`

  color : blue;
  font-weight : bold;
  text-align : center;
  font-size : large;
  

`;
export default EveryDay;