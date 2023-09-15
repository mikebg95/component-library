import React from 'react'
import Card from './Card'

const CardsSection = () => {
    const title = "Easy Deployment"
    const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, dolorem! Sit aspernatur assumenda iste! Illo?"

    return (
        <div className="CardsSection">
            <h1>Cards</h1>
            <div className="cards">
                <Card title={title} text={text} />
                <Card title={title} text={text} />
            </div>
        </div>
    )
}

export default CardsSection
