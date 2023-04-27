import Header from '@common/header/header';
import Footer from '@common/footer/footer';

const BaseLayour = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-14  min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayour;
