import { React, useState } from "react";
import "./TrainForm.css";
import TrainDetails from "./TrainDetails";
import TravelPoints from "./TravelPoints";
import TrainClass from "./TrainClass";

export default function TrainForm() {
  const [trainName, setTrainName] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [trainFrom, setTrainFrom] = useState("");
  const [trainTo, setTrainTo] = useState("");
  const [selectedClass, setSelectedClass] = useState("");



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
                <TrainDetails
                  type="text"
                  inputsName={"trainName"}
                  inputVal={trainName}
                  setInputValue={setTrainName}
                  placeholder={"Train Name"}
                />

                <TrainDetails
                  type="number"
                  inputsName={"trainNumber"}
                  inputVal={trainNumber}
                  setInputValue={setTrainNumber}
                  placeholder={"Train Number"}
                />

                <TravelPoints
                  inputVal={trainFrom}
                  setInputValue={setTrainFrom}
                  label={"Source"}
                />

                <TravelPoints
                  inputVal={trainTo}
                  setInputValue={setTrainTo}
                  label={"Destination"}
                />

                <div className="col-md-12 mt-3">
                  <label>
                    Class:
                  </label>

                  <TrainClass classType={'1AC'} checkCondition={selectedClass === '1AC'} changeClass={setSelectedClass} />
                  <TrainClass classType={'2AC'} checkCondition={selectedClass === '2AC'} changeClass={setSelectedClass} />
                  <TrainClass classType={'3AC'} checkCondition={selectedClass === '3AC'} changeClass={setSelectedClass} />
                  <TrainClass classType={'ALL'} checkCondition={selectedClass === 'ALL'} changeClass={setSelectedClass} />
                  <TrainClass classType={'SL'} checkCondition={selectedClass === 'SL'} changeClass={setSelectedClass} />
                </div>

                {/* To check if the values are fetched correctly */}
                <div style={{color:'white'}}>
                  {selectedClass +"" +trainTo}
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
