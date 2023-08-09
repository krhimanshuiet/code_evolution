import { useReducer } from "react";

const countries = [
  {
    name: "India",
    id: "1",
    cities: ["delhi", "mumbai", "kolkata", "pune", "patna"]
  },
  {
    name: "Pakistan",
    id: "2",
    cities: [
      "islamabad",
      "rawalpindi",
      "karachi",
      "multan",
      "faislabad",
      "peshawar"
    ]
  },
  {
    name: "srilanka",
    id: "3",
    cities: ["coloumbo", "jafna", "palekele", "xyz"]
  },
  {
    name: "bangladesh",
    id: "4",
    cities: ["dhaka", "mirpur", "chitogram", "qws"]
  },
  {
    name: "nepal",
    id: "5",
    cities: ["khatmandu", "pokhra", "ddd", "wee", "rrr"]
  }
];

function reducer(cities, action) {
  switch (action.type) {
    case "change":
      return countries.filter((item) => item.name === action.payload.value)[0]
        ?.cities;
    default:
      return [...cities];
  }
}

export default function App() {
  const count = [];

  countries.forEach((item) => {
    count.push(item.name);
  });

  const [cities, dispatch] = useReducer(reducer, []);
  const handleChange = (event) => {
    dispatch({ type: "change", payload: { value: event?.target?.value } });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <select value={count[0].name} onChange={handleChange}>
        <option>select your country</option>
        {count.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select>
        <option>select your city</option>
        {cities?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
