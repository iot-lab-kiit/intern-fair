"use client";

import { useEffect, useState } from "react";

const dataUtilFunc = ({ payload, func }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await func(payload);
      setData(response.data);
    };

    fetchData();
  }, [payload, func]);

  return data;
};

export default dataUtilFunc;
