import { Cross } from "../components/Input"
import QNA from "../resource/QNA.json"
import constructCrossWordPuzzle from "../resource/constructCrossWordPuzzle"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {
  const types = QNA?.type
  const [load, setLoad] = useState()

  useEffect(() => setLoad(constructCrossWordPuzzle()), [])

  return (
    <main className="grid gap-2">
      <div className="photo" />
      <Head>
        <title>Vanessa A. Alarma | Crossword Puzzle</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-white/60 p-4">
        <h1 className="text-xl font-bold">
          Vanessa A. Alarma<span className="absolute right-10">BSMT 3A</span>
        </h1>
      </header>
      <div id="crossword" className="grid justify-center">
        {load ? (
          load.map((value, index) => (
            <div className="cwrow" key={index}>
              {value.map((props, index) => (
                // console.log(props.value, props.number)
                <Cross
                  key={index}
                  value={props?.value}
                  onChange={(event) => event?.target.value}
                  number={props?.number}
                />
              ))}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="flex w-[80vw] p-4 rounded-xl mx-auto bg-white/60">
        <div>
          <h1 className="font-bold">Across</h1>
          {types.across?.map(({ number, question }) => {
            return (
              <p key={`across${number}`} className="flex gap-2 my-3">
                <span className="number">{number}</span>
                {question}
              </p>
            )
          })}
        </div>
        <div>
          <h1 className="font-bold">Down</h1>
          {types.down?.map(({ number, question }) => {
            return (
              <p key={`down${number}`} className="flex gap-2 my-3">
                <span className="number">{number}</span>
                {question}
              </p>
            )
          })}
        </div>
      </div>
    </main>
  )
}
