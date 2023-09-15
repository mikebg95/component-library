import React from 'react'
import Banner from './Banner'

const BannersSection = () => {
    const types = ["success", "warning", "error", "neutral"]
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae deleniti voluptatibus porro ad nulla!"

    return (
        <div class="BannersSection">
            <h1>Banners</h1>
            <div className="banners">
                {types.map(type => {
                    return (
                        <>
                            <Banner
                                type={type}
                                text={text}
                            />
                            <Banner
                                type={type}
                            />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default BannersSection
