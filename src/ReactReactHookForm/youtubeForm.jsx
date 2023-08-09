import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
const YoutubeForm = () => {
  const form = useForm({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      return {
        username: "Batman",
        email: data.email,
        channel: "",
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: ["", ""],
        phNumbers: [{ number: "" }],
        age: 0,
        dob: new Date(),
      };
    },
  });

  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const watchUserNameAndEmail = watch(["username", "email"]);

  useEffect(() => {
    const subs = watch((value) => {
      console.log(value);
    });

    return () => subs.unsubscribe();
  }, [watch]);

  renderCount++;

  return (
    <div>
      <h1>Youtube Form ({renderCount / 2})</h1>
      <h1>{watchUserNameAndEmail}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid text-white font-semibold text-left gap-y-2  bg-slate-500 place-content-center  h-full "
        onValidate
      >
        <label htmlFor="username">UserName</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1  bg-slate-300 rounded-md"
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />

        <p className="text-red-400">{errors.username?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
            validate: {
              notAdmin: (value) => {
                return (
                  value !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
              notBlackListed: (value) => {
                return (
                  !value.endsWith("baddomain.com") ||
                  "This domain is not supportted"
                );
              },
            },
          })}
        />

        <p className="text-red-400">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "channel is required",
            },
          })}
        />

        <p className="text-red-400">{errors.channel?.message}</p>

        <label htmlFor="twitter">Twitter</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="text"
          id="twitter"
          {...register("social.twitter", {})}
        />

        <label htmlFor="facebook">Facebook</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="text"
          id="facebook"
          {...register("social.facebook", {})}
        />

        <label htmlFor="primary-phone">Primary Phone Number</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="text"
          id="primary-phone"
          {...register("phoneNumbers.0", {})}
        />

        <label htmlFor="secondary-phone">Secondary Phone Number</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="text"
          id="secondary-phone"
          {...register("phoneNumbers.1", {})}
        />

        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md my-2"
                    type="telephone"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button
              className="border-dashed border-2 border-white px-2 py-1"
              onClick={() => append({ number: "" })}
            >
              Add Phone Number
            </button>
          </div>
        </div>

        <label htmlFor="age">Age</label>
        <input
          className="border  border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "age is required",
            },
          })}
        />

        <label htmlFor="dob">DOB</label>
        <input
          className="border border-spacing-2 border-slate-600 p-1 bg-slate-300 rounded-md"
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
            required: {
              value: true,
              message: "date of birth is required",
            },
          })}
        />

        <button className="bg-blue-300 py-1 px-4 rounded-lg ">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
