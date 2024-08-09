export function Education() {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Education</h2>
      <div className='mt-10 flex flex-col space-y-7'>
        {education.map((ed, index) => (
          <EducationCard key={index} education={ed} />
        ))}
      </div>
    </div>
  );
}

function EducationCard({ education }: EducationCardProps) {
  return (
    <div className='flex items-start gap-4'>
      <img className='h-8 w-8' src='/harvard.png' alt='harvard' />
      <div className='flex w-full flex-col gap-3'>
        <h3 className='text-2xl font-semibold'>{education.institution}</h3>
        <div className='flex justify-between'>
          <p className='text-primary-black'>
            {education.location} {education.degree && `• ${education.degree}`}
          </p>
          <p className='font-bold text-primary-black'>{education.period}</p>
        </div>
        <p className='mt-3 text-secondary'>{education.description}</p>
      </div>
    </div>
  );
}

const education: EducationType[] = [
  {
    institution: 'Harvard university',
    location: 'Cambridge, GA',
    period: 'May 2020 - Present',
    description: `Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website`,
    degree: 'Bachelor degree, Computer Science(Bsc)',
  },
  {
    institution: 'Mister Bim High School',
    period: 'September 2016 - 2020',
    location: 'Atlanta, GA',
  },
];

type EducationCardProps = { education: EducationType };

interface EducationType {
  institution: string;
  location: string;
  degree?: string;
  period: string;
  description?: string;
}
