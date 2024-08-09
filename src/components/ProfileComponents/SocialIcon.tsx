type SocialIconProps = {
  icon: string;
  href: string;
};

export function SocialIcon(props: SocialIconProps) {
  return (
    <a href={props.href} className='rounded-md border-2 border-border p-2 '>
      <img src={`/brand/${props.icon}.svg`} alt='' className='h-6 w-6' />
    </a>
  );
}
