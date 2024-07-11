import { useEffect, useState } from "react";
const Card = (props) => {
  return (
    <div className="card">
      <img
        className="img"
        src={"https://picsum.photos/200/300/?" + props.data.meetImg}
      ></img>
      <h3 className="list">{props.data.meetName}</h3>
      <h4 className="list">{props.data.meetTime}</h4>
      <p className="list">{props.data.meetInfo}</p>
    </div>
  );
};
const Body = () => {
  const [meets, setmeets] = useState([]);
  async function meetData() {
    const Data = await fetch(
      "https://shedlule-default-rtdb.firebaseio.com/newapp.json"
    );
    const originalData = await Data.json();
    console.log(originalData);
    const array = [];
    for (let key in originalData) {
      if (originalData.hasOwnProperty(key)) {
        array.push(originalData[key]);
      }
    }
    setmeets(array);
  }
  useEffect(() => {
    meetData();
  }, []);
  return (
    <div>
      <h2 className="center">Welcome back to all your meetings</h2>
      <div className="body">
        {meets.map((x) => {
          return <Card data={x} />;
        })}
      </div>
    </div>
  );
};
export default Body;
