import { QuestionIcon } from '../svgIcons';

export const AllowanceText = ({ text }) => (
  <>
    {' '}
    <span className="mr-1 text-sm tracking-wide text-balNameCol">
      {text}
    </span>{' '}
    <QuestionIcon />{' '}
  </>
);
