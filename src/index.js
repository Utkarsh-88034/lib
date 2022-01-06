import React, { useEffect, useMemo } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  useEffect(() => {
    console.log('hello')
  })
  const newText = useMemo(() => {
    return 'noice'
  }, [])
  console.log(newText)
  return <div className={styles.test}>Example Component: {text}</div>
}
