import React from 'react'
import FoodyIcon from '../../../assets/icons/logoFooter.svg'
import StyleLogoHed from '../style/LoginHead.module.css'
import LanguageBox from '../../common/components/LanguageBox/LanguageBox'

function LogHeader() {
    return (
        <header className={StyleLogoHed.header}>
            <div className={StyleLogoHed.leftSection}>
                <img className={StyleLogoHed.logoIcon} src={FoodyIcon} alt="Foody" />
            </div>
                <LanguageBox
                className={StyleLogoHed.lang}
                />
        </header>
    )
}

export default LogHeader