import React from "react";

// call shoot event handler in function
function Football() {
  const shoot = () => {
    alert("You have a nice shoot");
  };
  const shootArg = (a) => {
    alert(a);
  };

  const shootAndTrig = (a, ev) => {
    console.log(a);
    alert(ev.type);
  };
  return (
    <>
      <button onClick={shoot}>click to shoot</button>
      <p>
        {" "}
        Note: to pass an arg to a event handler, use an arrow function inside
        the braces Or it will be called automacally{" "}
      </p>
      <button onClick={() => shootArg("Goal!!!!")}>shoot with arg</button>
      <h2>
        the event trigger allows to track what going on when a function is
        triggered
      </h2>
      <button
        onClick={(event) => {
          shootAndTrig("Goal!!!!", event);
        }}
      >
        {" "}
        Shoot to trig
      </button>
    </>
  );
}

export default Football;
