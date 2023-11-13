import React from "react";

export default function TravelPoints(props) {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    const target = event.target.value;
    props.setInputValue(target);
  };
  return (
    <div className="col-md-12">
      <div class="form-floating">
        <select
          className="form-select mt-3"
          value={props.value}
          onChange={onChangeHandler}
          required
        >
          <option
            selected
            disabled
            value=""
            aria-label="Floating label select example"
          >
            From
          </option>
          <option value="ranchi">Ranchi</option>
          <option value="howrah">Howrah</option>
          <option value="patna">Patna</option>
        </select>
        <label htmlFor="trainFrom" style={{ color: "black" }}>
          {props.label}
        </label>
        {/* <div className="valid-feedback">
                      You selected a position!
                    </div>
                    <div className="invalid-feedback">
                      Please select a position!
                    </div> */}
      </div>
    </div>
  );
}
