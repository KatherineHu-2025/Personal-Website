import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <Marquee gradient={false} speed={50}>
        This website is under construction. More details to be added. It will be prettier!
      </Marquee>
    </div>
  );
};

const styles = {
  bannerContainer: {
    width: '100%',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '50px',
  },
};

export default Banner;