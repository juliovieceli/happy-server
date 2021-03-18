import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface IValidationErrorsProps {
  [key: string]: string[];
}
const errorHandler: ErrorRequestHandler = (error, request, response, _) => {
  if (error instanceof ValidationError) {
    const errors: IValidationErrorsProps = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
  }

  console.error(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
