'use client';

import { CustomFlowbiteTheme, ToggleSwitch, theme } from 'flowbite-react';
import { useState } from 'react';

type SectionChoiceProps = {
  title: string;
  subtitle: string;
};

const toggleSwitchTheme: CustomFlowbiteTheme['toggleSwitch'] = {
  toggle: {
    checked: {
      off:
        theme.toggleSwitch.toggle.checked.off +
        ' bg-grey-light group-focus:ring-primary/25',
      on:
        theme.toggleSwitch.toggle.checked.on +
        ' bg-primary group-focus:ring-primary/25',
    },
  },
};

export function SectionChoice(props: SectionChoiceProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='flex items-center justify-between'>
      <div>
        <h4 className='font-bold'>{props.title}</h4>
        <p className='text-sm text-secondary'>{props.subtitle}</p>
      </div>
      <div>
        <ToggleSwitch
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          label=''
          theme={toggleSwitchTheme}
        />
      </div>
    </div>
  );
}
