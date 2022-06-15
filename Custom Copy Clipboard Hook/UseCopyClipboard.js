import { useState } from "react"
export default function UseCopyClipboard(){
    const [ copied, setCopied ] = useState();
    const handleCopy = (text) =>{
       if(typeof text ==="string" ){
          navigator.clipboard.writeText(text);
          setCopied(true)
       }else{
         alert ("Invalid Data");
       }
    }
    return [ copied, handleCopy ];
}