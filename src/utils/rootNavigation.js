import React from 'react';
const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

// add other navigation functions that you need and export them

export default {
  navigate,
  navigationRef,
};
