import * as React from 'react';

import InputLabel from 'shared/InputLabel';
import SelectBoxWrapper from 'shared/SelectBoxWrapper';
import Svg from 'shared/Svg';
import Textarea from 'shared/Textarea';
import { TextareaEvent } from 'shared/Textarea/Textarea';
import timeOptions from 'utils/timeOptions';
import ErrorMessageWrapper from 'shared/ErrorMessageWrapper';
import { ErrorMessage } from 'formik';

const CheckinDetailsForm = (props: any): JSX.Element => {
  const { setFieldTouched, setFieldValue, values } = props;
  const StyledErrorMessage = (props: { name: string }) => (
    <ErrorMessageWrapper>
      {props.name && <ErrorMessage {...props} />}
    </ErrorMessageWrapper>
  );
  return (

    <>
      <div className="form-item">
        <InputLabel htmlFor="from" subLabel="(From)">Check-in</InputLabel>
        <SelectBoxWrapper suffixSize="tiny">
          <select
            id="from"
            name="from"
            value={values.checkInTime.from}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFieldTouched('checkInTime', true);
              setFieldValue('checkInTime', { ...values.checkInTime, from: event.target.value });
            }}>
            {timeOptions.map(
              time => <option key={time} value={time}>{time}</option>
            )}
          </select>
          <label htmlFor="from">
            <Svg className="suffix" src="utils/carat-down" />
          </label>
        </SelectBoxWrapper>
      </div>

      <div className="form-item">
        <InputLabel htmlFor="to" subLabel="(To)">Check-in</InputLabel>
        <SelectBoxWrapper suffixSize="tiny">
          <select
            id="to"
            name="to"
            value={values.checkInTime.to}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFieldTouched('checkInTime', true);
              setFieldValue('checkInTime', { ...values.checkInTime, to: event.target.value })
            }}>
            {timeOptions.map(
              time => <option key={time} value={time}>{time}</option>
            )}
          </select>
          <label htmlFor="to">
            <Svg className="suffix" src="utils/carat-down" />
          </label>
        </SelectBoxWrapper>
        <StyledErrorMessage name="checkInTime" />
      </div>

      <div className="form-item">
        <InputLabel htmlFor="checkOutTime" subLabel="(Before)">Check-out</InputLabel>
        <SelectBoxWrapper suffixSize="tiny">
          <select
            id="checkOutTime"
            name="checkOutTime"
            value={values.checkOutTime}
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setFieldValue('checkOutTime', event.target.value)}>
            {timeOptions.map(
              time => <option key={time} value={time}>{time}</option>
            )}
          </select>
          <label htmlFor="checkOutTime">
            <Svg className="suffix" src="utils/carat-down" />
          </label>
        </SelectBoxWrapper>
      </div>

      <div className="form-item check-in-details">
        <InputLabel htmlFor="houseRules" subLabel="(required)">House Rules</InputLabel>
        <Textarea
          html
          name="houseRules"
          onBlur={() => setFieldTouched('houseRules', true)}
          onChange={(event: TextareaEvent) => {
            setFieldValue('houseRules', event.target.value);
          }}
          value={values.houseRules}
          placeholder="Let your guests know about quiet hours, pets, etc." />
        <StyledErrorMessage name="houseRules" />
      </div>
    </>
  );
}

export default CheckinDetailsForm;
