import styled from 'styled-components';
import { color, typography } from 'styled/utils';

const DateRangePickerContainer = styled.div`
  .PresetDateRangePicker_panel {
    padding: 0 22px 11px;
  }
  .PresetDateRangePicker_button {
    position: relative;
    height: 100%;
    text-align: center;
    background: 0 0;
    border: 2px solid ${color('secondary')};
    color: ${color('secondary')};
    padding: 4px 12px;
    margin-right: 8px;
    line-height: normal;
    overflow: visible;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
  }
  .PresetDateRangePicker_button:active {
    outline: 0;
  }
  .PresetDateRangePicker_button__selected {
    color: #fff;
    background: ${color('secondary')};
  }
  .SingleDatePickerInput {
    display: inline-block;
    background-color: #fff;
  }
  .SingleDatePickerInput__rtl {
    direction: rtl;
  }
  .SingleDatePickerInput__disabled {
    background-color: #f2f2f2;
  }
  .SingleDatePickerInput__block {
    display: block;
  }
  .SingleDatePickerInput__showClearDate {
    padding-right: 30px;
  }
  .SingleDatePickerInput_clearDate {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 5px;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .SingleDatePickerInput_clearDate__default:focus,
  .SingleDatePickerInput_clearDate__default:hover {
    background: #dbdbdb;
    border-radius: 50%;
  }
  .SingleDatePickerInput_clearDate__small {
    padding: 6px;
  }
  .SingleDatePickerInput_clearDate__hide {
    visibility: hidden;
  }
  .SingleDatePickerInput_clearDate_svg {
    fill: #82888a;
    height: 12px;
    width: 15px;
    vertical-align: middle;
  }
  .SingleDatePickerInput_clearDate_svg__small {
    height: 9px;
  }
  .SingleDatePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    margin: 0 5px 0 10px;
  }
  .SingleDatePickerInput_calendarIcon_svg {
    fill: #82888a;
    height: 15px;
    width: 14px;
    vertical-align: middle;
  }
  .SingleDatePicker {
    position: relative;
    display: inline-block;
  }
  .SingleDatePicker__block {
    display: block;
  }
  .SingleDatePicker_picker {
    z-index: 1;
    background-color: #fff;
    position: absolute;
  }
  .SingleDatePicker_picker__rtl {
    direction: rtl;
  }
  .SingleDatePicker_picker__directionLeft {
    left: 0;
  }
  .SingleDatePicker_picker__directionRight {
    right: 0;
  }
  .SingleDatePicker_picker__portal {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .SingleDatePicker_picker__fullScreenPortal {
    background-color: #fff;
  }
  .SingleDatePicker_closeButton {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
  }
  .SingleDatePicker_closeButton:focus,
  .SingleDatePicker_closeButton:hover {
    color: darken(#cacccd, 10%);
    text-decoration: none;
  }
  .SingleDatePicker_closeButton_svg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
  .DayPickerKeyboardShortcuts_buttonReset {
    background: 0 0;
    border: 0;
    border-radius: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    cursor: pointer;
  }
  .DayPickerKeyboardShortcuts_buttonReset:active {
    outline: 0;
  }
  .DayPickerKeyboardShortcuts_show {
    width: 22px;
    position: absolute;
    z-index: 2;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight {
    border-top: 26px solid transparent;
    border-right: 33px solid ${color('secondary')};
    bottom: 0;
    right: 0;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight:hover {
    border-right: 33px solid ${color('core')};
  }
  .DayPickerKeyboardShortcuts_show__topRight {
    border-bottom: 26px solid transparent;
    border-right: 33px solid ${color('core')};
    top: 0;
    right: 0;
  }
  .DayPickerKeyboardShortcuts_show__topRight:hover {
    border-right: 33px solid #008489;
  }
  .DayPickerKeyboardShortcuts_show__topLeft {
    border-bottom: 26px solid transparent;
    border-left: 33px solid ${color('secondary')};
    top: 0;
    left: 0;
  }
  .DayPickerKeyboardShortcuts_show__topLeft:hover {
    border-left: 33px solid #008489;
  }
  .DayPickerKeyboardShortcuts_showSpan {
    color: #fff;
    position: absolute;
  }
  .DayPickerKeyboardShortcuts_showSpan__bottomRight {
    bottom: 0;
    right: -28px;
  }
  .DayPickerKeyboardShortcuts_showSpan__topRight {
    top: 1px;
    right: -28px;
  }
  .DayPickerKeyboardShortcuts_showSpan__topLeft {
    top: 1px;
    left: -28px;
  }
  .DayPickerKeyboardShortcuts_panel {
    overflow: auto;
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    padding: 22px;
    margin: 33px;
  }
  .DayPickerKeyboardShortcuts_title {
    margin: 0;
  }
  .DayPickerKeyboardShortcuts_list {
    list-style: none;
    padding: 0;
  }
  .DayPickerKeyboardShortcuts_close {
    position: absolute;
    right: 22px;
    top: 22px;
    z-index: 2;
  }
  .DayPickerKeyboardShortcuts_close:active {
    outline: 0;
  }
  .DayPickerKeyboardShortcuts_closeSvg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
  .DayPickerKeyboardShortcuts_closeSvg:focus,
  .DayPickerKeyboardShortcuts_closeSvg:hover {
    fill: #82888a;
  }
  .CalendarDay {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    ${typography('read', 3)}
    outline: 0;
    text-align: center;
  }
  .CalendarDay:active {
    outline: 0;
  }
  .CalendarDay__defaultCursor {
    cursor: default;
  }
  .CalendarDay__default {
    border: 1px solid #e4e7e7;
    color: #484848;
    background: #fff;
  }
  .CalendarDay__default:hover {
    background: #e4e7e7;
    border: 1px solid #e4e7e7;
    color: inherit;
  }
  .CalendarDay__hovered_offset {
    background: #f4f5f5;
    border: 1px double #e4e7e7;
    color: inherit;
  }
  .CalendarDay__outside {
    border: 0;
    background: #fff;
    color: #484848;
  }
  .CalendarDay__outside:hover {
    border: 0;
  }
  .CalendarDay__blocked_minimum_nights {
    background: #fff;
    border: 1px solid #eceeee;
    color: #cacccd;
  }
  .CalendarDay__blocked_minimum_nights:active,
  .CalendarDay__blocked_minimum_nights:hover {
    background: #fff;
    color: #cacccd;
  }
  .CalendarDay__highlighted_calendar {
    background: #ffe8bc;
    color: #484848;
  }
  .CalendarDay__highlighted_calendar:active,
  .CalendarDay__highlighted_calendar:hover {
    background: #ffce71;
    color: #484848;
  }
  .CalendarDay__selected_span {
    background: ${color('secondary')};
    border: 1px double ${color('secondary')};
    color: #fff;
  }
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: ${color('secondary')};
    border: 1px double ${color('secondary')};
    color: #fff;
  }
  .CalendarDay__last_in_range,
  .CalendarDay__last_in_range:hover {
    border-style: solid;
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${color('core')};
    border: 1px double ${color('core')};
    color: #fff;
  }
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: ${color('secondary')};
    border: 1px double ${color('secondary')};
    color: ${color('light')};
  }
  .CalendarDay__hovered_span:active {
    background: ${color('tag')};
    border: 1px double ${color('tag')};
    color: #007a87;
  }
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: #cacccd;
    border: 1px solid #cacccd;
    color: #82888a;
  }
  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
    background: #fff;
    border: 1px solid #e4e7e7;
    color: #cacccd;
  }
  .CalendarMonth {
    background: #fff;
    text-align: center;
    vertical-align: top;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .CalendarMonth_table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .CalendarMonth_verticalSpacing {
    border-collapse: separate;
  }
  .CalendarMonth_caption {
    color: #484848;
    text-align: center;
    padding-top: 22px;
    padding-bottom: 37px;
    caption-side: initial;
  }
  .CalendarMonth_caption__verticalScrollable {
    padding-top: 12px;
    padding-bottom: 7px;
  }
  .CalendarMonthGrid {
    background: #fff;
    text-align: left;
    z-index: 0;
  }
  .CalendarMonthGrid__animating {
    z-index: 1;
  }
  .CalendarMonthGrid__horizontal {
    position: absolute;
    left: 9px;
  }
  .CalendarMonthGrid__vertical {
    margin: 0 auto;
  }
  .CalendarMonthGrid__vertical_scrollable {
    margin: 0 auto;
    overflow-y: scroll;
  }
  .CalendarMonthGrid_month__horizontal {
    display: inline-block;
    vertical-align: top;
    min-height: 100%;
  }
  .CalendarMonthGrid_month__hideForAnimation {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }
  .CalendarMonthGrid_month__hidden {
    visibility: hidden;
  }
  .DayPickerNavigation {
    position: relative;
    z-index: 2;
  }
  .DayPickerNavigation__horizontal {
    height: 0;
  }
  .DayPickerNavigation__verticalDefault {
    position: absolute;
    width: 100%;
    height: 52px;
    bottom: 0;
    left: 0;
  }
  .DayPickerNavigation__verticalScrollableDefault {
    position: relative;
  }
  .DayPickerNavigation_button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: 0;
    margin: 0;
  }
  .DayPickerNavigation_button__default {
    border: 1px solid #e4e7e7;
    background-color: #fff;
    color: #757575;
  }
  .DayPickerNavigation_button__default:focus,
  .DayPickerNavigation_button__default:hover {
    border: 1px solid #c4c4c4;
  }
  .DayPickerNavigation_button__default:active {
    background: #f2f2f2;
  }
  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 18px;
    line-height: 0.78;
    border-radius: 3px;
    padding: 6px 9px;
  }
  .DayPickerNavigation_leftButton__horizontalDefault {
    left: 22px;
  }
  .DayPickerNavigation_rightButton__horizontalDefault {
    right: 22px;
  }
  .DayPickerNavigation_button__verticalDefault {
    padding: 5px;
    background: #fff;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    text-align: center;
    height: 100%;
    width: 50%;
  }
  .DayPickerNavigation_nextButton__verticalDefault {
    border-left: 0;
  }
  .DayPickerNavigation_nextButton__verticalScrollableDefault {
    width: 100%;
  }
  .DayPickerNavigation_svg__horizontal {
    height: 19px;
    width: 19px;
    fill: #82888a;
    display: block;
  }
  .DayPickerNavigation_svg__vertical {
    height: 42px;
    width: 42px;
    fill: #484848;
  }
  .DayPicker {
    background: #fff;
    position: relative;
    text-align: left;
  }
  .DayPicker__horizontal {
    background: #fff;
  }
  .DayPicker__verticalScrollable {
    height: 100%;
  }
  .DayPicker__hidden {
    visibility: hidden;
  }
  .DayPicker__withBorder {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }
  .DayPicker_portal__horizontal {
    box-shadow: none;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .DayPicker_portal__vertical {
    position: initial;
  }
  .DayPicker_focusRegion {
    outline: 0;
  }
  .DayPicker_calendarInfo__horizontal,
  .DayPicker_wrapper__horizontal {
    display: inline-block;
    vertical-align: top;
  }
  .DayPicker_weekHeaders {
    position: relative;
  }
  .DayPicker_weekHeaders__horizontal {
    margin-left: 9px;
  }
  .DayPicker_weekHeader {
    color: #757575;
    position: absolute;
    top: 62px;
    z-index: 2;
    text-align: left;
  }
  .DayPicker_weekHeader__vertical {
    left: 50%;
  }
  .DayPicker_weekHeader__verticalScrollable {
    top: 0;
    display: table-row;
    border-bottom: 1px solid #dbdbdb;
    background: #fff;
    margin-left: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
  .DayPicker_weekHeader_ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
  }
  .DayPicker_weekHeader_li {
    display: inline-block;
    text-align: center;
  }
  .DayPicker_transitionContainer {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }
  .DayPicker_transitionContainer__horizontal {
    -webkit-transition: height 0.2s ease-in-out;
    -moz-transition: height 0.2s ease-in-out;
    transition: height 0.2s ease-in-out;
  }
  .DayPicker_transitionContainer__vertical {
    width: 100%;
  }
  .DayPicker_transitionContainer__verticalScrollable {
    padding-top: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y: scroll;
  }
  .DateInput {
    height: 40px;
    margin: 0;
    padding: 0;
    background: #fff;
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: middle;
    > input {
      border: 0;
    }
  }
  .DateInput__small {
    width: 97px;
  }
  .DateInput__block {
    width: 100%;
  }
  .DateInput__disabled {
    background: #f2f2f2;
    color: #dbdbdb;
  }
  .DateInput_input {
    caret-color: ${color('body')};
    font-family: 'Montserrat';
    ${typography('read', 1)}
    line-height: 1;
    height: 40px;
    background-color: #fff;
    width: 100%;
    padding: 0 0 0 16px;
    border-radius: 0;
    border: 1px solid ${color('body')};
    outline: none;
    transition: all 0.15s ease-in-out;
    &::placeholder {
      color: ${color('upper')};
      font: 300 14px 'Montserrat';
      line-height: 20px;
    }
    &::-moz-placeholder {
      line-height: 38px;
    }
    -webkit-appearance: none;
  }
  .DateInput_input_1 {
    padding-left: 0;
  }
  .DateInput_input__small {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.2px;
    padding: 7px 7px 5px;
  }
  .DateInput_input__regular {
    font-weight: auto;
  }
  .DateInput_input__readOnly {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .DateInput_input__focused {
    outline: 0;
    background: #fff;
  }
  .DateInput_input__disabled {
    background: #f2f2f2;
    font-style: italic;
  }
  .DateInput_screenReaderMessage {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .DateInput_fang {
    position: absolute;
    width: 20px;
    height: 10px;
    left: 22px;
    z-index: 2;
  }
  .DateInput_fangShape {
    fill: #fff;
  }
  .DateInput_fangStroke {
    stroke: #dbdbdb;
    fill: transparent;
  }
  .DateRangePickerInput {
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid ${color('black')};
    display: flex;
    flex-direction: row;
    transition: all 0.2s ease-in-out;
    &:focus-within {
      border-bottom: 1px solid ${color('style')};
      transition: all 0.2s ease-in-out;
    }
  }
  .DateRangePickerInput__disabled {
    background: #f2f2f2;
  }
  .DateRangePickerInput__withBorder {
  }
  .DateRangePickerInput__rtl {
    direction: rtl;
  }
  .DateRangePickerInput__block {
    display: block;
  }
  .DateRangePickerInput__showClearDates {
    padding-right: 30px;
  }
  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    color: #484848;
  }
  .DateRangePickerInput_arrow_svg {
    vertical-align: middle;
    fill: #484848;
    height: 24px;
    width: 24px;
  }
  .DateRangePickerInput_clearDates {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px 0 5px;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .DateRangePickerInput_clearDates__small {
    padding: 6px;
  }
  .DateRangePickerInput_clearDates_default:focus,
  .DateRangePickerInput_clearDates_default:hover {
    background: #dbdbdb;
    border-radius: 50%;
  }
  .DateRangePickerInput_clearDates__hide {
    visibility: hidden;
  }
  .DateRangePickerInput_clearDates_svg {
    fill: #82888a;
    height: 12px;
    width: 15px;
    vertical-align: middle;
  }
  .DateRangePickerInput_clearDates_svg__small {
    height: 9px;
  }
  .DateRangePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    margin: 0 5px 0 10px;
  }
  .DateRangePickerInput_calendarIcon_svg {
    fill: #82888a;
    height: 15px;
    width: 14px;
    vertical-align: middle;
  }
  .DateRangePicker {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 100%;
  }
  .DateRangePicker__block {
    display: block;
  }
  .DateRangePicker_picker {
    z-index: 1;
    background-color: #fff;
    position: absolute;
  }
  .DateRangePicker_picker__rtl {
    direction: rtl;
  }
  .DateRangePicker_picker__directionLeft {
    left: 0;
  }
  .DateRangePicker_picker__directionRight {
    right: 0;
  }
  .DateRangePicker_picker__portal {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .DateRangePicker_picker__fullScreenPortal {
    background-color: #fff;
  }
  .DateRangePicker_closeButton {
    background: 0 0;
    border: 0;
    color: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    z-index: 2;
  }
  .DateRangePicker_closeButton:focus,
  .DateRangePicker_closeButton:hover {
    color: darken(#cacccd, 10%);
    text-decoration: none;
  }
  .DateRangePicker_closeButton_svg {
    height: 15px;
    width: 15px;
    fill: #cacccd;
  }
  .DateRangePickerInput__arrow,
  .DateRangePickerInput_arrow_1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    margin-right: 20px;
  }
`;

export default DateRangePickerContainer;
