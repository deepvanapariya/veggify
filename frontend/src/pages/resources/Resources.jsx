import React from "react";

const Resources = () => {
  const blogData = [
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 1, 2020",
      views: "2.1K views",
      imgSrc:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 2, 2020",
      views: "2.2K views",
      imgSrc:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 3, 2020",
      views: "2.3K views",
      imgSrc:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Convenire",
    },
    {
      title: "Te nulla oportere reprimique his dolorum",
      date: "June 4, 2020",
      views: "2.4K views",
      imgSrc:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Convenire",
    },
  ];
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        {" "}
        Resources
      </h1>
      <article className="py-6 sm:py-12 ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">This is heading</h2>
            <p className="text-sm mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              facere harum odit illo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {blogData.map((blog, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={blog.imgSrc} alt={blog.title} />
              <h3 className="text-2xl font-semibold">{blog.title}</h3>
              <p className="text-sm">{blog.date}</p>
              <p className="text-sm">{blog.views}</p>
              <p className="text-sm">{blog.category}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Resources;
