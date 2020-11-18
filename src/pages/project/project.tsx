import * as React from 'react';
import './style.scss';

interface IProjectProps {
}

const Project: React.FunctionComponent<IProjectProps> = (props) => {
  return (
    <>
      <div>
        <div className="heading">
          <h1>My Projects</h1>
        </div>
        <div className="row">
          <div className="col card-container">
            <div className="card">
              <div className="card-img">
                <picture>
                  <img src="a" alt="project name" />
                </picture>
              </div>
              <h2 className="card-title">
                Res.to
              </h2>
              <span className="card-date"> 
                20-06-2002
              </span>
              <div className="card-description">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>
          <div className="col">
            kanan
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
