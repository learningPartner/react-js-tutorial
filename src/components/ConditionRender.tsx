import { useState } from "react";

function ConditionRender() {
  const [isDiv1Visiable, setDiv1] = useState<boolean>(true);
  const [isActive, setIsActive] = useState(false);

  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");

  const hideDiv1 = () => {
    setDiv1(false);
  };

  const showDiv1 = () => {
    setDiv1(true);
  };

  const onCheckboxChnages = (event: any) => {
    setIsActive(event.target.checked);
  };

  return (
    <div>
      <div className="row">
        <div className="col-4">
          {isDiv1Visiable == true && (
            <div className="bg-danger p-4">Div 11</div>
          )}
        </div>
        <div className="col-4">
          {isActive && <div className="bg-warning p-4">Div 22</div>}
        </div>
        <div className="col-4">
          {isActive && num1 == num2 && <div className="bg-secondary p-4">Div 22</div>}
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4 text-center">
          <button className="btn btn-success mx-2" onClick={showDiv1}>
            {" "}
            Show
          </button>
          <button className="btn btn-danger" onClick={hideDiv1}>
            Hide
          </button>
        </div>
        <div className="col-4">
          <input type="checkbox" onChange={(eve) => onCheckboxChnages(eve)} />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Num1 "
            onChange={(eve) => setnum1(eve.target.value)}
          />
          <input
            type="text"
            placeholder="Num2 "
            onChange={(eve) => setnum2(eve.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ConditionRender;
