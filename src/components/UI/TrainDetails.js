import React from 'react'

export default function TrainDetails(props) {
    return (
        <>
            <div className="col-md-12">
                <input
                    className="form-control"
                    type="text"
                    value={props.inputVal}
                    name={props.inputs}
                    placeholder={props.inputs}
                    onChange={(e)=>{
                        props.setInputValue(e.target.value)
                    }}
                    required
                />
                {/* <div className="valid-feedback">Train Name is valid!</div>
                <div className="invalid-feedback">
                    Train Name cannot be be blank!
                </div> */}
            </div>
        </>
    )
}
