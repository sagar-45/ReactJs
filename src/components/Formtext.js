import React,{useState} from 'react'

export default function Formtext(props) {
    const Upconvert=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UperCase Covert",'success');
    }
    const lowerconvert=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Covert",'success');
    }
    const clearText=()=>{
        setText('');
        props.showAlert("Clear Text",'success');
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard",'success');
    }
    const changeHandler=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className="my-3">
            <h3 className={`text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h3>
            <div>
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'} bg-${props.mode==='dark'?'dark':'light'}`} value={text} onChange={changeHandler} placeholder="Enter text here" id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button disabled={text.length==0} className="btn btn-primary my-3" onClick={Upconvert}>UpperCase</button>
            <button disabled={text.length==0}  className="btn btn-primary mx-2" onClick={lowerconvert}>LowerCase</button>
            <button disabled={text.length==0} className="btn btn-primary" onClick={clearText}>Clear</button>
            <button disabled={text.length==0} className="btn btn-primary mx-2" onClick={copyText}>Copy to Clipboard</button>
        </div>
        <div className={` container text-${props.mode==='dark'?'light':'dark'}`}>
            <h2>Your taxt summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
        </div>
        </>
    )
}
