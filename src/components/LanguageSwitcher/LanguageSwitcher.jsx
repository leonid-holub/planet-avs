import { GB, UA } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setLanguage} from '../../redux/language/language-slice';
import { MenuItem, Menu, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import style from "./LanguageSwitcher.module.scss";



export const LanguagesSwitcher = () => {
    const [lng, setLng] = useState('ua');
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
 
    
    const saveInLocalStorage = (key, value) => {
      try {
        const prepearedValue = JSON.stringify(value);
        localStorage.setItem(key, prepearedValue);
      } catch (error) {
        console.error("Set prepearedValue error: ", error.message);
      }
    };
    
    const loadFromLocalStorage = key => {
      try {
        const parsedValue = localStorage.getItem(key);
        return parsedValue === null ? undefined : JSON.parse(parsedValue);
      } catch (error) {
        console.error("Get parsedValue error: ", error.message);
      }
    };
    
    const handleThemeChange = (lng) => {
          i18n.changeLanguage(lng);
          setLng(lng);
          dispatch(setLanguage(lng));
          saveInLocalStorage("language", lng);
      };
    
    useEffect(() => {
      const currentLanguage = loadFromLocalStorage("language");
      if(currentLanguage) {
        setLng(currentLanguage);
        i18n.changeLanguage(lng);
        return;
      }
      i18n.changeLanguage('en');
      setLng('en');
      saveInLocalStorage("language", lng);
    },[i18n, lng]);
    
    
    return (
        <>
        <Menu className={style.menu} menuButton={<MenuButton className={style.menuButton}>{lng === "en" ? <GB style={{display: "block", width: "100%", height: "auto"}} title="GB"/> : <UA style={{display: "block", width: "100%", height: "auto"}}  title="UA"/>}
          </MenuButton>} transition>
          <MenuItem><button className={style.button} type="button" onClick={() => handleThemeChange('en')}><GB className={style.gbButton} title="GB"/></button></MenuItem>
          <MenuItem><button className={style.button} type="button" onClick={() => handleThemeChange('ua')}><UA className={style.uaButton} title="UA"/></button></MenuItem>
        </Menu>
        </>
      );
    };