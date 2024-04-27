'use client';
import {FC, ReactNode} from 'react';
import { useForm } from 'react-hook-form';


export const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const phonePattern =
    /^(\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{2}\s[0-9]{2}\s[0-9]{3})$/;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
     >
      <div >
        <label  htmlFor="fullName">
          Full name
        </label>
        <input
          
          type="text"
          placeholder="John Smith"
          {...register('fullName', {
            required: 'Full Name is required',
          })}
        />
        {errors.fullName && (
          <p >
            Full name required
          </p>
        )}
      </div>

      <div >
        <label  htmlFor="email">
          E-mail
        </label>
        <input
          
          type="text"
          placeholder="johnsmith@email.com"
          {...register('email', {required: 'Email is required'})}
        />
        {errors.email && (
          <p >
            Email required
          </p>
        )}
      </div>
      <div >
        <label  htmlFor="position">
          Position
        </label>
        <input
          
          type="text"
          placeholder="Movie maker"
          {...register('position', {
            required: 'Position is required',
          })}
        />
        {errors.position && (
          <p >
            Position required
          </p>
        )}
      </div>
      <div >
        <label  htmlFor="phone">
          Phone
        </label>
        <input
          
          type="text"
          placeholder="+ 38 (097) 12 34 567"
          {...register('phone', {
            required: 'Phone is required',
            pattern: {
              value: phonePattern,
              message: 'Invalid phone number format',
            },
          })}
        />
        {errors.phone && (
          <p >
            {errors.phone.message as ReactNode}
          </p>
        )}
      </div>
      <div >
        <label  htmlFor="message">
          Message
        </label>
        <textarea />
      </div>

      <div >
        <label>
          <input
            type="checkbox"
            {...register('agreement', {
              required: 'You must accept the agreement',
            })}
          />
          I confirm my consent to the processing of personal data.
        </label>
        {errors.agreement && (
          <p >
            You must confirm the consent
          </p>
        )}
      </div>

      <button
        type="submit"
        >
        Send
      </button>
    </form>
  );
};
export default CareerForm;