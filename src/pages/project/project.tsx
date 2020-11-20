import * as React from 'react';
import './style.scss';

import dummyImage from '../../assets/images/dummy.png'
import LanguageIcon from '../../components/language-icon/LanguageIcon';

interface IProjectProps {
}

const Project: React.FunctionComponent<IProjectProps> = (props) => {
  const data = Array(5).fill(0);
  return (
    <>
      <div>
        <div className="heading">
          <h1>My Projects</h1>
        </div>
        <div className="row project-container">
          <div className="col card-container">
            {data.map((v, i) => (
              <div className="card" key={i}>
                <div className="card-img">
                  <picture>
                    <img src={dummyImage} alt="project name" />
                  </picture>
                </div>

                <a href="/" className="card-title">
                  Res.to
                </a>
                <div className="card-description">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            ))}


          </div>

          {/* detail */}
          <div className="col detail-container">
            <div className="detail-image">
              <picture>
                <img src={dummyImage} alt="Flowers" />
              </picture>
            </div>
            <div className="detail-description-container">
              <h2 className="detail-title">Res.to</h2>
              <p className="detail-project">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nisi ab natus sunt reiciendis consectetur commodi?
              </p>
              <h3 className="detail-subtitle">
                Story
              </h3>
              <p className="detail-story">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, ea aliquam animi veniam quae ex culpa excepturi dolores reiciendis iure.
              </p>
              <h3 className="detail-subtitle">
                Technology
              </h3>
              <div className="detail-tech-container">
                <LanguageIcon name="css3" />
                <LanguageIcon name="sass" />
              </div>
              <h3 className="detail-subtitle" >
                See my other project
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
