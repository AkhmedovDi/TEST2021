import React from 'react';
import logo from '../../images/logo.png';
import uztelecom from '../../images/uztelecom.png';
import RegionList from './regionList';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { headerTitleMobile } from '../../utlis/helpers';
// import Drawer from 'rc-drawer';
import './sidebar.scss';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.mobileMenu);
  const isTablet = useMediaQuery({ maxWidth: 769 });
  const CLOSE_MENU = 'CLOSE_MENU';
  const lang = useSelector((state) => state.lang);

  return (
    <>
      <div className={`sidebar ${isOpen && isTablet ? 'sidebar-mobile' : ''}`}>
        <div>
          <div
            className="sidebar-logo"
            style={{ height: isTablet ? 'auto' : '81px' }}
          >
            {isTablet ? (
              <p style={{ textAlign: 'center' }}>
                {headerTitleMobile(lang)}
              </p>
            ) : (
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            )}
          </div>
          <RegionList
            isTablet={isTablet}
            closeMenu={() =>
              dispatch({
                type: CLOSE_MENU,
              })
            }
          />
        </div>
        <div className="support">
          <a href="https://uztelecom.uz" target="_blank" rel="noreferrer">
            <img src={uztelecom} alt="uztelecom" />
          </a>
          <p>
            Supported by <span>UZTELECOM</span>
          </p>
        </div>
      </div>
      {isTablet && isOpen && (
        <div
          onClick={() => {
            dispatch({
              type: CLOSE_MENU,
            });
          }}
          className="sidebar-mask"
        />
      )}
    </>
  );
};

export default Sidebar;
