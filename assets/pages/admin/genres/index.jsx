import React, { useState, useEffect } from "react";
import axios from "axios";

const GenreAdmin = () => {
  const [genres, setGenres] = useState([]);
  const [name, setName] = useState("");

  const fetchGenres = async () => {
    try {
      const response = await axios.get("https://akmal-bc.karyakreasi.id/api/genres");
      setGenres(response.data.data);
    } catch (error) {
      console.error("Gagal mengambil genre:", error);
    }
  };

  const addGenre = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://akmal-bc.karyakreasi.id/api/genres", { name });
      setName("");
      fetchGenres(); // Refresh data
    } catch (error) {
      console.error("Gagal menambahkan genre:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Kelola Genre</h2>
      <form onSubmit={addGenre}>
        <input
          type="text"
          placeholder="Nama genre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Tambah Genre</button>
      </form>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreAdmin;
