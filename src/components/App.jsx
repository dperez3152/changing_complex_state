import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const newName = event.target.value;
    const inputName = event.target.name;
    console.log();
    console.log(inputName);

    setName((prevName) => {
      if (inputName === "fName") {
        return {
          fName: newName,
          lName: prevName.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevName.fName,
          lName: newName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}{" "}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={name.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
