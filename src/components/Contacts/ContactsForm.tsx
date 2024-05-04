"use client";
import Notiflix from "notiflix";
import { useForm } from "react-hook-form";

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("contactsFormData", JSON.stringify(data));
    Notiflix.Notify.success('Form submitted successfully');
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto col-span-3 md:col-span-4 md:flex
      md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-5
      xl:md:col-start-2 xl:col-end-3 xl:row-start-2 xl:row-end-5 "
    >
      <div className="md:w-full md:flex md:gap-[24px] xl:flex-col">
        <div className="w-full xl:flex xl:gap-7">
          <div className="mt-4 xl:w-full">
            <label className="block form-label mb-2" htmlFor="fullName">
              Full name
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.fullName ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              id="fullNameInput"
              placeholder="John Smith"
              {...register("fullName", {
                required: "Full Name is required",
              })}
            />
            {errors.fullName && (
              <p className="text-red-color text-xs italic  text-right">
                X Incorrect name
              </p>
            )}
          </div>
          <div className="mt-4 xl:w-full">
            <label className="block form-label mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              id="emailInput"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-color text-xs italic text-right">
                X Invalid email
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:min-w-[463px]">
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="messageInput"
              {...register("message", { required: "Message is required" })}
              className="h-[196px] resize-none bg-form-input w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.message && (
              <p className="text-red-color text-xs italic text-right">
                Message required
              </p>
            )}
          </div>
          <button
            type="submit"
            className=" text-white text-center uppercase text-3xl font-medium leading-[normal] focus:outline-none focus:shadow-outline block ml-auto pt-4"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactsForm;
