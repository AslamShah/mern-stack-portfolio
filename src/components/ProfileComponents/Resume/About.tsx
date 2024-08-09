import Button from '@/components/ui/Button';

export function About() {
  return (
    <div>
      <h2 className='text-center text-3xl font-bold'>About me</h2>
      <p className='mt-10 font-medium'>
        A self-driven, versatile, reliable, diligent individual who is calm and
        cheerful with a team-minded approach to work and getting things done.
      </p>
      <p className='mt-5 font-medium'>
        A student who is passionate and with a keen eye for design...
      </p>
      <Button className='mt-5 bg-border font-semibold'>Read more</Button>
    </div>
  );
}
