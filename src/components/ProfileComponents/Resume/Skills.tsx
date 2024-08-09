import { ComponentType } from 'react';

import Badge from '@/components/ui/Badge';

import {
  Css3Logo,
  Html5Logo,
  JSLogo,
  JavaLogo,
  MongoLogo,
  NextjsLogo,
  NodejsLogo,
  PythonLogo,
  ReactLogo,
} from '@/icons';

export function Skills() {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Tech skills</h2>
      <div className='mt-5 flex flex-wrap gap-5'>
        {skills.map((skill, idx) => (
          <SkillBadge key={idx} {...skill} />
        ))}
      </div>
    </div>
  );
}

function SkillBadge(props: Skill) {
  return (
    <Badge className='flex items-center gap-2 border-[1px] border-border bg-primary-light px-2 py-2'>
      <props.icon width='20' height='20' /> {props.name}
    </Badge>
  );
}

const skills: Skill[] = [
  { icon: Html5Logo, name: 'HTML 5' },
  { icon: Css3Logo, name: 'CSS 3' },
  { icon: JSLogo, name: 'JavaScript' },
  { icon: ReactLogo, name: 'React' },
  { icon: NextjsLogo, name: 'Next.js' },
  { icon: MongoLogo, name: 'Mongo' },
  { icon: NodejsLogo, name: 'Node.js' },
  { icon: PythonLogo, name: 'Python' },
  { icon: JavaLogo, name: 'Java' },
];

type Skill = {
  icon: ComponentType<{
    width: string;
    height: string;
  }>;
  name: string;
};
