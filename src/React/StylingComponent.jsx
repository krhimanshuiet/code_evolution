import React from 'react'
import styles from  './../StyleComponent.module.css';
function StylingComponent(props) {
  return (
    <div>
      <h1 className={`${props.className} ${styles.background}`}>React</h1>
    </div>
  )
}

export default StylingComponent
