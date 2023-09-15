import React from 'react'
import { ReactComponent as SuccessIcon } from "../../img/icons/success.svg"
import { ReactComponent as WarningIcon } from "../../img/icons/warning.svg"
import { ReactComponent as DangerIcon } from "../../img/icons/danger.svg";
import { ReactComponent as NeutralIcon } from "../../img/icons/neutral.svg";

const Banner = ({ type, title, text }) => {
  console.log(type)

  let icon, headerText



  switch (type) {
    case "success":
      icon = < SuccessIcon />

      headerText = title ? title : "Congratulations"
      break
    case "warning":
      icon = < WarningIcon />
      headerText = title ? title : "Attention"
      break
    case "error":
      icon = < DangerIcon />
      headerText = title ? title : "There is a problem with your application"
      break   
    case "neutral":
      icon = < NeutralIcon />
      headerText = title ? title : "Update available"
      break
  }

  // const icon = < IoIosCheckmarkCircle />

  return (
    <div className={`Banner ${type}`}>
      <div className="heading">
        {icon}
        {headerText}
      </div>
      {text && <div className="content">
        {text}
      </div>}
    </div>
  )
}

export default Banner
