import BannerBg from '@/public/assets/image/BannerBg.png';

import NavbarContainer from '../../shared/Navbar/NavbarContainer';

const Banner = () => {
    return (
        <section className="md:px-10 py-5" style={{backgroundImage: `url(${BannerBg.src})`, backgroundSize: 'cover',   height: '80vh',    backgroundPosition: 'center', width: '100%',
        }}>
            <NavbarContainer/>
        </section>
    );
};

export default Banner;
