import "./CountryList.scss";
import { CountryItem } from "../CountryItem/CountryItem.jsx";
import { Fragment } from "react";
export const CountryList = ({ allCountries }) => {
  return (
    <Fragment>
      <ul className="list">
        <div className="container">
          <div className="list__inner">
            {allCountries.map((country) => {
              return <CountryItem country={country} />;
            })}
          </div>
        </div>
      </ul>
    </Fragment>
  );
};
