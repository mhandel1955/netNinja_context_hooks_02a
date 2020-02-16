import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "The Lion, The Witch and the Wardrobe", id: 1 },
    { title: "The Horse and His Boy", id: 2 },
    { title: "Prince Caspian", id: 3 },
    { title: "The Voyage of the Dawn Treader", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
