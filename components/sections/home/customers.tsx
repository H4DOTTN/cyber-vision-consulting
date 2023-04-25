const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
import Slider from 'react-slick';
import { BsGoogle } from 'react-icons/bs';

const CustomersList = [
  {
    logo: '/images/customers/1.png',
    name: 'Google',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Microsoft',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Amazon',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Facebook',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Apple',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Twitter',
  },
  {
    logo: '/images/customers/1.png',
    name: 'Instagram',
  },
  {
    logo: '/images/customers/1.png',
    name: 'LinkedIn',
  },
  {
    logo: '/images/customers/1.png',
    name: 'TikTok',
  },
];

const Customers = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="flex flex-col items-center justify-center mx-auto mb-8  max-w-lg text-center  ">
        <h2 className="text-2xl font-bold text-primary ">Our Customers</h2>
        <p className="text-sm mt-1">
          Trusted by the world´s wide enterprises and start-ups since 2013.
          <br />
          Forged growth partnerships and alliances that enable Optans to create
          a digital ecosystem that accelerates business transformation at scale.
        </p>
      </div>
      <div>
        <Slider
          className="slider center variable-width justify-center"
          {...settings}
        >
          {CustomersList.map((customer, index) => (
            <CustomerItem key={index} {...customer} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CustomerItem = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div className="w-full h-full  p-10 rounded-md  flex  items-center justify-center   ">
      {/* <img src={logo} alt={name} /> */}
      <div className="w-36 shrink-0 aspect-square shadow-md flex flex-col items-center justify-center  text-center gap-2 ">
        <p className="text-sm">{name}</p>
        <div>
          <BsGoogle className="text-4xl text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Customers;
