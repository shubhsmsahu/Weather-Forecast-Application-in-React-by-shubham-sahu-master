import React from "react";

const Table = ({ forecastData, date }) => {
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Condition</th>
            <th scope="col">Min-Temprature</th>
            <th scope="col">Max-Temprature</th>
          </tr>
        </thead>
        <tbody>
          {forecastData.map((rowData, index) => {
            if (date === rowData.date && date !== "All-Dates") {
              return (
                <tr key={index} className="thead-light">
                  <th scope="row">{index + 1}</th>
                  <td>{rowData.date}</td>
                  <td>
                    {rowData.day.condition.text}(
                    <img
                      src={rowData.day.condition.icon}
                      style={{ width: "20px", height: "20px" }}
                    />
                    )
                  </td>
                  <td>{rowData.day.mintemp_c}</td>
                  <td>{rowData.day.maxtemp_c}</td>
                </tr>
              );
            } else if (date === "All-Dates") {
              return (
                <tr key={index} className="thead-light">
                  <th scope="row">{index + 1}</th>
                  <td>{rowData.date}</td>
                  <td>
                    {rowData.day.condition.text}(
                    <img
                      src={rowData.day.condition.icon}
                      style={{ width: "20px", height: "20px" }}
                    />
                    )
                  </td>
                  <td>{rowData.day.mintemp_c}</td>
                  <td>{rowData.day.maxtemp_c}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
