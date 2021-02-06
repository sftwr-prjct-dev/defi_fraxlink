import { useState } from 'react';

export default function RadioButton({
  options,
  name,
  onChange,
  flexDirection,
}: {
  name: string;
  options: { text: string; value: string }[];
  onChange?: (e: any) => void;
  flexDirection?: string;
}) {
  const [selected, setselected] = useState('');
  const flexDir = flexDirection == 'column' ? 'flex-col' : '';
  return (
    <div className="flex w-full justify-center">
      <form className={'w-auto flex text-xs ' + flexDir}>
        {options.map((option) => (
          <div className="w-20 my-2 flex items-center mx-auto relative">
            <input
              onChange={onChange}
              className="mr-3 w-5 h-5 cursor-pointer absolute opacity-0"
              type="radio"
              id={option.value}
              name={name}
              value={option.value}
              onClick={(ev: any) => {
                setselected(ev.target.value);
              }}
            />
            <span
              className={
                'w-5 h-5 rounded-full inline-block ' +
                (selected == option.value ? 'bg-blue' : 'bg-grayish')
              }
            ></span>
            <label className="ml-2 cursor-pointer" htmlFor={option.value}>
              {option.text}
            </label>
            {option.value == 'eth' && (
              <div className="ml-2">
                <a href="https://etherscan.io" target="_blank">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="#C0C0C0"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </form>
      <style jsx>
        {`
          .flex-basis-20 {
            flex-basis: 20%;
          }
        `}
      </style>
    </div>
  );
}
