import React from "react";
import PropTypes from "prop-types";
import {
  StyledButton,
  StyledCalendarHeader,
  StyledIconRoot,
  StyledMiddlepanel,
  StyledTitle,
  StyledTitleRoot,
} from "./CalendarHeader.styled";

const CalendarHeader = (props) => {
  return (
    <StyledCalendarHeader className="flex">
      <StyledTitleRoot>
        <StyledIconRoot>
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </StyledIconRoot>
        <img
          class="gb_tc gb_0d"
          src="//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_5_2x.png#"
          alt=""
          aria-hidden="true"
          height={40}
          width={40}
        ></img>
        <StyledTitle>Calendar</StyledTitle>
      </StyledTitleRoot>
      <div style={{ flex: "1 1 100%", display: "flex", alignItems: "center" }}>
        <StyledMiddlepanel>
          <StyledButton role="button">Today</StyledButton>
        </StyledMiddlepanel>
        <button>&#10092;</button>
        <button style={{ marginLeft: "10px" }}>&#10093;</button>
        <div style={{ marginLeft: "20px" }}> {props.date}</div>
      </div>
      <div>3</div>
    </StyledCalendarHeader>
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.string,
};

export default CalendarHeader;
