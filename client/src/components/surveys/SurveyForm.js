// SurveyForm shows a form for a user to add input
import { useForm } from 'react-hook-form';
import { formData } from '../../actions';
import { Link } from 'react-router-dom';
import validateEmails from './validateEmails';
import { connect } from 'react-redux';

const SurveyForm = ({ onSurveySubmit, formData, PreviousformData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: PreviousformData,
  });

  const onSubmit = (data) => {
    onSurveySubmit();
    formData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label for="title" className="form-label">
          Survey Title
        </label>
        <input
          placeholder="Survey Title"
          type="text"
          id="title"
          className="form-control"
          {...register('title', { required: true })}
        />
        <div style={{ color: 'red' }}>
          {errors.title?.type === 'required' &&
            'You must provide a survey title'}
        </div>
      </div>
      <div className="mb-3">
        <label for="subject" className="form-label">
          Subject Line
        </label>
        <input
          placeholder="Subject Line"
          type="text"
          id="subject"
          className="form-control"
          {...register('subject', { required: true })}
        />
        <div style={{ color: 'red' }}>
          {errors.subject?.type === 'required' &&
            'You must provide a subject line'}
        </div>
      </div>
      <div className="mb-3">
        <label for="body" className="form-label">
          Email Body
        </label>
        <input
          placeholder="Email Body"
          type="text"
          id="body"
          className="form-control"
          {...register('body', { required: true })}
        />
        <div style={{ color: 'red' }}>
          {errors.body?.type === 'required' && 'You must provide a email body'}
        </div>
      </div>
      <div className="mb-3">
        <label for="recipients" className="form-label">
          Recipient Email List
        </label>
        <input
          placeholder="Recipient Email List"
          type="text"
          id="recipients"
          className="form-control"
          {...register('recipients', {
            validate: validateEmails,
          })}
        />
        <div id="emailHelp" className="form-text">
          Each email must be seperated by a comma ,
        </div>
        <div style={{ color: 'red' }}>
          {errors.recipients?.type === 'validate' && 'These emails are invalid'}
        </div>
      </div>

      <Link className="btn btn-danger" to="/surveys">
        <i className="bi bi-x-lg"></i>
        {'  '}
        Cancel
      </Link>

      <button type="submit" className="btn btn-success float-end">
        <i className="bi bi-chevron-right"></i>
        {'  '}
        Next
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { PreviousformData: state.formData };
};
export default connect(mapStateToProps, { formData })(SurveyForm);
