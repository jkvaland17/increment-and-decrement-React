import React, { useEffect, useState } from "react";
const DateFilter = () => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://63da3a9b19fffcd620c3dd70.mockapi.io/User"
    );
    const data = await response.json();
    return setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {user.map((data) => {
              const { id, name, post, date } = data;
              const FDate = date.substring(0, 10);
              const [day, month, year] = FDate.split("-");
              const result = [year, month, day].join("-");
              return (
                <div className="main_flax">
                  <div>
                    <th>ID</th>
                    <tr>{id}</tr>
                  </div>
                  <div>
                    <th>Name</th>
                    <tr>{name}</tr>
                  </div>
                  <div>
                    <th>Post</th>
                    <tr>{post}</tr>
                  </div>
                  <div>
                    <th>Date</th>
                    <tr>{result}</tr>
                  </div>
                </div>
              );
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DateFilter;
