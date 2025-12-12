import type { FormEvent } from "react";
import { Link } from "react-router";

const Newsletter = () => {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement> | Event | undefined
  ) => {
    event?.preventDefault();
  };

  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <div className="text-center">
        <span className="text-violet-600 font-semibold text-[16px] leading-6">
          Newsletter
        </span>
        <h2 className="capitalize text-5xl font-semibold mt-3 mb-6 leading-[60px]">
          stories and interviews
        </h2>
        <p className="text-slate-500 text-[20px] leading-[30px] md:w-[80%] mx-auto">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
      </div>
      <form
        onSubmit={() => handleSubmit(event)}
        className="flex flex-col items-start">
        <div className="w-full md:w-[360px] flex flex-col md:flex-row gap-4 items-start mb-2">
          <input
            className="py-3 px-3.5 shadow-xs border border-slate-300 rounded-lg w-full"
            type="text"
            placeholder="Enter your email"
          />
        <button
          type="submit"
          className="py-3 px-5 rounded-lg bg-violet-600 text-white border border-violet-600 hover:bg-violet-500 font-medium text-[16px] leading-6 cursor-pointer">
          Subscribe
        </button>
        </div>
          <p className="text-[14px] leading-5 text-slate-600">
            We care about your data in our{" "}
            <Link className="underline" to={`/`}>
              privacy policy
            </Link>
          </p>
      </form>
    </section>
  );
};

export default Newsletter;
