import React from 'react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = React.useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }
        , [])



    return (
        <>
            {isVisible ? <a href="#home" className="back-to-top d-flex align-items-center justify-content-center"> <i className="bi bi-arrow-up-short" />
            </a> : ""}

        </>
    )
}
