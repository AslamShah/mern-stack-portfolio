import {
  Certificates,
  Playgrounds,
  Projects,
  Stats,
} from '@/components/ProfileComponents/Portfolio';

export default function Home() {
  return (
    <>
      <Stats />
      <Projects />
      <Playgrounds />
      <Certificates />
    </>
  );
}
