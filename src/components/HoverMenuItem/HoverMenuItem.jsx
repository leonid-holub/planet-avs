import { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { useTranslation, Trans } from "react-i18next";

import style from './HoverMenuItem.module.scss';

const HoverMenuItem = ({label, array, linkStyle, paragraphStyle}) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  const { t } = useTranslation();

    return (
      <>
        <NavLink className={linkStyle} to={label} ref={ref} {...anchorProps}><p className={paragraphStyle}><Trans>{t(`nav.${label}`)}</Trans></p></NavLink> 
        <ControlledMenu
          {...hoverProps}
          {...menuState}
          anchorRef={ref}
          arrow={true}
          onClose={() => toggle(false)}
        >{array.map((item) => <MenuItem key={item}>{t(`${label}.${item}`)}</MenuItem>)}
        </ControlledMenu>
      </>
    );
  };

  export default HoverMenuItem;