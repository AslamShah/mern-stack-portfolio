import { InputHTMLAttributes } from 'react';

interface InputProps
  extends InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > {
  label?: string;
  helper?: string;
  isTextarea?: boolean;
  isDropdown?: boolean;
  dropdownItems?: string[];
}

export function Input(props: InputProps) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className='mb-1 block font-semibold'>
          {props.label}
        </label>
      )}
      {props.isDropdown && (
        <select
          className={`w-full rounded-lg border-2 border-border p-2 px-4 placeholder:text-secondary focus:outline-primary ${props.className}`}
          {...props}
        >
          <option disabled selected className='text-secondary'>
            {props.placeholder}
          </option>
          {props.dropdownItems?.map((item, idx) => (
            <option value={item.toLowerCase()} key={idx}>
              {item}
            </option>
          ))}
        </select>
      )}
      {props.isTextarea && (
        <textarea
          {...props}
          className={`w-full rounded-lg border-2 border-border p-2 px-4 placeholder:text-secondary focus:outline-primary ${props.className}`}
        ></textarea>
      )}
      {!props.isTextarea && !props.isDropdown && (
        <input
          type='text'
          {...props}
          className={`w-full rounded-lg border-2 border-border p-2 px-4 placeholder:text-secondary focus:outline-primary ${props.className}`}
        />
      )}
      {props.helper && <p className='mt-1 text-secondary'>{props.helper}</p>}
    </div>
  );
}
