import { useEffect, useState } from 'react';
import fetchDataFromApi from '../utils/fetchDataFromApi';

const FetchData = (url) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(false);
    setErr(false);

    fetchDataFromApi(url)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setErr("error fetching data");
        setLoading(false);
      });
  }, [url]);

  return { data, err, loading };
};

export default FetchData;
