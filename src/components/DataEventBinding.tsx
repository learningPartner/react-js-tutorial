function DataEventBindig() {
  
  const courseName = "React Js";
  const stateName = "mh";
  const div1ClassName = "primary";

  const myCss = {
    "background-color": "green",
    width: "200px",
    height: "200px",
  };

  const showWelcomeTest = () => {
    alert("Welcome to ReactJs")
  }

  const onStateChange =() => {
    alert("On State Chnaged")
  }

  const onMouseEnter = () =>{
    console.log("Mounse Entered into Div")
  }

  const onMouseLeft = () =>{
    console.log("Mounse Left From Div")
  }

  return (
    <div>
    <button onClick={showWelcomeTest}> Show Welcome</button>

      <p>courseName - {courseName} </p>
      <span> {courseName}</span>
      <br />
      <br />
      <input type="text" value={courseName} />
      <br />
      <br />
      <select value={stateName} onChange={onStateChange}>
        <option value="goa">Goa</option>
        <option value="pun">Punjab</option>
        <option value="mh">Maharashtra</option>
        <option value="mp">Madha Pradesh</option>
      </select>
      <br />
      <br />
      <div className={div1ClassName}>Diuv 111</div>
      <br /><br />
      <div style={myCss} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeft}>

      </div>
    </div>
  );
}

export default DataEventBindig;
