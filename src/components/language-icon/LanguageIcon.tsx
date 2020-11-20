import React, { ReactElement } from 'react';
import icon from '../../assets/icons/index';
import './_languageIcon.scss'

interface Props {
  name: string;
  size?: string;
}

function LanguageIcon({ name, size = '32' }: Props): ReactElement {
  return (
    <div className="lang-icon-container" style={{
      height: `${size}px`,
      width: `${size}px`,
    }
    }>
      <img className="lang-icon" src={name ? icon[name] : 'no icon name set'} alt={name ? name : 'no icon name set'} />
    </div >
  )
}

export default LanguageIcon

