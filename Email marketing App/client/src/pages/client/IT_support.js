import React, { Component } from "react";

import axios from "axios";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDay, getMonth, getYear } from "date-fns";
import range from "lodash/range";

import Nav from "../../components/Nav";

class IT_support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      video: "",
      firstDate: new Date(),
      firstDateEmail: new Date(),
      firstDateEvent: new Date(),
      secondDate: new Date(),
      secondDateEmail: new Date(),
      secondDateEvent: new Date()
    };
  }

  //* Logout function
  handleLogout() {
    sessionStorage.clear();
    window.location.pathname = "/";
  }

  //* Handle changes of the form
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.setState(prev => ({
      ...prev,
      firstDateEmail: moment(prev.firstDate).format("MMMM d, yyyy h:mm A"),
      firstDateEvent: moment(prev.firstDate).format(
        "YYYY-MM-DDTHH[%3A]mm[%3A]ss%2B01[%3A]00"
      ),
      secondDateEmail: moment(prev.secondDate).format("MMMM d, yyyy h:mm A"),
      secondDateEvent: moment(prev.secondDate).format(
        "YYYY-MM-DDTHH[%3A]mm[%3A]ss%2B01[%3A]00"
      )
    }));
    console.log(
      this.state.firstDate,
      this.state.firstDateEmail,
      this.state.firstDateEvent
    );
  };

  //* Handle submitting the data to Backend
  handleSubmit = e => {
    e.preventDefault();
    const URI =
      process.env.NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_URI
        : process.env.REACT_APP_PROD_URI;

    const {
      fullName,
      email,
      video,
      firstDate,
      firstDateEmail,
      firstDateEvent,
      secondDate,
      secondDateEmail,
      secondDateEvent
    } = this.state;

    const client = {
      fullName,
      email,
      video,
      firstDate,
      firstDateEmail,
      firstDateEvent,
      secondDate,
      secondDateEmail,
      secondDateEvent
    };

    axios
      // .post(`${URI}/client/it-support`, client)
      .post("/client/it-support", client)
      .then(() => console.log("Success!"))
      .catch(err => {
        console.error(err);
      });
  };

  //* Create ADD TO CALENDAR Events
  createfirstDateEvent = () => {
    //* Create the .ics URL
    const { firstDate, fullName } = this.state;
    const startDatetime = moment(firstDate).utc();
    const endDatetime = startDatetime.clone().add(3, "hours");
    const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
    let url = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + startDatetime.format("YYYYMMDDTHHmmss") + "Z",
      "DTEND:" + endDatetime.format("YYYYMMDDTHHmmss") + "Z",
      "SUMMARY:" +
        JSON.stringify(fullName).replace(/"/g, "") +
        " - Wartung klein (Assyst A)",
      "DESCRIPTION:Kleiner Serviceumfang, große Sicherheit: Im Rahmen des Service A nehmen unsere Mitarbeiter eine gründliche Prüfung Ihres Fahrzeugs vor. Dauer des gesamten Werkstattbesuchs: ca. 2-3 Std.",
      "LOCATION:Gießener Str. 39 - 45, 51105 Köln",
      // "BEGIN:VALARM",
      // "TRIGGER:-PT15M",
      // "REPEAT:1",
      "DURATION:" + duration,
      // "ACTION:DISPLAY",
      // "DESCRIPTION:Reminder",
      // "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");
    let blob = new Blob([url], { type: "text/calendar;charset=utf-8" });
    if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
      // Open/Save link in IE and Edge
      window.navigator.msSaveBlob(blob, "download.ics");
    } else {
      // Open/Save link in Modern Browsers
      window.open(encodeURI("data:text/calendar;charset=utf8," + url));
    }
  };

  createsecondDateEvent = () => {
    //* Create the .ics URL
    const { secondDate, fullName } = this.state;
    const startDatetime = moment(secondDate).utc();
    const endDatetime = startDatetime.clone().add(4, "hours");
    const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
    let url = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + startDatetime.format("YYYYMMDDTHHmmss") + "Z",
      "DTEND:" + endDatetime.format("YYYYMMDDTHHmmss") + "Z",
      "SUMMARY:" +
        JSON.stringify(fullName).replace(/"/g, "") +
        " - Wartung groß (Assyst B)",
      "DESCRIPTION:Großer Serviceumfang, große Sicherheit: Im Rahmen des Service B wird automatisch der Leistungsumfang eines Assyst A (kleine Inspektion) durchgeführt. Zusätzlich findet unter anderem eine Überprüfung der Bremsen, aller sichtbaren Teile des Motorraums sowie der Fahrzeugunterseite statt. Dauer des gesamten Werkstattbesuchs: ca. 3-4 Std.",
      "LOCATION:Gießener Str. 39 - 45, 51105 Köln",
      // "BEGIN:VALARM",
      // "TRIGGER:-PT15M",
      // "REPEAT:1",
      "DURATION:" + duration,
      // "ACTION:DISPLAY",
      // "DESCRIPTION:Reminder",
      // "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");
    let blob = new Blob([url], { type: "text/calendar;charset=utf-8" });
    if (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)) {
      // Open/Save link in IE and Edge
      window.navigator.msSaveBlob(blob, "download.ics");
    } else {
      // Open/Save link in Modern Browsers
      window.open(encodeURI("data:text/calendar;charset=utf8," + url));
    }
  };

  //* Refresh the page after sending the data
  handleRefresh = () => {
    var delay = 2000; // time in milliseconds
    // Display message
    document.getElementById("message").innerHTML =
      "Client was created successfully! Email has been sent.";
    setTimeout(function() {
      window.location.reload(false);
    }, delay);
  };

  render() {
    // Datepicker
    const years = range(2021, getYear(new Date()) + 50, 1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const isWeekday = date => {
      const day = getDay(date);
      return day !== 0 && day !== 7;
    };
    const Custom = ({
      date,
      changeYear,
      changeMonth,
      decreaseMonth,
      increaseMonth,
      prevMonthButtonDisabled,
      nextMonthButtonDisabled
    }) => (
      <div
        style={{
          margin: 10,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          {"<"}
        </button>
        <select
          value={getYear(date)}
          onChange={({ target: { value } }) => changeYear(value)}
        >
          {years.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={months[getMonth(date)]}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
        >
          {months.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          {">"}
        </button>
      </div>
    );
    return (
      <div id="Client-page">
        <Nav />

        {/* Client page */}
        <h1 className="tracking-in-expand">smart</h1>

        {/* Logout */}
        <div id="Logout">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Add client form */}
        <section id="client">
          <form className="row input-container" onSubmit={this.handleSubmit}>
            <div className="form-input">
              <div className="styled-input">
                <input
                  type="text"
                  name="fullName"
                  onChange={this.handleInputChange}
                  required
                />
                <label>Name</label>
              </div>
            </div>
            <div className="form-input">
              <div className="styled-input">
                <input
                  type="text"
                  name="email"
                  onChange={this.handleInputChange}
                  required
                />
                <label>Email</label>
              </div>
            </div>
            <div className="form-input">
              <div className="styled-input">
                <input
                  type="text"
                  name="video"
                  onChange={this.handleInputChange}
                  required
                />
                <label>Link to Video</label>
              </div>
            </div>

            {/* Termine */}
            <h3>Dates</h3>
            <div className="form-input">
              <div className="styled-input-d">
                <DatePicker
                  className="datepicker"
                  type="date"
                  name="firstDate"
                  selected={this.state.firstDate}
                  onChange={firstDate =>
                    this.handleInputChange({
                      target: {
                        value: firstDate,
                        name: "firstDate"
                      }
                    })
                  }
                  withPortal
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                  filterDate={isWeekday}
                  popperPlacement="bottom"
                  renderCustomHeader={Custom}
                  readonly
                  required
                />
                <label>Your first date</label>
              </div>
              <button
                className="atc-dropdown-title"
                onClick={this.createfirstDateEvent}
              >
                Add to Calendar
              </button>
            </div>
            <div className="form-input">
              <div className="styled-input-d">
                <DatePicker
                  className="datepicker"
                  type="date"
                  name="secondDate"
                  selected={this.state.secondDate}
                  onChange={secondDate =>
                    this.handleInputChange({
                      target: {
                        value: secondDate,
                        name: "secondDate"
                      }
                    })
                  }
                  withPortal
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                  filterDate={isWeekday}
                  popperPlacement="bottom"
                  renderCustomHeader={Custom}
                  readonly
                  required
                />
                <label>Your second date</label>
              </div>
              <button
                className="atc-dropdown-title"
                onClick={this.createsecondDateEvent}
              >
                Add to Calendar
              </button>
            </div>

            <div id="Button">
              <button
                onClick={this.handleRefresh}
                className="btn btn-secondary"
                type="submit"
              >
                <i class="fa fa-paper-plane" />
                SEND
              </button>
            </div>

            {/* Message */}
            <div id="message"></div>
          </form>
        </section>
      </div>
    );
  }
}

export default IT_support;
