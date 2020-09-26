// SurveyField contains logic to render a single
// label and text input
import React from 'react';

// destructuring, pull input off the props object
// ...input pull off all properties and keys
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontSize: '16px' }}>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} autoComplete="off" />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
