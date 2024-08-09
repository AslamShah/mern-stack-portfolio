import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

import { Html5Logo, ReactLogo } from '@/icons';

export function Projects() {
  return (
    <div>
      <div className='mb-2 flex items-center justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Projects</h3>
        <Button className='font-semibold text-primary hover:bg-border'>
          Create new project
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <Card>
      <img src='/screenshot.png' alt='' />
      <h3 className='mt-3 text-2xl font-bold'>Personal Portfolio Website</h3>
      <div className='md:text-md flex items-center gap-2 text-xs text-secondary'>
        <Html5Logo />
        HTML/CSS •
        <ReactLogo />
        React
      </div>
    </Card>
  );
}
