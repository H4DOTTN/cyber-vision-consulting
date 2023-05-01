import Button from '@/components/common/button/Button';
import SectionHeader from '@/components/common/section-header';
import ReadyIcon from '@icons/ready.svg';
const Ready = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8">
      <div className="w-full max-w-3xl">
        <div className="ready" />
      </div>
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <SectionHeader
          title="ARE YOU READY?"
          variant="secondary"
          subtitle="Explore Everything Cyber Vision Consulting Has To Offer"
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
          <Button>lreom ipsum </Button>
          <Button variant="secondary">lorem ipsum</Button>
        </div>
      </div>
    </section>
  );
};

export default Ready;
