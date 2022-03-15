import React, { useContext, useState } from "react";
import "./Write.css";
import { ThemeContext } from "../../Context";

function Test(props) {
  const [newItem, setNewItem] = useState("");
  const [story, setStory] = useState("");
  const [item, setItem] = useState([]);

  const { theme } = useContext(ThemeContext);


  function addItem() {
    if (!newItem) {
      alert("Enter an Item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      story: story,
    };

    setItem((oldList) => [...oldList, item, story]);
    setNewItem("");
    setStory("");
  }

  function delItem(id) {
    const newArr = item.filter((item) => item.id !== id);
    setItem(newArr);
  }

  return (
    <div className={`${theme} write`}>
      <div className=" container">
      <div className="d-flex align-items-center py-2">
      <input className={`${theme} input`}
          type="text"
          placeholder="Title"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}/>
        <button className={`${theme} submit-btn`} onClick={() => addItem()}>
          Post
        </button>
      </div>
        <textarea
          className={`${theme} text-aria`}
          type="text"
          placeholder="Story..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        ></textarea>
        <div className="row">
          {item.map((item) => {
            return (
              <div key={item.id} className="col-md-6">
                <div className="post">
                  <span className="w-500">
                    <h3>{item.value}</h3>
                  </span>
                  <button
                    className="absolute del-btn"
                    onClick={() => delItem(item.id)}>
                    x
                  </button>
                  <p> {item.story} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Write = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {(ctx) => <Test ctx={ctx} />}
      </ThemeContext.Consumer>
    </>
  );
};

export default Write;
