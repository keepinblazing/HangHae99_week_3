import React, {useState} from "react";

const Circle = (props) => {
    
    let min = 1;
    let max = 5;
    
    const a = Math.floor(Math.random() * (max - min + 1) + min);
    let sum = 0;
    sum += a;


    
    const Circle_count = Array.from({length : a}, (v, i) => i); 
    const Circle_count2 = Array.from({length : 5 - a}, (v, i) => i);
    
    
    const avgRate = (sum / 7).toFixed(1)
    
    const [avg, setAvg] = React.useState(avgRate);

    console.log(avg)

    return (
        <>
       {Circle_count.map((n, i) => {
            return(
            <div
            key = {i}    
            style={{
                   width: "30px",
                   height: "30px",
                   borderRadius: "50%",
                   backgroundColor: "blue",
                   margin: "5px",
                   
            }}
            >
            </div>
            )
        })}

        {Circle_count2.map((n, i) => {
            return(
            <div 
            key = {i}        
            style={{
                   width: "30px",
                   height: "30px",
                   borderRadius: "50%",
                   backgroundColor: "black",
                   margin: "5px",
                  
            }}  
            >
            </div>
            )
        })}
        
        </>

    );
};

export default Circle;
