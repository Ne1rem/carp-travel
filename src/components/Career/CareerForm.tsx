"use client";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

export const CareerForm = () => {
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
              id="fullName"
              placeholder="John Smith"
              {...register("fullName", {
                required: "Full Name is required",
              })}
            />
            {errors.fullName && (
              <p className="text-red-color text-xs italic">Full name required</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              id="email"
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
              <p className="text-red-color text-xs italic">Email required</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="position">
              Position
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.fullName ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              id="position"
              placeholder="Movie maker"
              {...register("position", {
                required: "Position is required",
              })}
            />
            {errors.position && (
              <p className="text-red-color text-xs italic">Position required</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block form-label mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              className={`placeholder:opacity-20 bg-form-input border border-form-input w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : "border-transparent"
              }`}
              type="text"
              id="phone"
              placeholder="+ 38 (097) 12 34 567"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: phonePattern,
                  message: "Invalid phone number format",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-color text-xs italic">
                {errors.phone.message as ReactNode}
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
            id="message"
              {...register("message", { required: "Message is required" })}
              className="h-[196px] resize-none bg-form-input w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.message && (
              <p className="text-red-color text-xs italic">Message required</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm ">
              <input
                type="checkbox"
                {...register("agreement", {
                  required: "You must accept the agreement",
                })}
              />{" "}
              I confirm my consent to the processing of personal data.
            </label>
            {errors.agreement && (
              <p className="text-red-color text-xs italic">
                You must confirm the consent
              </p>
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
export default CareerForm;
