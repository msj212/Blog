import { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Iconbox from '../components/Iconbox/Iconbox';
import Skill from '../components/Skill/Skill';
import Resume from '../components/Resume/ResumeSection';
import BlogSection from '../components/Blog/BlogSection';
import ReviewSection from '../components/Review/ReviewSection';
import Contact from '../components/Contact/Contact';
import PortfolioSection from '../components/Protfolio/PortfolioSection';

const Home = () => {
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [serviceData, setServiceData] = useState([]);
  const [skillData, setSkillData] = useState([]);
  const [resumeData, setResumeData] = useState({});
  const [portfolioDataList, setPortfolioData] = useState([]);
  const [BlogDatalist, setBlogData] = useState({});
  const API_URL = "https://jayamaniblogbackend.stss.in/Routes.php?routes=";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeResponse = await axios.get(`${API_URL}  `);
        if (homeResponse.data.status === "201") {
          setHomeData(homeResponse.data.data);
        }
        const aboutResponse = await axios.get(`${API_URL}About`);
        if (aboutResponse.data.status === "201") {
          setAboutData(aboutResponse.data.data);
        }
        const serviceResponse = await axios.get(`${API_URL}Service`);
        if (serviceResponse.data.status === "201") {
          setServiceData(serviceResponse.data.data);
        }
        const skillResponse = await axios.get(`${API_URL}Skill`);
        if (skillResponse.data.status === "201") {
          setSkillData(skillResponse.data.data);
        }
        const resumeResponse = await axios.get(`${API_URL}Resume`);
        if (resumeResponse.data.status === "201") {
          setResumeData(resumeResponse.data.data);
        }
        const portfolioResponse = await axios.get(`${API_URL}Portfolio`);
        if (portfolioResponse.data.status === "201") {
          setPortfolioData(portfolioResponse.data.data);
        }
        const BlogResponse = await axios.get(`${API_URL}Blog`);
        if (BlogResponse.data.status === "201") {
          setBlogData(BlogResponse.data.data.blogData);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);

  const {reviewData, contactData, socialData } = data;

  return (
    <>
      <Hero data={homeData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />
      <Iconbox data={{ services: serviceData }} data-aos="fade-right" />
      <Skill data={{ skillData }} data-aos="fade-right" />
      <Resume data={{ resumeData }} data-aos="fade-right" />
      <PortfolioSection data={{portfolioItems:portfolioDataList}} data-aos="fade-right" />
      {/* <ReviewSection data={reviewData} data-aos="fade-right" /> */}
      <BlogSection data={BlogDatalist} data-aos="fade-right" /> 
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  );
};

export default Home;
