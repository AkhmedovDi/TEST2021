import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import googlePlay from '../../images/googleplay.png';
import CameraList from './cameraList';
import { useMediaQuery } from 'react-responsive';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getCameras } from '../../api/regions';
import './player.scss';

const Player = () => {
  const isTablet = useMediaQuery({ maxWidth: 769 });
  const { data, loading, err } = useSelector((state) => state.regions);
  const lang = useSelector((state) => state.lang);
  const location = useLocation();
  const [cameras, setCameras] = useState({
    data: [],
    loading: false,
    err: null,
  });
  const [selectedLoc, setSelectedLoc] = useState({
    region: {
      uz: '',
      ru: '',
      en: '',
    },
    object: {
      uz: '',
      ru: '',
      en: '',
    },
    selected: false,
  });
  const { id, region } = useParams();
  const history = useHistory();
  const [selectedCamera, setSelectedCamera] = useState({
    uz: 'Kamera 1',
    ru: 'Камера 1',
    en: 'Camera 1',
    vidoe: '',
  });

  useEffect(() => {
    if (data?.length) {
      if (location.pathname === '/') {
        let id = data[0].places[0].id;
        setSelectedLoc({
          region: {
            uz: data[0]?.uz || '',
            ru: data[0]?.ru || '',
            en: data[0]?.en || '',
          },
          object: {
            uz: data[0].places[0].uz,
            ru: data[0].places[0].ru,
            en: data[0].places[0].en,
          },
        });

        getCameras(id)
          .then((res) => {
            setCameras({
              data: res.data.object || [],
              loading: false,
              err: null,
            });
            if (res.data.object?.length) {
              setSelectedCamera(res.data.object[0]);
            }
          })
          .catch((err) => {
            setCameras({
              data: [],
              loading: false,
              err: err.toString(),
            });
          });
      } else {
        setSelectedLoc(() => {
          const _region = data.find((object) => object.title === region);
          let object;
          if (_region) {
            object = _region.places.find((loc) => loc.id === id);
          }

          return {
            region: {
              uz: _region?.uz || '',
              ru: _region?.ru || '',
              en: _region?.en || '',
            },
            object: {
              uz: object?.uz || '',
              ru: object?.ru || '',
              en: object?.en || '',
            },
            selected: true,
          };
        });
      }
    }
    // eslint-disable-next-line
  }, [id, data]);

  useEffect(() => {
    if (id && !isNaN(id) && region) {
      getCameras(id)
        .then((res) => {
          setCameras({
            data: res.data.object || [],
            loading: false,
            err: null,
          });
          if (res.data.object?.length) {
            setSelectedCamera(res.data.object[0]);
          }
        })
        .catch((err) => {
          setCameras({
            data: [],
            loading: false,
            err: err.toString(),
          });
        });
    } else {
      history.push('/');
    }
  }, [id, region, history]);

  if (err) {
    return <h1>Tizimda Xatolik</h1>;
  }

  return (
    <div className="container">
      <div className="player">
        <ReactPlayer
          url={selectedCamera.video}
          playing
          controls
          width="100%"
          height="100%"
          //   playIcon={<img src={playIcon} alt="play" />}
        />
        {/* <LionPlayer
          controls
          sources={[
            {
              src: selectedCamera.video,
              type: 'application/x-mpegURL',
            },
          ]}
          autoplay="muted"
        /> */}
      </div>
      <div className="location">
        <p>
          <span className="location-region">
            {loading ? <Skeleton /> : selectedLoc.region[lang]}
          </span>{' '}
          {!loading && <span style={{ color: '#939CA0' }}>|</span>}{' '}
          <span className="location-object">
            {loading ? <Skeleton /> : selectedLoc.object[lang]}
          </span>{' '}
          <span style={{ color: '#939CA0' }}>| {selectedCamera[lang]}</span>
        </p>
      </div>
      <CameraList
        lang={lang}
        cameras={cameras}
        setSelectedCamera={setSelectedCamera}
        id={id}
      />

      {isTablet && (
        <div style={{ textAlign: 'center', marginTop: 25 }}>
          <a
            href="https://play.google.com/store/apps/details?id=uz.telecom.exam2021"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googlePlay} alt="google play" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Player;
