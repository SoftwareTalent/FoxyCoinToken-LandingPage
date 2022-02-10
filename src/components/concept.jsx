export const Concept = (props) => {
  return (
    <div id="concept" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2> Project Concept</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6  intro-img">
            <img src="img/header.png" className="img-header" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 intro-text">
            <p>{props.data ? props.data.paragraph1 : "Loading"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
