import { useEffect, useState } from "react";

function useCallApi(url) {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setLoading(false)
      })
  }, [url]);
  return { item, loading };
}

export default useCallApi;