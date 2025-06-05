import React, { useEffect, useState, useRef } from "react";
import AirPortData from "@/utils/AirPortData";

const From = ({ setArrival, setCountryCode }) => {
  const [active, setActive] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [select, setSelectValue] = useState({});
  const [visible, setVisibleValue] = useState(0);
  const [airportName, setAirportName] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [cityName, setCityName] = useState("");
  const [disableCity, setDisableCity] = useState(false);
  const [state, setState] = useState({ data: [], loading: false });
  const { data, loading } = state;
  const citybox = useRef();

  const changeCity = (e) => {
    clickCity();
    const arr = e.target.value.split(" ");
    const formattedInput = arr
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setInputValue(formattedInput);
    setVisibleValue(1);
  };

  const AirportFilter = AirPortData.filter(
    (item) => item.countryCode === "USD"
  );

  const fetchAPI = () => {
    setState({ data: [], loading: true });
    setState({ data: AirportFilter, loading: false });
  };

  const filterdData = inputValue
    ? AirPortData.filter((item) => {
        const itemData = item.airportName;
        const airportCode = item.airportCode;
        const cityName = item.cityName;
        const countryName = item.countryName;
        const textData = inputValue;
        return (
          airportCode.indexOf(textData.toUpperCase()) > -1 ||
          itemData.indexOf(textData) > -1 ||
          cityName.indexOf(textData) > -1 ||
          countryName.indexOf(textData) > -1
        );
      })
    : data;

  const airportData = (item) => {
    setSelectValue(item);
    setCountryCode(item.countryCode);
    setArrival(item.airportCode);
    setVisibleValue(0);
    setActive("active");
    setAirportName(item.airportName);
    setCityName(item.cityName);
    setAirportCode(item.airportCode);
  };

  const closeWithFocus = () => {
    citybox.current.focus();
    citybox.current.value = "";
    setSelectValue({});
    setInputValue("");
    setActive("");
  };

  const clickCity = () => {
    document
      .querySelectorAll(".menuflitem-6")
      .forEach((el) => (el.style.display = "block"));
    document
      .querySelectorAll(
        ".menuflitem-1,.menuflitem-2,.menuflitem-3,.menuflitem-5,.menuflitemb-4"
      )
      .forEach((el) => (el.style.display = "none"));
  };

  const clickBlur = () => {
    setDisableCity(inputValue?.length !== 0);
  };

  useEffect(() => {
    fetchAPI();
    setInputValue("");
  }, []);

  const documentoutside = (e) => {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  };

  return (
    <>
      <div>
        <div>
          <div className={`${"input-group "}`}>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => changeCity(e)}
                onFocus={(e) => clickCity()}
                onBlur={(e) => clickBlur()}
              />
            </div>
            <input
              type="text"
              id="to-selecteds"
              className="form-control"
              value={select ? select.airportName : ""}
              autoComplete="off"
              placeholder="Country, City or Airport"
              ref={citybox}
              onChange={(e) => changeCity(e)}
              onFocus={(e) => clickCity()}
              onBlur={(e) => clickBlur()}
              required
            />
          </div>
        </div>
      </div>

      {visible === 1 && (
        <ul
          role="listbox"
          className="menuflitem-6 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded w-100"
          style={{
            maxWidth: "40%",
            overflow: "auto",
            maxHeight: "330px",
            padding: "8px",
            display: "block",
            position: "absolute",
          }}
        >
          {filterdData.map((item, i) => (
            <div
              key={i}
              className="dataItem d-flex w-full px-2 py-1 text-left reset-pointer"
              onClick={() => airportData(item)}
            >
              <div className="flex-grow-1 pr-2 text-left">
                {item.airportName + "," + item.cityName}
              </div>
              <span className="float-right shadow foot px-4 rounded-xl bg-danger text-white">
                {item.airportCode}
              </span>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default From;
