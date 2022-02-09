export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row intro-container">
            <div className="col-xs-12 col-md-6 intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <a href="#features" className="btn btn-custom btn-lg page-scroll">
                Get Started
              </a>{" "}
            </div>
            <div className="col-xs-12 col-md-6  intro-img">
              <img src="img/header.png" className="img-header" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
