import React from "react";
import useUndoRedo from "./hooks/useUndoRedo";

const init = { text: "Qubra Farokhi" };
export default function UndoRedo() {
  const {
    state: st,
    setState: setSt,
    index,
    lastIndex,
    back: undo,
    forward: redo
  } = useUndoRedo(init);

  return (
    <div>
      <input
        type="text"
        value={st?.text}
        onChange={(e) => setSt({ text: e.target.value })}
      />
      <div>
        <button onClick={() => undo()}>Undo</button>
        <button onClick={() => redo()}>Redo</button>
      </div>
    </div>
  );
}
