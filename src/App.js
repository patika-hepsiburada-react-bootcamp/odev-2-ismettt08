import { useEffect, useState } from "react";

// https://random-word-api.herokuapp.com/word?number=1

function App() {
  const [word, setWord] = useState(null);
  const [loadWord, setLoadWord] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //API request here
    if (loadWord === true) {
      setIsLoading(true);
      fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then((res) => res.json())
        .then((data) => {
          setWord(data);
          setIsLoading(false);
        })
        .finally(() => {
          setLoadWord(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loadWord]);

  return (
    <div>
      {isLoading ? "Please wait the word" : word}
      <input
        type="button"
        onClick={() => {
          setLoadWord(true);
        }}
      />
    </div>
  );
}

export default App;
