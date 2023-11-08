import React from 'react'

export default function TrainDetails(props) {
    
    const handleChange = (event) => {
        console.log(event.target.value);
        const target = (event.target.value).toUpperCase();
        props.setInputValue(target);
    }

    return (
        <>
            <div className="col-md-12">
                <input
                    className="form-control"  // used for styling
                    type={props.type}
                    value={props.inputVal}
                    name={props.inputsName}  
                    placeholder={props.placeholder}  // for placeholder
                    onChange={handleChange}
                />
                {/* <div className="valid-feedback">Train Name is valid!</div>
                <div className="invalid-feedback">
                    Train Name cannot be be blank!
                </div> */}
            </div>
        </>
    )
}
