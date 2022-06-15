import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Demo(props) {
   
   const [data, setData] = useState();

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/")
         .then(res => {
            return res.json(); 
            console.log("res1 d", res);
         }).then(res => { 
            setData(res); 
            console.log("res2 d", res);
         }).catch((err) => {
            console.log("err d", err);
         });
   }, []);  


   
   const { username } = useParams(); 
   const thisusername = data && data.find((u)=> u.username === username);
   console.log("this", thisusername);

   return <>
      Demo page 
   </>
}