import React from 'react'
import SegmentImg from '../../../assets/icons/segment.svg'
import FoodyIcon from '../../../assets/icons/logoFooter.svg'
import Flag from '../../../assets/images/langEng.svg'
import StyleLogoHed from '../style/LoginHead.module.css'

function LogHeader() {
    return (
        <header className={StyleLogoHed.header}>
            <div className={StyleLogoHed.leftSection}>
                <img className={StyleLogoHed.segmentIcon} src={SegmentImg} alt="Menu" />
                <img className={StyleLogoHed.logoIcon} src={FoodyIcon} alt="Foody" />
            </div>
            <div className={StyleLogoHed.rightSection}>
                <img className={StyleLogoHed.flagIcon} src={Flag} alt="Language" />
            </div>
        </header>
    )
}

export default LogHeader