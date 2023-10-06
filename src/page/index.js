import { useEffect, useState } from "react";
import object from "../data/data.json";
import { Link } from "react-router-dom"; 
import "./style.css";

const Page = () => {
  const [newdata, setNewData] = useState([]);

  useEffect(() => {
    setNewData(object);
  }, []);

  const sortedData = newdata.slice().sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    if (a.dial_code < b.dial_code) return -1;
    if (a.dial_code > b.dial_code) return 1;
    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  return (
    <div className="table-container">
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Dial_code</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>
                <Link to={`/example/${item.name}`}>{item.name}</Link>
              </td>
              <td>
                <Link to={`/example/${item.dial_code}`}>{item.dial_code}</Link>
              </td>
              <td>{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
