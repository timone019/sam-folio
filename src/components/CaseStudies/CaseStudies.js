import React from 'react';
import { caseStudies } from '../../portfolio';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';
import './CaseStudies.css';

const CaseStudies = () => {
  if (!caseStudies.length) return null;

  return (
    <section id='case-studies' className='section case-studies'>
      <div className='case-studies__container'>
        <h2 className='section__title'>Case Studies</h2>
        <p className='case-studies__subtitle'>
          In-depth explorations of my design and development process
        </p>
        
        <div className='case-studies__grid'>
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
