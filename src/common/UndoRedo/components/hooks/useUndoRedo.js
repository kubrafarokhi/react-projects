import React, { useMemo, useState } from "react";

export default function useUndoRedo(init) {
  const [states, setStates] = useState([init]);
  const [index, setIndex] = useState(0);

  const state = useMemo(() => states[index], [states, index]);

  const setState = (value) => {
    if (state === value) return;
    const copy = states?.slice(0, index + 1);
    copy.push(value);
    setStates(copy);
    setIndex(copy.length - 1);
  };

  const back = (steps = 1) => {
    setIndex(Math.max(0, Number(index) - (Number(steps) || 1)));
  };
  const forward = (steps = 1) => {
    setIndex(Math.min(states.length - 1, Number(index) + (Number(steps) || 1)));
  };
  return {
    state,
    setState,
    index,
    lastIndex: states.length - 1,
    forward,
    back
  };
}
