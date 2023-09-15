import React from 'react'
import Testimonial from './Testimonial'
import woman from "../../img/woman.jpeg"


const TestimonialsSection = () => {
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, laboriosam doloremque libero quos nobis voluptatibus itaque vel qui deserunt adipisci?"
  const name = "May Andersons"
  const role = "Workcation, CTO"
  const photo = woman

  return (

    <div className="TestimonialsSection">
      <h1>Testimonials</h1>
      <div className="testimonials">
        <Testimonial text={text} name={name} role={role} photo={photo} />
        <Testimonial text={text} name={name} role={role} />
      </div>
    </div>
  )
}

export default TestimonialsSection
