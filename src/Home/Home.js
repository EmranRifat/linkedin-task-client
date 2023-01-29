import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();

  const [user, setUser] = useState({});
  const [displayUsers, setDisplayUser] = useState(users);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(user);

    //  send data POST method
    fetch("https://linkdin-task-server-emranrifat.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Data added Successfully..");
          event.target.reset();
        }
      });
  };

  const handleSelect = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const field = event.target.name;

    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  const handleDelete = (user) => {
    const agree = window.confirm("Are you sure want to Delere.?");
    if (agree) {
      fetch(
        `https://linkdin-task-server-emranrifat.vercel.app/users/${user._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User deleted successfully.");
            const remaining = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUser(remaining);
          }
        });
    }
  };

  return (
    <div className="mt-4">
      <p className=" text-secondary">
        {" "}
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label>
            <span className="font-bold text-white">Name: </span>
            <input
              onChange={handleSelect}
              name="name"
              type="text"
              placeholder="Your Name "
              className="input input-bordered w-80 ml-2"
              required
            />
          </label>
        </div>
        <span className="font-bold text-white">Sectors: </span>
        <select
          onChange={handleSelect}
          className="select w-full h-28 max-w-xs mt-4 border-2 border-gray-300"
          multiple=""
          size="5"
          id="select"
          name="select"
        >
          <option className="pl-8" value="Manufacturing ">
            Manufacturing
          </option>
          <option className="pl-8" value="Construction">
            {" "}
            Construction{" "}
          </option>
          <option className="pl-8" value="Electronics">
            Electronics
          </option>
          <option className="pl-8" value="Food & Beverage">
            Food & Beverage
          </option>
          <option className="pl-8" value="Bakary Products">
            Bakary Products
          </option>
          <option className="pl-8" value="Fish Items">
            {" "}
            Fish Items
          </option>
          <option className="pl-8" value="Meat product">
            Meat product{" "}
          </option>
          <option className="pl-8" value="other">
            {" "}
            Other
          </option>
        </select>
        <br />
        <div className="pr-16">
          <input className="text-white" type="checkbox" name="checked" id="" />
          <span className="text-white"> Agree to terms</span>
        </div>
        <br />
        <button className="btn btn-accent ">Save data</button>
      </form>
      <br />
      <p className="text-secondary">all users : {displayUsers.length}</p>
      <div>
        {displayUsers.map((user) => (
          <div key={displayUsers._id}>
            <h6 className="text-white">
              {" "}
              <small>
                {user.name} :: {user.select}{" "}
                <button
                  onClick={() => handleDelete(user)}
                  className="text-white border-2  rounded "
                >
                  X
                </button>
              </small>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
