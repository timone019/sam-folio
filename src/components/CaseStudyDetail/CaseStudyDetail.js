import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../../portfolio';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="case-study-not-found">
        <h2>Case Study Not Found</h2>
        <p>The requested case study could not be found.</p>
        <Link to="/case-studies" className="back-link">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="case-study-detail">
      <div className="case-study-detail__header">
        <Link to="/#case-studies" className="back-link">
          ← Back
        </Link>
        <h1 className="case-study-detail__title">{caseStudy.title}</h1>
      </div>

      <div className="case-study-detail__content">
        <div className="case-study-detail__pdf-container">
          <iframe
            src={`${caseStudy.pdf}#view=fitH`}
            title={caseStudy.title}
            className="case-study-detail__pdf"
            loading="lazy"
          />
        </div>

        <div className="case-study-detail__actions">
          <a
            href={caseStudy.pdf}
            download={`${caseStudy.id}-case-study.pdf`}
            className="download-button"
          >
            Download PDF
          </a>
          {caseStudy.projectLink && (
            <a
              href={caseStudy.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {caseStudy.id === 'chat-city' ? 'See Code ↗' : 'View Live Project ↗'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
