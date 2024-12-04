import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/BhushanPandagre")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <h1 className="text-center m-4 bg-gray-700 text-3xl text-white p-4">
        {data.bio}
      </h1>
      <h2 className="text-center m-4 bg-gray-700 text-3xl text-white p-4 ">
        Github {data.name} Followers:{data.followers}
        <img
          className="text-center"
          src={data.avatar_url}
          alt="Git Image"
          width={300}
        />
        <span>Created at:{data.created_at}</span>
        <h3>Public_repos :{data.public_repos}</h3>
      </h2>
    </>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/BhushanPandagre");

  return response.json();
};
