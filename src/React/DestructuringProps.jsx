import React from "react";

// const Child = ({name , standard}) => {
//     return(
//     <div>
//     <p>my name is {name} and i am in class {standard}</p>
//     </div>
//     )
// }

const Child = (props) => {
  const { name , standard } = props;
  return (
    <div>
      <p>
        my name is {name} and i am in class {standard}
      </p>
    </div>
  );
};

const DestructuringProps = () => {
  return (
    <>
      <Child name="himansu" standard="12th" />
    </>
  );
};

export default DestructuringProps;
