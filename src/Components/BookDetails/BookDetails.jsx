import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreTReadList, addToStoreWhishList } from "../Utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  const { image, bookId: currentBookId } = book;

  const handleMarkAsRead = (id) => {
    addToStoreTReadList(id);
  };
  const handleWhishList = (id) => {
    addToStoreWhishList(id);
  };

  return (
    <div className="py-6">
      <h1>Book Detail</h1>
      <img className="max-w-[144px] my-4" src={image} alt="" />
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Mark as Read
      </button>
      <button
        onClick={() => handleWhishList(bookId)}
        className="btn btn-accent"
      >
        Add to WhishList
      </button>
    </div>
  );
};

export default BookDetails;
