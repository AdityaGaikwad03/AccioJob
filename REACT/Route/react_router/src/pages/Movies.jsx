/* # ✅ **Assignment 3 — Dynamic Routing (Movies List)**

## 🧩 **TASK**

1. Create a **Movies** page showing a list of movie names.
2. Each movie should be a link like:
    
    `/movies/tt101`
    
    `/movies/tt102`
    
3. Create a `MovieDetails` page that reads the dynamic ID using **useParams()**.
4. Display the movie name & year from a dataset.

const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
]; */

import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

 const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];
export default function Movies(){
   
    let {id} = useParams();
    return (
        <>
            <h1>movies list</h1>
            {movies.filter(movie => movie.id === id).map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>ID: {movie.id}</p>
                    <p>Year: {movie.year}</p>
                </div>
            ))}
        </>
    )
}