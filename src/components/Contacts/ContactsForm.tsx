"use client";
import { useForm } from "react-hook-form";

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const phonePattern = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto col-span-3 md:col-span-4 md:flex md:max-w-full"
    >
      <div className="md:flex md:gap-[24px]">
        <div className="w-full">
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="fullName">
              Full name
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.fullName ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              placeholder="John Smith"
              {...register("fullName", {
                required: "Full Name is required",
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs italic  text-right">
                X Incorrect name
              </p>
            )}
          </div>
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.fullName ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              placeholder="johnsmith@email.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic text-right">
                X Invalid email
              </p>
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="h-[196px] resize-none bg-form-input w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic text-right">Message required</p>
            )}
          </div>
          <button
            type="submit"
            className=" text-white text-center uppercase text-3xl font-medium leading-[normal] focus:outline-none focus:shadow-outline block ml-auto"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactsForm;
