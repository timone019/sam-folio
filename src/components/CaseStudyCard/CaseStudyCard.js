import { Link } from 'react-router-dom';
import uniqid from 'uniqid';
import './CaseStudyCard.css';

const CaseStudyCard = ({ caseStudy }) => (
  <Link 
    to={`/case-studies/${caseStudy.id}`} 
    className="case-study-card"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div className="case-study-card__image-container">
      <img 
        src={caseStudy.thumbnail} 
        alt={`${caseStudy.title} thumbnail`} 
        className="case-study-card__image"
      />
    </div>
    <div className="case-study-card__content">
      <h3 className="case-study-card__title">{caseStudy.title}</h3>
      <p className="case-study-card__description">{caseStudy.description}</p>
      <div className="case-study-card__tags">
        {caseStudy.tags.map((tag) => (
          <span key={uniqid()} className="case-study-card__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="case-study-card__link">
        View Case Study
      </div>
    </div>
  </Link>
);

export default CaseStudyCard;
