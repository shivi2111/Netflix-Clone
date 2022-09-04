import React from 'react'

export default function Question({title,content,isOpen,clickHandler,index}) {
  return (
    <div className='question'>
      <div className='question-main-display' onClick={()=>{clickHandler(index)}}>
        <h2>{title}</h2>
        <svg className={`cross ${(isOpen)?"cross-open":""}`} id="thin-x" viewBox="0 0 26 26" fill='white' focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
      </div>
      <div className={`question-content-display ${(!isOpen)?"hide":""}`}>
        {content}
      </div>
    </div>
  )
}
