import { useState } from "react"

export const Cross = (props) => {
  const [state, setState] = useState({
    answer: props.value,
    value: "",
  })

  return (
    <div
      className={
        props.value !== " " && props.value !== undefined
          ? "relative cell light inline"
          : "relative cell dark inline noselect outline-none pointer-events-none"
      }
    >
      <h1 className="absolute z-10 number noselect">{props?.number}</h1>
      <label className="absolute ml-2 uppercase noselect text-center">
        {state.answer}
      </label>
      <input
        className="w-7 h-7 select-none text-center uppercase text-semibold bg-inherit"
        disabled
        maxLength={1}
      />
    </div>
  )
}
