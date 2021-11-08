// import { TextField } from '@material-ui/core';
// import React, { Component } from 'react';
// import PropsTypes from 'prop-types';

// class InputField extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     const { form, name, label, disabled } = this.props;

//     return (
//       <div>
//         <TextField fullWidth />
//       </div>
//     );
//   }
// }

// InputField.propTypes = {
//   form: PropsTypes.object.isRequired,
//   name: PropsTypes.string.isRequired,
//   label: PropsTypes.string,
//   disabled: PropsTypes.bool,
// };

// export default InputField;

import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  // const { errors, formState } = form;
  // const hasError = formState?.touched[name] && errors[name] ? true : false; khi cham vao ms bao loi
  const { errors } = form;
  const hasError = errors[name] ? true : false; // khong can cham vao chi can co loi se bao
  // console.log(errors[name], formState[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      margin="normal"
      variant="outlined"
      fullWidth
      label={label}
      disabled={disabled}
      error={hasError}
      helperText={errors[name]?.message}
    ></Controller>
  );
}

export default InputField;
