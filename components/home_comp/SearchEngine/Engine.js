// import { useState } from "react";
// import { addDays } from "date-fns";
// import * as React from "react";
// import animationData from "../../../lottie/97203-loader.json";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { useRouter } from "next/router";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import moment from "moment";
// // import oneway_api from "../API/Flights_Results/oneway_api";
// import Passanger from "./Passengar";
// import Class from "./Class";
// import From from "./From";
// import To from "./To";

// export default function Engine(props) {
//   const router = useRouter();
// const [state, setState] = useState([
//   {
//     startDate: new Date(),
//     endDate: addDays(new Date(), 7),
//     key: "selection",
//   },
// ]);
//   const [resturnDate, setreturnd] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [startDate, setstartDate] = useState(state[0].startDate);
//   const [endDate, setendDate] = useState(state[0].endDate);
//   const [departure, setdeparture] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [classe, setclasse] = useState(1);
//   const [travelleradult, settravelleradult] = useState(1);
//   const [travellerchildren, settravellerchildren] = useState(0);
//   const [travellerInfant, settravellerInfant] = useState(0);
//   const [nameofclass, setnameofclass] = useState("ECONOMY");
//   const [tripType, setTripType] = useState(1);
//   const [CountryCode, setCountryCode] = useState("");
//   const [ArCountryCode, setArCountryCode] = useState("");
//   const [openTab, setOpenTab] = useState(1);
//   const [oneWay, setOneway] = useState(1);
//   const [twoWay, setTwoway] = useState(2);
//   const [valueChange, setValueChange] = useState(false);
//   const [errorState, setErrorState] = useState("");
//   const [valueDateReturn, onChangeReturn] = useState(new Date());
//   const [isLoading, setIsLoading] = useState(false);

//   const year = moment().add(5, "months").format("MM/DD/YYYY");

//   function closeModal() {
//     setIsOpen(false);
//   }
//   function setdateReturn() {
//     setreturnd(true);
//   }
//   function openModal() {
//     setIsOpen(true);
//   }

//   function setdate() {
//     setIsOpen(false);
//     setstartDate(state[0].startDate);
//     setendDate(state[0].endDate);
//   }

//   const startDateFormat = moment(state[0].startDate, "YYYY-MM-DD").format(
//     "YYYY-MM-DD"
//   );

//   const startDateFormat2 = moment(state[0].startDate).format("YYYY-MM-DD");

//   const endDateFormat = moment(state[0].endDate, "YYYY-MM-DD").format(
//     "YYYY-MM-DD"
//   );

//   const endDateFormat2 = moment(state[0].endDate).format("YYYY-MM-DD");

//   const startDates12 =
//     startDateFormat === "Invalid date" ? startDateFormat2 : startDateFormat;

//   const endDates34 =
//     endDateFormat === "Invalid date" ? endDateFormat2 : endDateFormat;

//   const ChangeDateColumn = () => {
//     setTripType(1);
//     setValueChange(false);
//   };
//   const ShowDateChange = () => {
//     setValueChange(true);
//     setTripType(2);
//   };

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   //   const searchFlight = () => {
//   //     oneway_api(
//   //       travelleradult,
//   //       travellerchildren,
//   //       travellerInfant,
//   //       departure,
//   //       arrival,
//   //       classe,
//   //       tripType,
//   //       startDateFormat,
//   //       endDateFormat,
//   //       setIsLoading,
//   //       isLoading,
//   //       router
//   //     );
//   //   };

//   const handleOptionChange = (value) => {
//     setTripType(value);
//   };
//   return (
//     <Container className="search-container">
//       <Col>
//         <Row>
//           <Col md={3}>
//             <span className="text-white px-2 py-2">
//               <input
//                 type="radio"
//                 id="oneWay"
//                 checked={tripType === "1" || tripType === 1}
//                 onChange={() => handleOptionChange(1)}
//               />
//               <label htmlFor="oneWay" className="px-1">
//                 One way
//               </label>
//             </span>
//             <span className="text-white px-2 py-2">
//               {" "}
//               <input
//                 type="radio"
//                 id="twoWay"
//                 checked={tripType === "2" || tripType === 2}
//                 onChange={() => handleOptionChange(2)}
//               />
//               <label htmlFor="twoWay" className="px-1">
//                 Two way
//               </label>
//             </span>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <label className="form-label d-block">From</label>
//             <From setArrival={setArrival} setCountryCode={setCountryCode} />
//           </Col>

//           <Col md={4}>
//             <label className="form-label d-block">To</label>
//             <To
//               setDeparture={setdeparture}
//               setArCountryCode={setArCountryCode}
//             />
//           </Col>

//           <Col md={4}>
//             <label className="form-label d-block">Departure</label>
//             <div className="search-engine-in se-pd border-gray-800">
//               <div className="input-group">
//                 <span className="input-group-text align-items-center justify-content-center">
//                   <span className="block truncate text-sm text-black py-1 font-sans font-bold">
//                     <i className="fa-solid fa-calendar-days" />
//                   </span>
//                 </span>
//                 <input
//                   type="text"
//                   autoComplete="off"
//                   minDate={moment().toDate()}
//                   value={startDate.toLocaleDateString()}
//                   onClick={openModal}
//                   className="form-control"
//                   readOnly
//                 />
//               </div>
//             </div>
//           </Col>
//           {tripType === 2 && (
//             <Col md={4}>
//               <label className="form-label d-block">Return</label>
//               <div className="search-engine-in se-pd border-gray-800">
//                 <div className="input-group">
//                   <span className="input-group-text align-items-center justify-content-center">
//                     <span className="block truncate text-sm text-black py-1 font-sans font-bold">
//                       <i className="fa-solid fa-calendar-days" />
//                     </span>
//                   </span>
//                   <input
//                     type="text"
//                     autoComplete="off"
//                     minDate={moment().toDate()}
//                     value={endDate.toLocaleDateString()}
//                     onClick={openModal}
//                     className="form-control"
//                     readOnly
//                   />
//                 </div>
//               </div>
//             </Col>
//           )}

//           <Col md={tripType === 1 ? 4 : 3}>
//             <label className="form-label d-block">Return</label>
//             <Class setclasse={setclasse} setnameofclassName={setnameofclass} />
//           </Col>
//           <Col md={tripType === 1 ? 4 : 3}>
//             <label className="form-label d-block">Return</label>
//             <Passanger
//               settravelleradult={settravelleradult}
//               settravellerchildren={settravellerchildren}
//               settravellerInfant={settravellerInfant}
//             />
//           </Col>
//           <Col
//             md={2}
//             style={{
//               justifyContent: "center",
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <span className="search-btn" onClick={(e) => searchFlight(e)}>
//               Search Flights
//             </span>
//           </Col>
//         </Row>
//       </Col>

//      //           </div>
//         </Dialog>
//       </Transition>
//     </Container>
//   );
// }
import { Dialog, Transition } from "@headlessui/react";
import { addDays } from "date-fns";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Typewriter from "typewriter-effect";
const Engine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tripType, setTripType] = useState(1);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [startDate, setstartDate] = useState(state[0].startDate);
  const [endDate, setendDate] = useState(state[0].endDate);
  function closeModal() {
    setIsOpen(false);
  }
  function setdateReturn() {
    setreturnd(true);
  }
  function openModal() {
    setIsOpen(true);
  }

  function setdate() {
    setIsOpen(false);
    setstartDate(state[0].startDate);
    setendDate(state[0].endDate);
  }

  const handleOptionChange = (value) => {
    setTripType(value);
  };
  return (
    <>
      <Container fluid className="row-position-relative">
        <span>
          <h1 className="text-center text-white">
            <Typewriter
              options={{
                strings: [
                  "Finding best flight reservation with cheap fare?",
                  "Your gateway to the world's best destinations.",
                  "We ensure the best travel experience.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className="text-white">
            <Typewriter
              options={{
                strings: ["BOOK EASY VACATION"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </span>

        <Row>
                <Col>
                    
                </Col>
        </Row>
      </Container>
    </>
  );
};

export default Engine;
