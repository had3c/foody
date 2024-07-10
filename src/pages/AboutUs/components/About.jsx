import React from 'react'
import StyleAbout from '../style/About.module.css'
import { MenuItem } from './MenuItem'

function About() {
    return (
        <div className={StyleAbout.container}>
            <div className={StyleAbout.aboutSection}>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
            </div>
            <div className={StyleAbout.menuSection}>
                <MenuItem
                    image="/path-to-hamburger-image.jpg"
                    name="Hamburger"
                    price="$5.90"
                />
                <MenuItem
                    image="/path-to-pizza-image.jpg"
                    name="Sausage Pizza"
                    price="$7.90"
                />
                <MenuItem
                    image="/path-to-soup-image.jpg"
                    name="Tomato Soup"
                    price="$7.90"
                />
                <MenuItem
                    image="/path-to-coffee-image.jpg"
                    name="Papa Coffee"
                    price="$1.40"
                />
            </div>
        </div>
    )
}

export default About