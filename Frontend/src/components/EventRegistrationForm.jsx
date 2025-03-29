// components/EventRegistrationForm.jsx
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';

const EventRegistrationForm = ({ event, onSuccess, onCancel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (Math.random() < 0.1) { // Simulate 10% error rate
        throw new Error('Registration failed. Please try again.');
      }

      setSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-6">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
        <p className="text-gray-600">
          You will receive a confirmation email with event details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-sm text-blue-800">
          {event.registrationStatus} • {event.registered} registered
        </p>
      </div>

      {event.formSchema.map((field) => (
        <div key={field.name} className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
            {field.required && <span className="text-red-500">*</span>}
          </label>
          
          {field.type === 'select' ? (
            <select
              {...register(field.name, { required: field.required })}
              className={`w-full p-2 border rounded-md ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              {...register(field.name, { required: field.required })}
              placeholder={field.placeholder}
              className={`w-full p-2 border rounded-md ${
                errors[field.name] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {field.label} is required
            </p>
          )}
        </div>
      ))}

      {error && (
        <div className="bg-red-50 p-3 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 flex-1"
        >
          {isSubmitting ? 'Processing...' : 'Complete Registration'}
        </button>
        
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 flex-1"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

EventRegistrationForm.propTypes = {
  event: PropTypes.shape({
    formSchema: PropTypes.array.isRequired,
    registrationStatus: PropTypes.string.isRequired,
    registered: PropTypes.number.isRequired
  }).isRequired,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func
};

export default EventRegistrationForm;