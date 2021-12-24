import React from "react"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.scss';

export default function Timeline() {

  const {i18n} = useDocusaurusContext();

  const events = [
    {
      date: "2021-01-14",
      title: {
        th: "ประชุมร่วม",
        en: "Joint Meeting",
      },
      note: {
        th: "การประชุมร่วมกันระหว่าง x y และ z เพื่ออนุมัติเอกสาร",
        en: "Joint meeting between x, y, and z.",
      },
    },
    {
      date: "2021-01-21",
      title: {
        th: "ออกเอกสาร",
        en: "Publicizing Paper",
      },
      note: {
        th: "เริ่มเผยแพร่เอกสารเพื่อเปิดรับฟังความคิดเห็นจากประชาชน",
        en: "Publicizing the consultation paper in order to hear from the people.",
      },
    },
    {
      date: "2022-02-02",
      title: {
        th: "หารือกับสมาคมธนาคาร",
        en: "Discussion with TBA and AIB",
      },
      note: {
        th: "หารือร่วมกับสมาคมธนาคารไทยและ AIB เพื่อ...",
        en: "Discuss the paper with TBA and AIB in order to ...",
      },
    },
    {
      date: "2022-02-28",
      title: {
        th: "งานสัมมนา FL",
        en: "FL Seminar",
      },
      note: {
        th: "งานสัมมนา เพื่อสรุปความคิดเห็นที่ได้รับ และการผลักดันนโยบายต่อไป",
        en: "A public event to summarize all the feedbacks on the paper."
      },
    },
  ]

  function DateBlob({ date }) {
    const d = new Date(date)
    return(
      <div className={styles.dateBlob}>
        <div className={styles.date}>{d.getDate()}</div>
        <div className={styles.month}>{d.toLocaleString(i18n.currentLocale === "th" ? "th-TH" : "en-US", {month: "short"})}</div>
      </div>
    )
  }

  const numPast = events.map(e => e.date).filter(d => new Date(d) < new Date()).length

  return(
    <div className={styles.timelineContainer}>
      {events.map((e, i) => {
        return(
          <React.Fragment key={`dateitem${i}`}>
            <div className={clsx(styles.dateContainer, i > numPast && styles.future, i === numPast && styles.next, i < numPast && styles.past)}>
              <DateBlob date={e.date} />
              <div className={styles.dateFill} />              
            </div>
            <div className={clsx(styles.details)}>
              <div className={styles.title}>{e.title[i18n.currentLocale]}</div>
              <div className={styles.note}>{e.note[i18n.currentLocale]}</div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )

}