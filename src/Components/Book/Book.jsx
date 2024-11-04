import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    tags,
    category,
    bookId,
    totalPages,
    rating,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="border p-6 rounded-xl">
        <div className="card bg-base-100 ">
          <figure className="bg-gray-100 py-6 rounded-xl">
            <img className="h-[166px]" src={image} alt="bookName" />
          </figure>
          <div className="card-body">
            <div className="space-x-3">
              {tags.map((tag, idx) => (
                <button key={idx} className="btn btn-xs bg-green-200">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title font-bold">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="font-semibold">By {author}</p>
            <div className="divider"></div>

            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline p-3">{category}</div>
              <div>{rating}</div>
              <div>{totalPages}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-300"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
