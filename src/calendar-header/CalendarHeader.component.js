import React from "react";
import PropTypes from "prop-types";
import {
  StyledCalendarHeader,
  StyledIconRoot,
  StyledTitle,
  StyledTitleRoot,
} from "./CalendarHeader.styled";

// change props
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
          srcset="//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_5_2x.png 2x ,//ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_5_2x.png# 1x"
          alt=""
          aria-hidden="true"
          height={40}
          width={40}
        ></img>
        <StyledTitle>Calendar</StyledTitle>
      </StyledTitleRoot>
      <div>2</div>
      <div>3</div>
    </StyledCalendarHeader>
  );
};

CalendarHeader.propTypes = {};

export default CalendarHeader;
