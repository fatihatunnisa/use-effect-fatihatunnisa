import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Async = () => {
  const [pikachu, setPikachu] = useState({ name: "" });
  const [count, setCount] = useState(56);
  const [name, setName] = useState("");
  const { id } = useParams();

  // useEffect(() => {
  //   document.title = `Sudah klik sebanyak ${count} kali`;
  //   console.log("useeffect berjalan");
  // }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(" https://pokeapi.co/api/v2/pokemon/1");
      const data = await response.json();
      console.log(data);
      setPikachu(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>ini adalah halaman {id}</div>
      <br></br>
      <div>
        <button onClick={() => setCount(count + 1)}>Klik me</button>
        <p>Sudah diklik {count} kali</p>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <p>nama pokemon: {pikachu.name}</p>
      </div>
    </div>
  );
};

export default Async;