export function Work() {
  return (
    <div>
      <h2 className='text-center text-3xl font-bold'>Work experience</h2>

      <div className='mt-10 flex flex-col space-y-7'>
        {workExps.map((work, index) => (
          <WorkExperience key={index} work={work} />
        ))}
      </div>
    </div>
  );
}

function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <div className='flex items-start gap-4'>
      <img
        className='h-8 w-8'
        src={`/brand/${work.brandName}.svg`}
        alt={work.brandName}
      />
      <div className='flex w-full flex-col gap-3'>
        <h3 className='text-2xl font-semibold'>{work.role}</h3>
        <div className='flex justify-between'>
          <p className='text-primary-black'>
            {work.location} • {work.company}
          </p>
          <p className='font-bold text-primary-black'>{work.period}</p>
        </div>
        <p className='mt-3 text-secondary'>{work.description}</p>
        {work.responsibilities && (
          <div className='mt-3'>
            <h4 className='text-xl font-bold'>Job responsibilities:</h4>
            <ul className='ml-5 mt-3 list-image-[url(/bullet.svg)]'>
              {work.responsibilities.map((responsibility, index) => (
                <li key={index} className='mt-2 text-secondary'>
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const workExps: WorkExp[] = [
  {
    brandName: 'google',
    company: 'Google Inc.',
    role: 'Front-end developer at Google',
    location: 'London',
    period: 'May 2021 - Present',
    description: `This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.`,
  },
  {
    brandName: 'facebook',
    company: 'Meta Inc.',
    role: 'Junior Front-end developer at Meta',
    location: 'New York',
    period: 'July 2020 - May 2021',
    description: `This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites.`,
    responsibilities: [
      'Create an appealing design and turn it into a WordPress plugin',
      'Manage all technical aspects of the CMS',
      'Conducting website/application tests',
    ],
  },
];

type WorkExperienceProps = {
  work: WorkExp;
};

interface WorkExp {
  brandName: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  responsibilities?: string[];
}
