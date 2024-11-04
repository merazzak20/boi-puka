import { toast } from "react-toastify";
const getStoreReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const StoredList = JSON.parse(storedListStr);
    return StoredList;
  } else {
    return [];
  }
};

const addToStoreTReadList = (id) => {
  const storeList = getStoreReadList();
  if (storeList.includes(id)) {
    toast.warn("Already Exist");
  } else {
    storeList.push(id);
    const storedListStr = JSON.stringify(storeList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("Successfully Added");
  }
};

const getStoreWhishList = () => {
  const storeWhishListStr = localStorage.getItem("whish-list");
  if (storeWhishListStr) {
    const storeWhish = JSON.parse(storeWhishListStr);
    return storeWhish;
  } else {
    return [];
  }
};

const addToStoreWhishList = (id) => {
  const whishList = getStoreWhishList();
  if (whishList.includes(id)) {
    console.log(id, "Already Exist");
  } else {
    whishList.push(id);
    const whishListStr = JSON.stringify(whishList);
    localStorage.setItem("whish-list", whishListStr);
  }
};

export { addToStoreTReadList, addToStoreWhishList, getStoreReadList };
