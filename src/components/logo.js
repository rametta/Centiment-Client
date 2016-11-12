import React from 'react';

const style = {
  width: '46%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Logo = props => {
  return(
    <div className="wrapper">
      <section className="stage-0">
        <div className="logo">
          <div className="elipse elipse1"></div>
          <div className="elipse elipse3"></div>
          <div className="elipse elipse6"></div>
          <div className="elipse elipse8"></div>
          <div className="title">CENTIMENT</div>
          <div className="inner-circle"></div>
        </div>
      </section>
    </div>
  );
}

module.exports = Logo;