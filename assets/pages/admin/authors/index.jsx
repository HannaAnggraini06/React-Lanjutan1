import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthorAdmin = () => {
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState("");

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("https://akmal-bc.karyakreasi.id/api/authors");
      setAuthors(response.data.data);
    } catch (error) {
      console.error("Gagal mengambil author:", error);
    }
  };

  const addAuthor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://akmal-bc.karyakreasi.id/api/authors", { name });
      setName("");
      fetchAuthors(); // Refresh data
    } catch (error) {
      console.error("Gagal menambahkan author:", error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Kelola Author</h2>
      <form onSubmit={addAuthor}>
        <input
          type="text"
          placeholder="Nama author"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Tambah Author</button>
      </form>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorAdmin;
