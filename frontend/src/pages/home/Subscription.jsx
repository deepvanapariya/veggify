import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          {/* left text*/}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              Subscribe to our newsletter.
            </h3>
            <p className="mt-4 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              doloribus eum,
            </p>
          </div>
          <div className=" sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-address" className="sr-only">
              {" "}
              Email address
            </label>
            <input
              type="text"
              placeholder="Email Addres"
              className="flex-auto rounded-md border-0 text-white bg-primary px-3.5 py-4 shadow-sm:text-sm sm:leading-6 focus:outline-btnColor"
            />
            <button className="mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Subscription;
