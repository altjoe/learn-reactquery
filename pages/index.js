import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, useRef } from "react";

const fetchUser = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`).then((resolve) => {
        return resolve.json();
    });
};

export default function Index(props) {
    const userQuery = useQuery(["altjoe"], () => {
        return fetchUser("altjoe");
    });

    if (userQuery.isLoading) {
        return <div className={``}>Loading...</div>;
    } else if (userQuery.isError) {
        return <div className={``}>Error: {userQuery.error.message}</div>;
    } else {
      const data = JSON.stringify(userQuery.data);
      return <p className={``}>{data}</p>;
    }

    
}
