import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/imgs/others/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Food Order App</p>
        <div className='app-download-platforms'>
            <a href='https://play.google.com/store/apps' rel='noreferrer' target='_blank'>
              <img src={assets.play_store} alt='...' />
            </a>
            <a href='https://www.apple.com/store' rel='noreferrer' target='_blank'>
              <img src={assets.app_store} alt='...' />
            </a>
            
        </div>
    </div>
  )
}

export default AppDownload
