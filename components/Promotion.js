import React from 'react'

const Promotion = () => {
  return (
    <>
    <section className="promotion__container">
  <p className="sub-title__text">PROMOTIONS</p>
  <h2 className="title__text">
    OUR <span className="--title__text-underline promotion-text">PACKAGES</span>
  </h2>
  <article className="promotion__wrap">
    <div className="promotion__item">
      <div className="promotion__item-img --item-img-1">
        <div className="promotion__item-sticker-1">
          <img
            className="sticker__img"
            src="https://leloc90.github.io/loveTravel/assets/images/arch.png"
            alt=""
          />
        </div>
      </div>
      <div className="promotion__item-info">
        <div className="promotion__item-head">
          <h5>Berlin</h5>
          <p>
            <i className="bx bx-map" />
            Europe
          </p>
        </div>
        <div className="promotion__item-thema">
          <div className="promotion__item-thema-text">
            <p>CULTURAL</p>
            <p>
              RELAX<span style={{ backgroundColor: "#ffd205" }}>+ 1</span>
            </p>
          </div>
          <div className="promotion__item-thema-price">
            <span>700 $</span>
          </div>
        </div>
        <div className="promotion__item-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            efficitur ante. Donec dapibus dictum scelerisque.
          </p>
        </div>
        <a href="" className="pri-btn promotion-btn-1">
          DETAILS
        </a>
      </div>
    </div>
    <div className="promotion__item">
      <div className="promotion__item-img --item-img-2">
        <div className="promotion__item-sticker-2">
          <img
            className="sticker__img"
            src="https://leloc90.github.io/loveTravel/assets/images/torii-gate.png"
            alt=""
          />
        </div>
      </div>
      <div className="promotion__item-info">
        <div className="promotion__item-head">
          <h5>Hong Kong</h5>
          <p>
            <i className="bx bx-map" />
            Asia
          </p>
        </div>
        <div className="promotion__item-thema">
          <div className="promotion__item-thema-text">
            <p>HISTORY</p>
            <p>
              CULTURAL<span style={{ backgroundColor: "#f76570" }}>+ 1</span>
            </p>
          </div>
          <div className="promotion__item-thema-price">
            <span className="old-price">1000</span>
            <span>500 $</span>
          </div>
        </div>
        <div className="promotion__item-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            efficitur ante. Donec dapibus dictum scelerisque.
          </p>
        </div>
        <a href="" className="pri-btn promotion-btn-2">
          DETAILS
        </a>
      </div>
    </div>
    <div className="promotion__item">
      <div className="promotion__item-img --item-img-3">
        <div className="promotion__item-sticker-3">
          <img
            className="sticker__img"
            src="https://leloc90.github.io/loveTravel/assets/images/golden-gate.png"
            alt=""
          />
        </div>
      </div>
      <div className="promotion__item-info">
        <div className="promotion__item-head">
          <h5>Sanfrancisco</h5>
          <p>
            <i className="bx bx-map" />
            United State
          </p>
        </div>
        <div className="promotion__item-thema">
          <div className="promotion__item-thema-text">
            <p>SPORT</p>
            <p>
              RELAX<span style={{ backgroundColor: "#ba71da" }}>+ 1</span>
            </p>
          </div>
          <div className="promotion__item-thema-price">
            <span>400 $</span>
          </div>
        </div>
        <div className="promotion__item-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            efficitur ante. Donec dapibus dictum scelerisque.
          </p>
        </div>
        <a href="" className="pri-btn promotion-btn-3">
          DETAILS
        </a>
      </div>
    </div>
  </article>
</section>

    
    
    </>
  )
}

export default Promotion