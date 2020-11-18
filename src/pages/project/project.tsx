import * as React from 'react';
import './style.scss';

interface IProjectProps {
}

const Project: React.FunctionComponent<IProjectProps> = (props) => {
  return (
    <>
      <div>
        <div className="heading">
          <h1>Project page</h1>
        </div>
        <div className="row">
          <div className="col">
            kiri
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
