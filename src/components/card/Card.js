import React from 'react'
import { ReactComponent as CloudUploadIcon } from "../../img/icons/cloud-upload.svg"


const Card = ({ title, text }) => {
  return (
    <div className="Card">
        <div className="icon">
            <CloudUploadIcon />
        </div>
        
        <div className="content">
            <div className="title">{title}</div>
            <div className="text">
                {text}
            </div>
        </div>
    </div>
  )
}

export default Card
