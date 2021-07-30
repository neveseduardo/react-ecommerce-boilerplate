import { useState } from 'react'
import Icon from 'components/GeneralUI/Icon'
import { data } from 'components/GeneralUI/Carousel/Carousel.js'
import 'components/GeneralUI/Carousel/Carousel.scss'

function Carousel() {

    const [current, setCurrent] = useState(0)
    const length = data.length

    const nextSlide = (e) => {
        e.stopPropagation()
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = (e) => {
        e.stopPropagation()
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className='slider'>
            <a onClick={prevSlide} className="left-arrow"><Icon name="arrow-left" /></a>
            <a onClick={nextSlide} className="right-arrow"><Icon name="arrow-right" /></a>
            <div className="items-wrapper">
                <div className="items">
                    {
                        data.map((item, index) => (
                            <div className={ current === index ? 'item active' : 'item'}><img src={item.image} alt="" /></div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Carousel;