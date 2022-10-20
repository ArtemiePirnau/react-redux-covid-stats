import "./App.scss";
import { CountryList } from "../CountryList/CountryList.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setCovidState } from "../../redux/reducer/covidSlice";
import response from "../../redux/services/shazamCore";

export const App = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.covid.allCountries);

  response.then((data) => dispatch(setCovidState(data.data.data.covid19Stats)));
  return <CountryList allCountries={allCountries} />;
};
