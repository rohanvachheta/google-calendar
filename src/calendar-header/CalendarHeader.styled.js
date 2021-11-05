import styled from "styled-components";

export const StyledCalendarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;

  svg {
    display: inline-block;
    fill: currentColor;
  }
`;

export const StyledTitleRoot = styled.div`
  color: #5f6368;
  display: flex;
  flex-direction: row;
  align-items: center;

  min-width: 238px;
`;

export const StyledIconRoot = styled.div`
  border-radius: 50%;
  display: inline-block;
  margin: 0 4px;
  padding: 12px;
  overflow: hidden;
  vertical-align: middle;
  cursor: pointer;
  height: 24px;
  width: 24px;
  min-width: 24px;
  -webkit-user-select: none;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const StyledTitle = styled.span`
  display: inline-block;
  font-family: "Product Sans", Arial, sans-serif;
  font-size: 22px;
  line-height: 24px;
  padding-left: 8px;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
`;
