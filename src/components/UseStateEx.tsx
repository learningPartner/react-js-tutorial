import { useState, type EventHandler } from "react";

function UseStateEx() {
  let courseName = "ReactJs";

  const [courseVideosLength, setCourseVideoLength] = useState("0");
  const [productPrice, setProductPrice] = useState<number>(1200);
  const [isActive, setIsActive] = useState<boolean>(false);

  const [cityList, setCityList] = useState<string[]>(["Pune", "Nagpur"]);
  const [cityName, setcityName] = useState<string>("");

  const [student, setStudent] = useState<Istudent>({
    city: "Pune",
    isActive: false,
    name: "Chetan",
  });

  const chancgCourse = () => {
    debugger;
    courseName = "Angular";
  };
  const chnageVideoCount = () => {
    setCourseVideoLength("5");
  };
  const chnagePrice = (event: any) => {
    debugger;
    setProductPrice(event.target.value);
  };
  const onActiveChnage = (event: any) => {
    setIsActive(event.target.checked);
  };

  const onCityNameChange = (event: any) => {
    setcityName(event.target.value);
  };

  const addCity = () => {
    setCityList((oldList) => [...oldList, cityName]);
  };

  const addMpCitiList = () => {
    setCityList(["Indore", "Ujjain", "Bhopal"]);
  };

  const chnageName = (event:any) =>{
    setStudent(oldData=> ({...oldData, name:event.target.value}))
  }

  const chnageCity = (event:any) =>{
    setStudent(oldData=> ({...oldData, city:event.target.value}))
  }

  return (
    <div>
        <input type="text" onChange={(eve)=>chnageName(eve)} placeholder="Name" />
         <input type="text" onChange={(eve)=>chnageCity(eve)} placeholder="City" /> 
    <p>{student.name} -- {student.city}</p> 
      <p>{cityList}</p>
      <br />
      <input
        type="text"
        onChange={(eve) => onCityNameChange(eve)}
        placeholder="Enter City Name"
      />
      <button onClick={addCity}>Add city</button>
      <button onClick={addMpCitiList}>Add Mp Cities</button>
      <p>{courseName}</p> -
      <br />
      <p>courseVideosLength - {courseVideosLength}</p>
      <br />
      <button onClick={chancgCourse}>Chnage Course Name</button>
      <br />
      <button onClick={chnageVideoCount}>Change Videos Count</button>
      <br />
      productPrice- {productPrice}
      <br />
      <input type="text" onChange={(event) => chnagePrice(event)} />
      <br />
      isActive - {isActive ? "Checked" : "unChecked"}
      <br />
      <input type="checkbox" onChange={(event) => onActiveChnage(event)} />
    </div>
  );
}

export default UseStateEx;

interface Istudent {
  name: string;
  city: string;
  isActive: boolean;
}
