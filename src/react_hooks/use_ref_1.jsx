import React, { useEffect, useRef } from "react";

const Use_ref_1 = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <input ref={ref} type="text" />
    </div>
  );
};

export default Use_ref_1;
