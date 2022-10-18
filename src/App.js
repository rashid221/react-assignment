import { useEffect, useState } from "react";

function App() {
  let shows;
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    ).then((result) => {
      result.json().then((resp) => {
        let entries = Object.entries(resp);
        let dat = entries[1];
        let newquery = Object.entries(dat[1]);
        setData(newquery);
      });
    });
  }, []);

  return (
    <>
    <div className="centralised">
      <h1>Table for assignment</h1>
      <table className="back">
        <tbody>
          <tr>
            <th className="hid">Id</th>
            <th>DateTime</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>

          {data?.map((item) => (
            <tr key={item[0]}>
              <td className="hid">
                {(shows = Object.entries(item[1]))}
              </td>

              <td>{item[0]}</td>
              <td> {(shows[0])[1]}</td>
              <td>{(shows[1])[1]}</td>
              <td>{(shows[2])[1]}</td>
              <td>{(shows[3])[1]}</td>
              <td>{(shows[4])[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
