import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Test() {
  const baseurl = "http://localhost:4000/";

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(baseurl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <p>hello{data}</p>
    </div>
  );
}

export default Test;
