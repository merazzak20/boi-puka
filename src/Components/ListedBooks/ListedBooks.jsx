import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../Utility/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storeReadList = getStoreReadList();
    const storeReadListInt = storeReadList.map((id) => parseInt(id));

    const bookList = allBooks.filter((book) =>
      storeReadListInt.includes(book.bookId)
    );
    setReadList(bookList);
  }, []);
  return (
    <div>
      <h3 className="text-3xl my-5">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Whish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-semibold">
            Books I Read: {readList.length}
          </h2>
          {readList.map((book, idx) => (
            <Book key={idx} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-xl font-semibold">Whish Listed Books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
