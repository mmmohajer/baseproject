import React, { useState } from 'react';
import cx from 'classnames';
import dayjs from 'dayjs';
import { Div, Form } from 'basedesign-iswad';

import TextBox from '@/baseComponents/TextBox';
import DatePicker from '@/baseComponents/DatePicker';
import ImagePicker from '@/baseComponents/ImagePicker';
import Button from '@/baseComponents/Button';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedDate, setSubmittedDate] = useState(new Date());
  const [profilePhoto, setProfilePhoto] = useState('');

  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [submittedDateErrorMessage, setSubmittedDateErrorMessage] = useState('');
  const [profilePhotoErrorMessage, setProfilePhotoErrorMessage] = useState('');

  const toBeValidatedFields = [];

  const customValidations = () => {
    let validated = true;
    return validated;
  };

  const submitHandler = (e) => {
    if (customValidations()) {
      console.log(name);
    }
  };

  return (
    <>
      <Div className={cx('p1 width-per-90 flex--wrap', styles.card)}>
        <Form
          className={cx('width-per-100 bgWhite ml-auto mr-auto br-all-solid-1 p2 br-rad-px-10')}
          onSubmit={submitHandler}
          toBeValidatedFields={toBeValidatedFields}
          id="testForm">
          <TextBox
            isRequired
            type="text"
            labelText="Name"
            val={name}
            setVal={setName}
            errorMessage={nameErrorMessage}
            errorHandler={setNameErrorMessage}
            name="name"
            id="nameFieldHomePage"
          />
          <TextBox
            isRequired
            type="time"
            labelText="Email"
            val={email}
            setVal={setEmail}
            errorMessage={emailErrorMessage}
            errorHandler={setEmailErrorMessage}
            name="email"
            id="emailFieldHomePage"
          />
          <DatePicker
            labelText="Birth Date"
            isRequired
            chosenDate={submittedDate}
            setChosenDate={setSubmittedDate}
            errorMessage={submittedDateErrorMessage}
            errorHandler={setSubmittedDateErrorMessage}
            showTimeSelect={true}
            showTimeSelectOnly={false}
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="Time"
            className=""
          />
          <ImagePicker
            labelText="Photo"
            isRequired
            file={profilePhoto}
            setFile={setProfilePhoto}
            errorMessage={profilePhotoErrorMessage}
            errorHandler={setProfilePhotoErrorMessage}
            id="profilePhotoFieldHomePage"
            hasCropper={true}
            hasResizer={true}
            maxWidth={200}
          />
          <Button type="submit" id="testFormSubmit">
            Submit
          </Button>
        </Form>
      </Div>
    </>
  );
};

export default ContactForm;
