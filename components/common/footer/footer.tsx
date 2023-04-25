import { PATHS } from '@/routes/routes';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className=" w-screen h-full bg-primary flex flex-col  text-white">
      <div className="flex flex-col  md:flex-row gap-2 justify-between items-center px-8 py-4">
        <ul className="flex flex-row gap-2">
          <li>Privacy Policy</li>
          <li>Term and Conditions</li>
        </ul>
        <p>© 2023 All Rights Reserved.</p>
      </div>
      <section className="flex flex-col md:flex-row justify-between items-start gap-10  px-8 container ">
        <div>
          <h3 className="text-lg font-bold mb-8">Logo</h3>
          <ul>
            <li>
              <p className="max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                malesuada, nisl eget ultricies tincidunt, nunc elit lacinia
                mauris, eget aliquet nisl nisl eget dolor. Sed malesuada, nisl
              </p>
            </li>
            <li>
              <button>Contact US</button>
            </li>
          </ul>
        </div>
        <ListItems
          title="Digital Transformation"
          items={[
            'Mobile Application',
            'Web Application',
            'Blockchain',
            'Data Science & analytics',
            'Artificial Intelligence',
            'Internet.Of.Things. (IOT)',
          ]}
        />

        <ListItems
          title="Product Development"
          items={[
            'Software Development',
            'Architecture & Design',
            'Legacy System Migration',
            'Application Modernization',
            'Quality Assurance & Testing',
          ]}
        />
        <ListItems
          title="Consulting"
          items={[
            'Technology Consulting',
            'Agile & DevOps',
            'IT Outsourcing',
            'Business Automation',
          ]}
        />

        <div>
          <h3 className="text-lg font-bold mb-8">Socials</h3>

          <ul className="flex flex-col gap-2">
            <SocialItems
              title="Facebook"
              Icon={BsFacebook}
              link={PATHS.social.facebook}
            />
            <SocialItems
              title="Instagram"
              Icon={BsInstagram}
              link={PATHS.social.instagram}
            />
            <SocialItems
              title="Linkedin"
              Icon={BsLinkedin}
              link={PATHS.social.linkedin}
            />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;

const SocialItems = ({
  title,
  Icon,
  link,
}: {
  title: string;
  Icon: IconType;
  link: string;
}) => {
  return (
    <li>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-1 items-center"
      >
        <Icon />
        <span>{title}</span>
      </Link>
    </li>
  );
};

const ListItems = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-8">{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
