import React, { useEffect, useState } from "react";
import style from "../Css/project-2.css";

export default function Project2() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluidbg aan">
        <div className="container nna">
          <h5 className="">
            <label></label>LIVE
          </h5>
          <h1>COVID-19 CORONAVIRUS TRACKER</h1>

          <div className="row mt-5">
            <li className="card col-md-4  mt-3">
              <div className="card-main bg-warning p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>OUR</span>COUNTRY
                  </p>
                  <p className="card-total card-small">INDIA</p>
                </div>
              </div>
            </li>
            <li className="card col-md-4  mt-3">
              <div className="card-main bg-info p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>TOTAL</span>RECOVERED
                  </p>
                  <p className="card-total card-small">{data.recovered}</p>
                </div>
              </div>
            </li>
            <li className="card col-md-4  mt-3">
              <div className="card-main bg-secondary p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>TOTAL</span>CONFIRMED
                  </p>
                  <p className="card-total card-small">{data.confirmed}</p>
                </div>
              </div>
            </li>
            <li className="card col-md-4  mt-3 ">
              <div className="card-main bg-success p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>TOTAL</span>ACTIVE
                  </p>
                  <p className="card-total card-small">{data.active}</p>
                </div>
              </div>
            </li>
            <li className="card col-md-4  mt-3 ">
              <div className="card-main bg-primary p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>LAST</span>UPDATED
                  </p>
                  <p className="card-total card-small">
                    {data.lastupdatedtime}
                  </p>
                </div>
              </div>
            </li>
            <li className="card col-md-4  mt-3 ">
              <div className="card-main bg-danger p-4">
                <div className="card-inner">
                  <p className="card-name">
                    <span>TOTAL</span>DEATHS
                  </p>
                  <p className="card-total card-small">{data.deaths}</p>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
