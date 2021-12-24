import React, { useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import CalendarHeader from "./calendar-header/CalendarHeader.component";

// moment get week days

// moment().startOf('month').format('d');
// friday 5th

// moment total day for this month
// moment().daysInMonth();

function App() {
  const days = [];

  const [date, setViewDate] = useState(moment());

  const weekDays = moment.localeData("en").weekdays();

  let startCount = parseInt(moment(date).startOf("month").format("d"));

  const firstDayOfMonth = moment(date).startOf("month").format("MMM DD YYYY");

  const startDate = moment(firstDayOfMonth).subtract(startCount, "days");

  const totalDays = moment(date).daysInMonth() + startCount;
  const totalWeeksToShow = totalDays + (7 - (totalDays % 7));

  for (let i = 0; i < totalWeeksToShow; i++) {
    days.push(moment(startDate).add(i, "days"));
  }

  const handleBack = () => {
    setViewDate(moment(date).subtract(1, "month"));
  };

  const handleNext = () => {
    setViewDate(moment(date).add(1, "month"));
  };

  const handleToday = () => {
    setViewDate(moment());
  };

  // print weekdays and write with grid item
  return (
    <motion.div style={{ padding: "8px" }}>
      <CalendarHeader date={moment(date).format("MMMM YYYY")} />
      <div>
        <button onClick={handleToday}>today</button>
      </div>
      <div className="flex">
        <div className="side-bar">
          <div>
            <button onClick={handleBack}>back</button>
            <button onClick={handleNext}>forward</button>
          </div>
          <div>{moment(date).format("MMMM YYYY")}</div>
          <motion.div className="small-grid">
            {weekDays.map((day, index) => (
              <div className="grid-item" key={index}>
                {day.slice(0, 1)}
              </div>
            ))}

            {days.map((day, index) => (
              <div className="grid-item" key={index}>
                {day.format("DD")}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid-weekDays"
          style={{ opacity: 0 }}
        >
          {weekDays.map((day, index) => (
            <div className="grid-item" key={index}>
              {day}
            </div>
          ))}
          {days.map((day, index) => {
            console.log({ day: day.format("D") });
            return (
              <div className="grid-item" key={index}>
                {day.format("D") === "1"
                  ? day.format("DD dddd")
                  : day.format("D")}
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
