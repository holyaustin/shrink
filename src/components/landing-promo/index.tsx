import styles from '@/styles/home.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Image } from '@nextui-org/react'


const LandingPromoComponent = () => {
    const sliderGIFSettings = {
        dots: false,
        slieToScroll: 1,
        slidesToShow: 1,
        vertical: false,
        initialSlide: 0,
        rows: 1,
        slidesPerRow: 2,
        autoplaySpeed: 2000,
        autoplay: true,
        speed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 501,
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                }
            }
        ]
    }
    const imgs = [
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWYzYndrYnB3NHIwaXR4YTFnaHJvZ2R2am8xZjZoa3drMXJzNDB4OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriOdaziBUn6KfTjy/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGlibHpueW9qaWt2Y2U3YzZ4dDJ4cWlkazRzZjVnOWN0dTJlbG5tciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uk5PGCpvkSi0oExEMW/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTNodXptYXAwa2R0am94c2h6ZmdnODNlcGpxMGR0eXNjYTYybDEyYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iOYzDFf3byS3wfTfof/giphy-downsized-large.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjAxc3E4a2dmaHdhZzRtam9laGFpMHp4OW51ZjJqYmVyYnp6bms1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1fZbkjbLGysGtFABtI/giphy-downsized-large.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZ1YXQwMGRwbGlibnZnOTMxNTBmeDY4a2pzcnM0dmQ5NnNqYjlqbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h2MLtoOjxtkGY/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajNscHhxeXhxam5neGRvODM2ZjBtMXRraHRkY243NGcwbGE2cWlyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rHdQBnhjFw2SkriL17/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2c0N3Blemxrbjg3NW10cnZmeHR5ZXNoOHQ0NHpzYTE4M2toZGp5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwFhUCOXOJfuttC/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJ4bTVxcTd0aDRxbmlkaWl0NjRrcWk3eHU3dXFkc3NxazJiN3czOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JrMw8slLfKJvq6RhTQ/giphy-downsized-large.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZ2Z21id2E5aDh1ZHdud3M0OHgyYmZwanZndmRkNHgxbHk5eG1vbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FhKuScBgdPf5EgY37e/giphy-downsized-large.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGdhandwcW95bGYyMmRjcTZ6N3cyNHhnOHlxZnA2NXg0bml0MmNxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jzjmQdhfMEY5W/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVtdWMyNTI4OHdjaGNkZWQ2c2p5MDJpc2p3czAwOWJqa2E0ajBwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv650ozpBEDptSg/giphy.gif',
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDFyanlpcG1jeHB5YXJuZHU1eXVpNWMwMDM2OGR5MHg2dmRjbHd3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26uf2dYBreLiLiK5O/giphy.gif'


    ]

    return (
        <Slider className={styles.slider} {...sliderGIFSettings}>
            {
                imgs.map((img, index) => {
                    return <div key={index}><Image loading='lazy' radius='sm' src={img} alt='' /> </div >
                })
            }
        </Slider >
    )
}

export default LandingPromoComponent