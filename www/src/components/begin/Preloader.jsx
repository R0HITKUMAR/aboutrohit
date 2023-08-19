import React from 'react'

export default function Preloader() {
    const [isVisible, setIsVisible] = React.useState(true)

    // Close Preloader on Load
    React.useEffect(() => {
        window.addEventListener('load', () => {
            setIsVisible(false)
        }
            , [])
    }
        , [])


    return (
        <>
            {isVisible ? <div id="preloader"></div> : ""}
        </>

    )
}
