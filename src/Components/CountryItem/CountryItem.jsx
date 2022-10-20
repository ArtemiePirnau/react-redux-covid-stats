import "./CountryItem.scss";

export const CountryItem = ({ country }) => {
  return (
    <li className="country__item">
      <span className="country__name">{country.country}</span>
      <div className="country__info">
        <p className="country__name">{country.confirmed}</p>
        <p className="country__name">{country.deaths}</p>
        <p className="country__lastupdate">
          Last update was {country.lastUpdate}
        </p>
        <p>Province : {country.province || "No Province"}</p>
      </div>
    </li>
  );
};
