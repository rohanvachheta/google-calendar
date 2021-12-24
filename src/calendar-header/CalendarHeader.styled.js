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

export const StyledMiddlepanel = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const StyledButton = styled.div`
  background-color: transparent;
  border: 1px solid #dadce0;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 36px;
  margin-right: 12px;
  cursor: pointer;
  padding: 7px 12px 5px 12px;

  &:hover {
    background-color: #f1f3f4;
  }
`;
