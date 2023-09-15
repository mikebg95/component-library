import React from 'react'
import { ReactComponent as QuoteIcon } from "../../img/icons/quote.svg"
import logo from "../../img/workcation-logo.svg"
import { ReactComponent as DividerIcon } from "../../img/icons/divider.svg"


const Testimonial = ({ text, name, role, photo }) => {
  return (
    <>
      <div className="Testimonial">

        {photo && <div className="content-with-photo">
          <div className="img-container">
            <img src={photo} alt="" />
          </div>
          <div className="text">
            <QuoteIcon />
            <div className="quote">
              {text}
            </div>
            <div className="name">
              {name}
            </div>
            <div className="role">
              {role}
            </div>
          </div>
        </div>}
        
      </div>
      
      <div className="Testimonial">
        {!photo && <div className="content-no-photo">
          <img src={logo} alt="" />
          <div className="quote">
            {text}
          </div>
          <div className="author">
            <div className="name">
              {name}
            </div>
            <DividerIcon />
            <div className="role">
              {role}
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}

export default Testimonial
