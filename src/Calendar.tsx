import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import { LayoutProps } from "styled-system";
import * as Styled from "./style";

interface ICalendarProps extends CalendarProps, LayoutProps {}

const CustomCalendar: React.FC<ICalendarProps> = ({
  width,
  minWidth,
  maxWidth,
  ...props
}) => {
  const today = new Date();

  return (
    <Styled.CalendarContainer
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
    >
      <Calendar minDate={today} {...props} />
    </Styled.CalendarContainer>
  );
};

export default CustomCalendar;
