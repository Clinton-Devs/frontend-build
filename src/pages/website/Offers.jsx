import React from "react";
import WebsiteNav from "../../components/navbar/WebsiteNav";
import styled from "styled-components";

import project_card_1 from "../../assets/offers/project_card_1.png";
import project_card_2 from "../../assets/offers/project_card_2.png";
import project_card_3 from "../../assets/offers/project_card_3.png";
import project_card_4 from "../../assets/offers/project_card_4.png";
import project_card_5 from "../../assets/offers/project_card_5.png";
import project_card_6 from "../../assets/offers/project_card_6.png";
import project_card_7 from "../../assets/offers/project_card_7.png";
import project_card_8 from "../../assets/offers/project_card_8.png";
import project_card_9 from "../../assets/offers/project_card_9.png";

import Footer from "../../components/Footer";

const Offers = () => {
  return (
    <OffersStyle>
      <WebsiteNav activePage="offers" />
      <div className="offers-container">
        <section id="section-1" className="section-1">
          <h3>Offers</h3>
          <p className="paragraph">
            We understand that investing in property is a significant decision,
            and we are here to ensure that it's not only rewarding but also
            accessible. Our curated offers are designed to provide our clients
            with exceptional opportunities to own their dream property.
          </p>
        </section>

        <section className="section-2">
          <div className="offers-header">
            <h3>Ongoing Projects</h3>
            <p className="text">We have got lots of offers for you</p>
          </div>

          <div className="offers-grid">
            <div className="gallery-image">
              <img src={project_card_1} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_3} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_4} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_5} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_6} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_7} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_8} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_9} alt="" />
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="offers-header">
            <h3>Completed Projects</h3>
            <p className="text">We have got lots of offers for you</p>
          </div>

          <div className="offers-grid">
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
            <div className="gallery-image">
              <img src={project_card_2} alt="" />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </OffersStyle>
  );
};

export default Offers;

const OffersStyle = styled.div`
  .offers-container {
    padding: 120px 0px;
    h3 {
      font-weight: 500;
      font-size: 48px;
      letter-spacing: 0.001em;
      color: #192861;
      margin-bottom: 40px;
    }
    .paragraph {
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0.001em;
      margin-bottom: 40px;
    }

    .section-1 {
      margin-bottom: 215px;
      padding: 0px 112px;
      .section-1-img {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        img {
          width: 100%;
          object-fit: cover;
        }
        margin-bottom: 40px;
      }
    }

    .section-2 {
      padding: 0px 112px;
      margin-bottom: 150px;
      .offers-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 92px;
        h3 {
          font-weight: 500;
          font-size: 48px;
          letter-spacing: 0.001em;
          color: #192861;
          margin-bottom: 16px;
        }
        .text {
          font-weight: 400;
          font-size: 20px;
          letter-spacing: 0.001em;
          margin-bottom: 56px;
        }
      }

      .offers-grid {
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        margin: 0px auto;
        place-items: center;
        .gallery-image {
          width: 400px;
          height: 450px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1500px) {
    .offers-container {
      h3 {
      }
      .paragraph {
      }
      .section-1 {
      }

      .section-2 {
        .images-header {
          h3 {
          }
          .text {
          }
        }

        .offers-grid {
          grid-template-columns: 1fr 1fr;
          row-gap: 16px;
          place-items: center;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .offers-container {
      padding: 10px;
      h3 {
        font-size: 30px;
      }
      .paragraph {
        font-size: 16px;
      }
      .section-1 {
        margin-bottom: 115px;
        padding: 0px;
      }

      .section-2 {
        padding: 0px;

        .offers-header {
          h3 {
            font-weight: 500;
            font-size: 30px;
          }
          .text {
            font-weight: 400;
            font-size: 16px;
          }
        }

        .offers-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .offers-container {
      h3 {
      }
      .paragraph {
      }
      .section-1 {
      }

      .section-2 {
        .images-header {
          h3 {
          }
          .text {
          }
        }

        .offers-grid {
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;
