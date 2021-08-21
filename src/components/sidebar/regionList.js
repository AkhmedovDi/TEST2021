import React, { useEffect, useState } from 'react';
import { ReactComponent as NextIcon } from '../../images/next.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRegions } from '../../redux/actionCreators/regions';
import Skeleton from 'react-loading-skeleton';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import { Link, useLocation } from 'react-router-dom';

const RegionList = ({ isTablet, closeMenu }) => {
  const disptach = useDispatch();
  const lang = useSelector((state) => state.lang);
  const [activeIndex, setActiveIndex] = useState(null);
  const { data, loading, err } = useSelector((state) => state.regions);
  const { pathname } = useLocation();

  useEffect(() => {
    disptach(getAllRegions());
  }, [disptach]);

  // console.log(data);

  if (err) {
    return <h2>Tizimda Xatolik!</h2>;
  }

  return (
    <div className="region">
      <ul className="region-list">
        {loading ? (
          Array.from(new Array(12)).map((__, _) => (
            <li className="region-list__item" key={_}>
              <Skeleton height={23} width="255px" />
            </li>
          ))
        ) : isTablet ? (
          <Accordion
            allowZeroExpanded
            onChange={(arr) => {
              if (!arr.length) {
                setActiveIndex(null);
              }
            }}
          >
            {data.map((region, index) => (
              <AccordionItem key={region.title}>
                <AccordionItemState>
                  {({ expanded }) => {
                    if (expanded) {
                      setActiveIndex(index);
                    }
                  }}
                </AccordionItemState>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <li className="region-list__item">
                      {region[lang]}
                      <NextIcon
                        style={{
                          transform:
                            activeIndex === index
                              ? 'rotate(90deg)'
                              : 'rotate(0)',
                        }}
                      />
                    </li>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <ul className="region-objectsMobile">
                    {region.places.map((object, _) => {
                      return (
                        <li
                          key={_}
                          onClick={() => {
                            closeMenu();
                          }}
                          className={`${
                            pathname === '/' + region.title + '/' + object.id
                              ? 'region-objectsMobile__selected'
                              : ''
                          }`}
                        >
                          <Link to={`/${region.title}/${object.id}`}>
                            {object[lang]}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          data.map((region, index) => {
            return (
              <li key={region.title} className="region-list__item">
                {region[lang]}
                <NextIcon />
                <ul
                  className={`region-objects ${
                    data.length - 4 > index
                      ? 'region-objects__top'
                      : 'region-objects__bottom'
                  }`}
                >
                  {region.places.map((object, _) => {
                    return (
                      <li key={_}>
                        <Link to={`/${region.title}/${object.id}`}>
                          {object[lang]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default RegionList;
