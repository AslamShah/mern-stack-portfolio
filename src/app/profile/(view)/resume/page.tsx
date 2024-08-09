import {
  About,
  Education,
  Interests,
  Languages,
  Skills,
  Work,
} from '@/components/ProfileComponents/Resume';

export default function Home() {
  return (
    <>
      <About />
      <Work />
      <Education />
      <Skills />
      <Interests />
      <Languages />
    </>
  );
}
