import React from "react";
import { useHistory } from "react-router-dom";

function MineSiteInput() {
  const history = useHistory();

  const [ores, setOres] = React.useState([1]);
  const [oresName, setOresName] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOresName({ ...oresName, [name]: value });
  };

  const getElem = ores.map((id,key) => (
    <div
      className="row g-3 align-items-center"
      style={{ width: "50%", marginTop: "10px", margin: "auto" }}
      key={key}
    >
      <div className="col-auto">
        <label htmlFor={`ore${id}`}>Name of Ore{id}</label>
      </div>
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          id={`ore${id}`}
          name={`ore${id}`}
          onChange={(e) => handleChange(e)}
          value={oresName[`ore${id}`]}
        />
      </div>
    </div>
  ));

  const addMore = () => {
    let arrLength = ores.length;
    setOres([...ores, arrLength + 1]);
    console.log("oresName==", oresName);
  };

  const handleSubmit = () => {
    console.log("Ores Name == ", oresName);
    history.push("/overview", oresName);
  };
  return (
    <div style={{ margin: "10px" }}>
      {getElem}
      <div
        className="button-group"
        style={{
          width: "50%",
          margin: "50px auto",
          padding: "20px",
          display: "flex",
        }}
      >
        <button
          type="button"
          id="addMoreButton"
          className="btn btn-primary"
          onClick={addMore}
          style={{ marginRight: "10px" }}
        >
          Add More
        </button>
        <button
          type="button"
          id="doneButton"
          className="btn btn-primary"
          onClick={handleSubmit}
          style={{ marginLeft: "10px" }}
        >
          Done Button
        </button>
      </div>
    </div>
  );
}

export default MineSiteInput;
