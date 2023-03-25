import React from "react";
import ShowCase from "@/components/ShowCase";

const Blog = () => {
  return (
    <ShowCase
      src="https://wynns.vercel.app/"
      title="A Blog site that I built for my Malaysian friend"
      ui="React.js"
      metaFramework="Next.js"
      cms="Sanity"
      css="Tailwind CSS"
      hasCMS={true}
      cloudPlatform="Vercel"
    />
  );
};

export default Blog;
