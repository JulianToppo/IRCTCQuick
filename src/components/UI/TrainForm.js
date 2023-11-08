import { React, useState } from "react";
import "./TrainForm.css";
import TrainDetails from "./TrainDetails";

export default function TrainForm() {

  const [trainName, setTrainName] = useState("")
  const [trainNumber, setTrainNumber] = useState()

  //addition of trainname and trainnumber recommendation
  
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Get Notification</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" noValidate>
                <TrainDetails type="text" inputsName={"trainName"} inputVal={trainName} setInputValue={setTrainName} placeholder={'Train Name'} />
                <TrainDetails type="number" inputsName={"trainNumber"} inputVal={trainNumber} setInputValue={setTrainNumber} placeholder={'Train Number'}/>



                        
                                
                <div className="col-md-12">
                  <div class="form-floating">
                    <select className="form-select mt-3" required>
                      <option
                        selected
                        disabled
                        value=""
                        id="trainFrom"
                        aria-label="Floating label select example"
                      >
                        From
                      </option>
                      <option value="ranchi">Ranchi</option>
                      <option value="howrah">Howrah</option>
                      <option value="patna">Patna</option>
                    </select>
                    <label htmlFor="trainFrom" style={{ color: "black" }}>
                      Source
                    </label>
                    <div className="valid-feedback">
                      You selected a position!
                    </div>
                    <div className="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="form-floating">
                    <select className="form-select mt-3" required>
                      <option
                        selected
                        disabled
                        value=""
                        id="trainTo"
                        aria-label="Floating label"
                      >
                        From
                      </option>
                      <option value="ranchi">Ranchi</option>
                      <option value="howrah">Howrah</option>
                      <option value="patna">Patna</option>
                    </select>
                    <label htmlFor="trainTo" style={{ color: "black" }}>
                      Destination
                    </label>
                    <div className="valid-feedback">
                      You selected a position!
                    </div>
                    <div className="invalid-feedback">
                      Please select a position!
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <label className="mb-3 mr-1" htmlFor="class">
                    Class:
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="class"
                    id="male"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="1ac"
                  >
                    1AC
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="class"
                    id="2ac"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="2ac"
                  >
                    2AC
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="class"
                    id="3AC"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="3AC"
                  >
                    3AC
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="class"
                    id="ALL"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="ALL"
                  >
                    ALL
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="class"
                    id="SL"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="SL"
                  >
                    SL
                  </label>
                  <div className="valid-feedback mv-up">
                    You selected a class!
                  </div>
                  <div className="invalid-feedback mv-up">
                    Please select a class!
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label">
                    I confirm that all data is correct
                  </label>
                  <div className="invalid-feedback">
                    Please confirm that the entered data is correct!
                  </div>
                </div>
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">
                    Notify ME!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
