import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section proejct-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, praesentium? Minima beatae sint molestiae, temporibus nostrum natus, a eius inventore in cupiditate accusantium sit ab odit? Eveniet iusto dolorem dolor.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd of September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
