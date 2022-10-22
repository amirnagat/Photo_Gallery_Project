import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ()=>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const types = ["image/png","image/jpeg"]

    const changeHander = (e)=>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected); 
            setError("")
        }else{
            setFile(null)
            setError("please select png or jpeg Image. ")
        }
    }
    return(
        <form>
        <label>
            <button>
                <input type="file" onChange={changeHander}/>
            +</button>
           
        </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;