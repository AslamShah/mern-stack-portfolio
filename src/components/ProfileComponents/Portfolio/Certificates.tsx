import { ReactNode } from 'react';

import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

import { AchievementsIcon, Html5Logo, JSLogo, ReactLogo } from '@/icons';

export function Certificates() {
  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Certificates</h3>
        <Button className='font-semibold text-primary hover:bg-border'>
          Add new certificate
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-5'>
        {certs.map((cert, idx) => (
          <CertificateCard key={idx} certificate={cert} />
        ))}
      </div>
    </div>
  );
}

function CertificateCard(props: CertificateCardProps) {
  return (
    <Card>
      <div className='flex flex-col gap-4'>
        {props.certificate.logo}
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-bold'>{props.certificate.title}</h3>
          <p className='text-secondary'>
            Issued on {props.certificate.issuedOn.toDateString()}
          </p>
          <p className='cursor-pointer font-bold text-secondary'>
            See credentials
          </p>
        </div>
      </div>
    </Card>
  );
}

interface CertificateType {
  title: string;
  issuedOn: Date;
  logo: ReactNode;
}

type CertificateCardProps = {
  certificate: CertificateType;
};

const certs: CertificateType[] = [
  {
    title: 'Advanced theoretical Javascript',
    issuedOn: new Date(),
    logo: <JSLogo width='40' height='40' />,
  },
  {
    title: 'HTML/CSS',
    issuedOn: new Date(),
    logo: <Html5Logo width='40' height='40' />,
  },
  {
    title: 'Build a decentralized to-do application',
    issuedOn: new Date(),
    logo: <AchievementsIcon width='40' height='40' />,
  },
  {
    title: 'ReactJS',
    issuedOn: new Date(),
    logo: <ReactLogo width='40' height='40' />,
  },
];
