import paginate from '../utils/utils';
import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const UseFetch = () => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  const getProducts = async () => {
    const Response = await fetch(url);
    const data = await Response.json();

    setdata(paginate(data));
    setloading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
