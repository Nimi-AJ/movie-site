import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function MovieList() {
  return (
    <section className="booklist">
      <Movie/>  
      <Movie/>  
      <Movie/>  
      <Movie/>  
      <Movie/>  
      <Movie/>  
      <Movie/>  
    </section>
  );
  
}

const Movie = () => {
  return(
    <article>
      <Image/>
      <Title/>
      <Genre/>  
    </article>
  );
}
const Image = () => {
  return(
    <img src="https://a.ltrbxd.com/resized/film-poster/4/5/0/3/3/7/450337-a-quiet-place-part-ii-0-230-0-345-crop.jpg?k=90176ef700" alt=""/>
  );
}

const Title = () => {
  return(
    <h3>A Quiet Place</h3>
  )
}

const Genre = () => {
  return(
    <h3>Horror, Thriller</h3>
  )
}
ReactDom.render(<MovieList />, document.getElementById('root'))