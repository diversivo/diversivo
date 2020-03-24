import React from 'react'
import PropTypes from 'prop-types';

const MainSecondary = ({title, img, alt}) => (

    <div className="content">
                <div className="main-secondary">
                    <h1>{title}</h1>
                    <img src={img} alt={alt}></img>
                </div>
    </div>

)

MainSecondary.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string
}


MainSecondary.defaultProps = {
    title: "Titulo",
    img: "",
    alt: "Diversivo - no alt"
}

export default MainSecondary