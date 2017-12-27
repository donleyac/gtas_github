import React from 'react';
export const JumbotronInst = (props) => {
  const style = {
    background: props.bgColor + '  url('+props.background +')',
    'backgroundPosition': 'left center',
    'backgroundRepeat': 'no-repeat',
    'backgroundAttachment': 'fixed',
  };
  return(
    <div style={style} className="banner">
      <div className="banner-title">
        <img alt="bannerImg" className="banner-img" src={props.logo} />
        <h1>{props.title}</h1>
      </div>
      <h2>{props.subtitle}</h2>
      <p>{props.children}</p>
    </div>
  )
}
