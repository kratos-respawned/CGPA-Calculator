import { useState } from "react";

let Home = () => {
  const [iterator, setIterator] = useState(0);
  const [display, setDisplay] = useState(1);
  const [value, setValue] = useState(0);
  const [grade, setGrade] = useState(0);
  const [marks, setMarks] = useState(0);
  let calculate = (number, credit) => {
    let num = 0;

    number >= 94
      ? (num = 10)
      : number >= 85 && number < 94
      ? (num = 9)
      : number >= 77 && number < 85
      ? (num = 8)
      : number >= 69 && number < 77
      ? (num = 7)
      : number >= 61 && number < 69
      ? (num = 6)
      : number >= 53 && number < 61
      ? (num = 5)
      : number >= 45 && number < 53
      ? (num = 4)
      : (num = 0);
    return num * credit;
  };
  let changeHandler = (e) => {
    e.target.value <= 100 ? setValue(e.target.value) : setValue(100);
  };
  let gradeHandler = (e) => {
    setMarks(Number(marks) + Number(grade));
    setDisplay(3);
    e.preventDefault();
  };
  let clickHandler = (e) => {
    let temp = calculate(value, subjects[iterator].credit);
    setMarks(Number(marks) + Number(temp));
    console.log(marks);
    iterator < 8 ? setIterator(iterator + 1) : setDisplay(2);
    setValue(0);
    e.preventDefault();
  };
  const subjects = [
    {
      subject: "C++",
      credit: 4,
    },
    {
      subject: "Physics",
      credit: 4,
    },
    {
      subject: "Maths",
      credit: 4,
    },
    {
      subject: "PCS",
      credit: 3,
    },
    {
      subject: "BEEE",
      credit: 3,
    },
    {
      subject: "DT",
      credit: 2,
    },
    {
      subject: "CAD",
      credit: 1,
    },
    {
      subject: "IPR",
      credit: 1,
    },
    {
      subject: "GP",
      credit: 1,
    },
  ];
  return (
    <div>
      <form>
        {display == 1 ? (
          <>
            <label htmlFor="marks">{subjects[iterator].subject}</label>
            <input
              required
              type="number"
              name="marks"
              value={value}
              onChange={changeHandler}
            />
            <button onClick={clickHandler}>Next</button>
            <br />
          </>
        ) : display == 2 ? (
          <>
            <label htmlFor="grade">IP Grade</label>
            <select
              name="grade"
              value={grade}
              onChange={(e) => {
                setGrade(e.target.value);
              }}
            >
              <option disabled value="0">
                Enter Grades
              </option>
              <option value="10">A+</option>
              <option value="9">A</option>
              <option value="8">B+</option>
              <option value="7">B</option>
              <option value="6">C+</option>
              <option value="5">C</option>
            </select>
            <button onClick={gradeHandler}>Calculate</button>
          </>
        ) : (
          <>
            <h2>CGPA :: {marks / 24.0}</h2>
          </>
        )}
      </form>
    </div>
  );
};
export default Home;
