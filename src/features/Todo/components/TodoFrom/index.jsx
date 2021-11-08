// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';

// class TodoFrom extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       defaultvalues: {
//         title: '',
//       },
//     };
//   }

//   handleSubmit = (values) => {
//     console.log('TODO FORM', values);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <InputField name="title" label="Todo" form={this.state.defaultvalues} />
//       </form>
//     );
//   }
// }

// TodoFrom.propTypes = {
//   onSubmit: PropTypes.func,
// };

// export default TodoFrom;

import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from 'components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(3, 'Title is too short'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    // console.log('TODO FORM: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      Todo Form
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
