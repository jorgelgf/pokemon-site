import { useState, useCallback } from "react";
export default function useFetch() {
  const [pok, setPok] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const executeFetch = useCallback(async (url) => {
    let data, response;

    try {
      setLoading(true);
      setError(null);
      data = await fetch(url);
      response = await data.json();
    } catch (e) {
      setError("pokemon not found");
      console.log("Erro gerado na pesquisa: ", e);
      response = null;
    } finally {
      setLoading(false);
      setPok(response);
    }

    return { response, data };
  }, []);

  return { executeFetch, pok, loading, error };
}
