import React from "react"

export const InputText = (props) => {
    return(
        <div className="container-inputs">
            <span className="label-input">{props.label}</span>
            <input onChange={(e) => props.onChange(e.target.value)} type={props.type || "text"} className="input-style input-default " id={props.id}/>
        </div>
    )
}
