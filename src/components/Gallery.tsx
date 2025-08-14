import { useState } from "react";

export default function Gallery(){
    const [currInd, setCurrInd] = useState<number>(0);
    const changeSlide = (direction:number) => {
        let newIndex = currInd + direction;
        if(newIndex < 0){
        newIndex = galleryItems.length - 1;
        }
        else if(newIndex > galleryItems.length - 1){
        newIndex = 0;
        }
        setCurrInd(newIndex);
    }
    const galleryItems = [
        {
        img:         'image-hero-1.jpg',
        title:       'Discover innovative ways to decorate',
        description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        },
        {
        img:         'image-hero-2.jpg',
        title:       'We are available all across the globe',
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
        img:         'image-hero-3.jpg',
        title:       'Manufactured with the best materials',
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]
    return(
        <section className='gallery'>
            <div className='slider-wrapper'>
                <div className='arrows'>
                    <button className='arrows__prev' onClick={() => changeSlide(-1)}>
                        <img src="icon-angle-left.svg"  alt="" />
                    </button>
                    <button className='arrows__next' onClick={() => changeSlide(1)}>
                        <img src="icon-angle-right.svg" alt="" />
                    </button>
                </div>
                <div className="slider">
                    <div className="slides" style={{ transform: `translateX(-${currInd * (100/3)}%)`}}>
                        { galleryItems.map((obj, index) => {
                            return(
                                <picture className='slide' key={index}>
                                    <source srcSet={"mobile-" + obj.img} media="(max-width: 450px)"/>
                                    <img src={"desktop-" + obj.img}  />
                                </picture>
                            )}) 
                        }
                    </div>
                </div>
            </div>
        
            <div className='gallery__content'>
                <div className="gallery__content-wrapper">
                    <div className='gallery__content-text-block'>
                        <h1 className='gallery__content-title'>{galleryItems[currInd].title}</h1>
                        <p className='gallery__content-description'>{galleryItems[currInd].description}</p>
                    </div>
                    <div className='gallery__content-button-shop'>
                        <p>shop now</p>
                        <button>
                            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="nonzero" d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}