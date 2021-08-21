import React, { useState } from 'react';
import googlePlay from '../../images/googleplay.png';
import { useDispatch, useSelector } from 'react-redux';
import { Popup } from 'reactjs-popup';
import { useMediaQuery } from 'react-responsive';
import { findLang, headerTitle } from '../../utlis/helpers';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import menuIcon from '../../images/menuIcon.png';
import './navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);
  const changeLang = 'CHANGE_LANG';
  const isTablet = useMediaQuery({ maxWidth: 769 });
  const [open, setOpen] = useState(false);
  const SHOW_MENU = 'SHOW_MENU';

  const langsList = (
    <ul className="navbar-langs">
      <li
        className={`navbar-langs__item ${
          lang === 'uz' ? 'navbar-langs__active' : ''
        }`}
        onClick={() => {
          dispatch({
            type: changeLang,
            payload: 'uz',
          });
          setOpen(false);
        }}
      >
        O’zbekcha
      </li>
      <li
        className={`navbar-langs__item ${
          lang === 'ru' ? 'navbar-langs__active' : ''
        }`}
        onClick={() => {
          dispatch({
            type: changeLang,
            payload: 'ru',
          });
          setOpen(false);
        }}
      >
        Русский
      </li>
      <li
        className={`navbar-langs__item ${
          lang === 'en' ? 'navbar-langs__active' : ''
        }`}
        onClick={() => {
          dispatch({
            type: changeLang,
            payload: 'en',
          });
          setOpen(false);
        }}
      >
        English
      </li>
    </ul>
  );

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-items">
          <p className="navbar-title">{headerTitle(lang)}</p>
          {isTablet ? (
            <>
              <div
                onClick={() => {
                  dispatch({
                    type: SHOW_MENU,
                  });
                }}
              >
                <img
                  style={{ width: '35px', height: '35px' }}
                  src={menuIcon}
                  alt="menu icon"
                />
              </div>
              <Link to="/">
                <div>
                  <img style={{ width: '120px' }} src={logo} alt="logo" />
                </div>
              </Link>
            </>
          ) : null}
          <div className="navbar-section">
            <a
              href="https://play.google.com/store/apps/details?id=uz.telecom.exam2021"
              target="_blank"
              rel="noreferrer"
              className="navbar-google"
            >
              <img src={googlePlay} alt="google play" />
            </a>
            {isTablet ? (
              <Popup
                trigger={
                  <div className="navbar-langs__active mr-20">
                    {findLang(lang)}
                  </div>
                }
                open={open}
                position="bottom center"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: '0px', border: 'none' }}
                arrow={false}
              >
                {langsList}
              </Popup>
            ) : (
              langsList
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
