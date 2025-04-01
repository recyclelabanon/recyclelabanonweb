// components/EventRegistrationForm.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const EventRegistrationForm = ({ event, onSuccess, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (Math.random() < 0.1)
        throw new Error("Registration failed. Please try again.");
      setSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-center p-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Registration Confirmed!
          </h3>
          <p className="text-gray-600">
            Check your email for event details and next steps.
          </p>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="bg-blue-50 p-4 rounded-xl">
            <div className="flex items-center gap-3 text-blue-800">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">
                {event.registrationStatus} • {event.registered} participants
                registered
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {event.formSchema.map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <div className="relative">
                  {field.type === "select" ? (
                    <select
                      {...register(field.name, { required: field.required })}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors[field.name]
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-green-500"
                      } focus:ring-2 focus:ring-green-200 transition-all pr-12`}
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
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors[field.name]
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:border-green-500"
                      } focus:ring-2 focus:ring-green-200 transition-all pr-12`}
                    />
                  )}
                  {!errors[field.name] && (
                    <div className="absolute right-3 top-3 text-gray-400">
                      {field.type === "email" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      )}
                      {field.type === "tel" && (
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {errors[field.name] && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {field.label} is required
                  </p>
                )}
              </div>
            ))}
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-red-50 p-4 rounded-xl text-red-700 text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Secure Your Spot"
              )}
            </button>
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

EventRegistrationForm.propTypes = {
  event: PropTypes.object.isRequired,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EventRegistrationForm;
