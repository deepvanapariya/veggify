import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const item = useLoaderData();
  //   console.log(item);
  useEffect(() => {
    window.scrollTo(0, 0); // start from top
  }, []);
  const extractNumber = (timeString) => {
    let timeArray = timeString.split(" ");
    return parseInt(timeArray[0]);
  };
  let prepTimeMinutes = extractNumber(item.more[0].prep_time);
  let cookTimeMunites = extractNumber(item.more[0].cook_time);
  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className="bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl">
          <picture>
            <img
              src={item.thumbnail_image}
              alt=""
              className="md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto"
            />
          </picture>
          <div className="px-8 ">
            <h1 className="text-4xl mt-12 text-secondary">{item.name}</h1>

            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              numquam ducimus cupiditate! Fugit itaque nihil rerum non
              doloremque, sunt repellat maiores enim, eum, veritatis minima
              mollitia et. Enim, laborum nemo!
            </p>
            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2">Prepration time</h3>
              <ul className="list-disc mt-3 ml-8 text-lg marker:text-orange-500">
                <li className="pl-3">
                  <p>
                    <span>Total : </span>
                    <span>{prepTimeMinutes + cookTimeMunites}</span>{" "}
                    <span> minutes</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Prepration : </span>
                    <span>{item.more[0].prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cokking : </span>
                    <span>{item.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>
            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Prepration time</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item?.ingredients.map((ingredient, index) => (
                  <li key={index} className="pl-4 mt-2 ">
                    <span>{ingredient?.name} : </span>
                    <span> {ingredient?.quantity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold ml-2">Instructions</h3>
              <ol className="list-decimal marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item?.instructions.split(". ").map((instruction, index) => {
                  return index % 2 !== 0 ? (
                    <li key={index} className="pl-4 mt-2 ">
                      <span>{instruction} </span>
                    </li>
                  ) : (
                    ""
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SingleProduct;
