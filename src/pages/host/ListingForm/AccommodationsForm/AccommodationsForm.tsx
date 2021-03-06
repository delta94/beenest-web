import * as React from 'react';
import { Field, ErrorMessage } from 'formik';

import { ListingField } from 'networking/listings';
import Checkbox from 'components/Checkbox';
import ErrorMessageWrapper from 'components/ErrorMessageWrapper';
import InputLabel from 'components/InputLabel';
import InputWrapper from 'components/InputWrapper';
import NumberInput from 'components/NumberInput';
import Textarea from 'components/Textarea';
import { TextareaEvent } from 'components/Textarea/Textarea';
import { stringToArray, arrayToString } from 'utils/formatter';
import { PhotoUploader, Photo } from 'components/PhotoUploader';

const AccommodationsForm = (props: any): JSX.Element => {
  const { setFocus, setFieldTouched, setFieldValue, values } = props;
  const StyledErrorMessage = (props: { name: string }) => (
    <ErrorMessageWrapper>
      {props.name && <ErrorMessage {...props} />}
    </ErrorMessageWrapper>
  );
  return (
    <>
      <div className="form-item">
        <InputLabel htmlFor={ListingField.SLEEPING_ARRANGEMENT} subLabel="(required)">Sleeping Arrangement</InputLabel>
        <InputWrapper>
          <Field
            name={ListingField.SLEEPING_ARRANGEMENT}
            onFocus={() => setFocus(ListingField.SLEEPING_ARRANGEMENT)}
            placeholder="1 King, 2 Queens"
            type="text" />
        </InputWrapper>
        <StyledErrorMessage name={ListingField.SLEEPING_ARRANGEMENT} />
      </div>

      <div className="form-item">
        <div className="input-number-container">
          <InputLabel>Number of Bedrooms</InputLabel>
          <NumberInput
            value={values.numberOfBedrooms}
            max={50}
            min={1}
            onChange={(value: number) => {
              setFieldValue(ListingField.NUMBER_OF_BEDROOMS, value);
              setFieldTouched(ListingField.NUMBER_OF_BEDROOMS);
              setFocus(ListingField.NUMBER_OF_BEDROOMS);
            }}
          />
        </div>
      </div>

      <div className="form-item">
        <div className="input-number-container">
          <InputLabel>Number of Bathrooms</InputLabel>
          <NumberInput
            value={values.numberOfBathrooms}
            max={50}
            min={0}
            onChange={(value: number) => {
              setFieldValue(ListingField.NUMBER_OF_BATHROOMS, value);
              setFieldTouched(ListingField.NUMBER_OF_BATHROOMS);
              setFocus(ListingField.NUMBER_OF_BATHROOMS);
            }}
            step={0.5}
          />
        </div>
      </div>

      <div className="form-item">
        <Checkbox
          checked={isSharedBathroom(values.sharedBathroom)}
          onChange={() => {
            const value = isSharedBathroom(values.sharedBathroom) ? 'No' : 'Yes';
            setFieldValue(ListingField.SHARED_BATHROOM, value);
            setFieldTouched(ListingField.SHARED_BATHROOM, true);
            setFocus(ListingField.SHARED_BATHROOM);
          }}>
          Shared Bathroom
        </Checkbox>
      </div>

      <div className="form-item" onClick={() => setFocus(ListingField.AMENITIES)}>
        <InputLabel htmlFor={ListingField.AMENITIES} subLabel="(required, separate by comma)">Amenities</InputLabel>
        <Textarea
          name={ListingField.AMENITIES}
          onBlur={() => setFieldTouched(ListingField.AMENITIES, true)}
          onFocus={() => setFocus(ListingField.AMENITIES)}
          onChange={(event: TextareaEvent) => {
            setFieldValue(ListingField.AMENITIES, stringToArray(event.target.value));
          }}
          value={arrayToString(values.amenities)}
          placeholder="Wifi, Towels, Soap, TV, Coffee..." />
          <StyledErrorMessage name={ListingField.AMENITIES} />
      </div>

      <div className="form-item short">
        <InputLabel htmlFor={ListingField.WIFI} subLabel="(in Mbps)">Wifi Speed</InputLabel>
        <InputWrapper>
          <Field
            name={ListingField.WIFI}
            onFocus={() => setFocus(ListingField.WIFI)}
            onChange={(event: React.FormEvent<HTMLInputElement>) => {
              setFieldTouched(ListingField.WIFI, true);
              setFieldValue(ListingField.WIFI, { ...values.wifi, mbps: event.currentTarget.value || 0 });
            }}
            placeholder="240"
            type="number"
            value={values.wifi.mbps || ''} />
        </InputWrapper>
        <StyledErrorMessage name={`${ListingField.WIFI}.mbps`} />
      </div>

      <div className="form-item photo" onMouseEnter={() => setFocus(ListingField.WIFI)}>
        <InputLabel htmlFor={ListingField.WIFI} subLabel="(recommended)">Wifi Screenshot</InputLabel>
        <PhotoUploader
          initialPhotos={values.wifi && values.wifi.photoUrl ? [{ url: values.wifi.photoUrl }] : []}
          maxFiles={1}
          onClick={() => setFocus(ListingField.WIFI)}
          onPhotosUpdated={(photo: Photo[]) => {
            setFieldTouched(ListingField.WIFI, true);
            setFieldValue(ListingField.WIFI, { ...values.wifi, photoUrl: photo[0] ? photo[0].url : '' });
          }} />
        <StyledErrorMessage name={`${ListingField.WIFI}.photo`} />
      </div>
    </>
  );
};

export default AccommodationsForm;

// Temporary fix until sharedBathroom is changed into a boolean
function isSharedBathroom(input: string): boolean {
  if (!input) return false;
  if (parseInt(input) && (parseInt(input) !== 0)) {
    return true;
  }
  const normalizedInput = input.toLowerCase();
  return normalizedInput === 'yes';
}
