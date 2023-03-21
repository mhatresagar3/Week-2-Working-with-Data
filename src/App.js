import "./styles.css";

export default function App() {
  const dotElements = dots();

  const dotMap = dotElements.map((dot, i) => {
    const dotStyle = {
      position: "absolute",
      height: "10px",
      width: "10px",
      borderRadius: "10px",
      margin: "3px",
      backgroundColor: "Green",
      left: `${i * 16}px`,
      top: `${window.innerHeight / 2 - dot.val}px`
    };
    return <div key={i} style={dotStyle}></div>;
  });

  return <div style={{ position: "relative" }}>{dotMap}</div>;
}

function randFifty() {
  let x = Math.floor(Math.random() * 50);
  return x;
}

function dots() {
  const arr = new Array(101).fill(0);
  const today = Date.now();
  const newarr = arr
    .map((item, index) => index)
    .filter((item) => item % 2 === 0)
    .map((item) => today - item * 86400000)
    .map((item) => new Date(item));
  const randNum = new Array(51).fill(0).map((i) => randFifty());
  const randomValues = newarr.map((item, i) => ({
    date: item,
    val: randNum[i]
  }));
  return randomValues;
}

console.log(dots());
