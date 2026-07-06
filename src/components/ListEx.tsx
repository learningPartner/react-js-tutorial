import { useNavigate } from "react-router";

function ListEx() {
  const cityList = ["Pune", "Mumbai", "Thane", "Nagpur"];
  const navigate = useNavigate();

  const studentList: Istudent[] = [
    { name: "AAA", city: "Pune", state: "MH" },
    { name: "BBB", city: "Mumbai", state: "MH" },
    { name: "CCCC", city: "Nagpur", state: "MH" },
    { name: "DDDD", city: "Panji", state: "Goa" },
  ];

  const navigateToDataBindig =() => {
    navigate('/Data-Binding')
  }

  const gotoPrevious = () => {
    navigate(-1)
  }

  

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <button onClick={navigateToDataBindig}>Navigate to Data Binding</button>
          <br />
          <button onClick={gotoPrevious}>Go To Previos Page</button>
        </div>
        <div className="col-3">
          <button onClick={()=> navigate('/user/1')}>User 1</button>
          <br />
          <button onClick={()=> navigate('/user/2')}>user 2</button>
        </div>
        <div className="col-3">
          <ul>
            {cityList.map((city: string) => {
              return <li key={city}>{city}</li>;
            })}
          </ul>
        </div>
        <div className="col-3">
          {cityList.map((cityName: string) => (
            <button className="btn btn-success mt-2" key={cityName}> {cityName}</button>
          ))}
        </div>
        <div className="col-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student: Istudent) => {
                return (
                  <tr key={student.name}>
                    <td>{student.name}</td>
                    <td>{student.city}</td>
                    <td>{student.state}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEx;

interface Istudent {
  name: string;
  city: string;
  state: string;
}
