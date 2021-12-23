import React from "react"
import styles from './index.module.scss';

export default function Timeline() {

  const events = [
    {
      date: "2022-01-14",
      title: "ประชุมร่วม",
      note: "การประชุมร่วมกันระหว่าง x y และ z เพื่ออนุมัติเอกสาร",
    },
    {
      date: "2022-01-21",
      title: "ออกเอกสาร",
      note: "เริ่มเผยแพร่เอกสารเพื่อเปิดรับฟังความคิดเห็นจากประชาชน",
    },
    {
      date: "2022-02-02",
      title: "หารือกับสมาคมธนาคาร",
      note: "หารือร่วมกับสมาคมธนาคารไทยและ AIB เพื่อ...",
    },
    {
      date: "2022-02-28",
      title: "งานสัมมนา FL",
      note: "งานสัมมนา เพื่อสรุปความคิดเห็นที่ได้รับ และการผลักดันนโยบายต่อไป",
    },
  ]

  function DateBlob({ date, locale='th-TH' }) {
    const d = new Date(date)
    return(
      <div className={styles.dateBlob}>
        <div className={styles.date}>{d.getDate()}</div>
        <div className={styles.month}>{d.toLocaleString(locale, {month: "narrow"})}</div>
      </div>
    )
  }

  return(
    <div className={styles.timelineContainer}>
      {events.map(e => {
        return(
          <>
            <div className={styles.dateContainer}>
              <DateBlob date={e.date} />
              <div className={styles.dateFill} />              
            </div>
            <div className={styles.details}>
              <div className={styles.title}>{e.title}</div>
              <div className={styles.note}>{e.note}</div>
            </div>
          </>
        )
      })}
    </div>
  )

}