import { useRef, useState } from 'react';
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const HoverMenuItem = (label, array) => {
    const ref = useRef(null);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  
    return (
      <>
        <div ref={ref} {...anchorProps}>
          {label}
        </div>
  
        <ControlledMenu
          {...hoverProps}
          {...menuState}
          anchorRef={ref}
          onClose={() => toggle(false)}
        >
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </ControlledMenu>
      </>
    );
  };

  export default HoverMenuItem;