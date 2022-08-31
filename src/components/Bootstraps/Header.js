import React from "react";

const header = ({dark , children , className, headerClassName}) => {
    dark = !!dark ? "dark" : "light" ;
  return (
    <nav className={`navbar navbar-${dark} bg-${dark}${ className ? " "+className : ''}`}>
      <div className={`container-fluid ${ headerClassName ? " "+headerClassName : ''}`}>
        <span className="navbar-brand mb-0 h1">{children}</span>
      </div>
    </nav>
  );
};

export default header;
