import { useEffect } from 'react'
import { showSuccessMsg } from '../services/event-bus.service'

export function AppFooter () {

    useEffect(() => {
        // component did mount when dependancy array is empty
    }, [])

    return (
        <footer className='footer container'>
            <div className='footer-content'>
                <p className='footer-text'>
                    Asaf Erdman 2024
                </p>
            </div>
        </footer>
    )

}