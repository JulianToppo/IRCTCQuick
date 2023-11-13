import React from 'react'

export default function TrainClass({ classType, checkCondition, changeClass }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="class"
        id={classType}
        value={classType}
        autoComplete="off"
        onChange={() => changeClass(classType)}
        checked={checkCondition}
        required
      />
      <label className="btn btn-sm btn-outline-secondary" htmlFor={classType}>
        {classType}
      </label>
    </>
  )
}

