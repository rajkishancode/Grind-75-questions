import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const reponse = await fetch(API, { signal: controller.signal });
        const jsonData = await response.json();
        setList(jsonData);
      } catch (error) {}
    })();

    return controller?.abort();
  }, []);

  return (
    <>
      <h1>
        Abort Controller Example for Cancelling data fetching Api Request when
        component unMount in between
      </h1>
    </>
  );
};
