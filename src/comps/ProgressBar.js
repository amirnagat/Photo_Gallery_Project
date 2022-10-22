import React from "react";
import useStorage from '../hooks/useStorage';

const ProgressBar =({file,setFile})=>{ 
    const {url,progress} = useStorage(file) 
    console.log(progress,url); 
    return(
        <div className="prgress-bar">progress </div>
    )
}
export default ProgressBar