import React from 'react'

function Component(props) {
  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ marginTop: "15px", marginRight: "15px" }}
        onClick={() => {
          props.Plus();
        }}
      >
        Component Plus {props.count}
      </button>
      <button
        className="btn btn-primary"
        style={{ marginTop: "15px" }}
        onClick={() => {
          props.Minus();
        }}
      >
        Component Minus {props.count}
      </button>
    </div>
  )
}

export default Component