import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

const PortfolioSection = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const portfolioItems = data?.portfolioItems || [];

  const getData = (img_link, title, sub_title) => {
    setTempData({
      img: img_link,
      title: title,
      subTitle: sub_title
    });
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title="Portfolio" />
        <div className="container">
          <div className="row">
            {portfolioItems.slice(0, visibleCount).map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
          </div>
          {visibleCount < portfolioItems.length && (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal && (
        <Modal
          img={tempData.img}
          title={tempData.title}
          subTitle={tempData.subTitle}
          modalClose={modalClose}
        />
      )}
    </>
  );
};

PortfolioSection.propTypes = {
  data: PropTypes.object
};

export default PortfolioSection;
