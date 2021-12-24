import React from "react";
import Flip from "../Flip"
import styles from "./index.module.scss"
// import "./index.module.scss"

export default function Countdown({ date }) {

  const [loop, setLoop] = React.useState()
  const [value, setValue] = React.useState(getTimeLeft())

  function getTimeLeft() {
    const diff = Math.floor((new Date(date) - new Date()) / 1000)
    const d = Math.floor(diff / (3600*24));
    const h = Math.floor(diff % (3600*24) / 3600);
    const m = Math.floor(diff % 3600 / 60);
    const s = Math.floor(diff % 60);
    return [d, h, m, s]
  }

  React.useEffect(() => {
    getTimeLeft()
    setLoop(setInterval(() => {
      setValue(getTimeLeft())
    }, 1000))
    return () => {
      clearInterval(loop)
    }
  }, [])

  return(
    <div className={styles.countdown}>
      {["Day", "Hour", "Minute", "Second"].map((e, i) => {
        return(
          <div className={styles.unit}>
            <Flip value={value[i].toString().padStart(2, '0')} />
            <div className={styles.unitName}>{e + (value[i] > 1 ? "s" : "")}</div>
          </div>
        )
      })}
    </div>
  )

}