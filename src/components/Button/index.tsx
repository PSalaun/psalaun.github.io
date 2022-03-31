import { FunctionComponent } from 'preact';

const externalIcon: SVGElement = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    stroke-width='2'>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    />
  </svg>
);

const downloadIcon: SVGElement = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    class='h-6 w-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    stroke-width='2'>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
    />
  </svg>
);

type ButtonIcon = 'external' | 'download';

interface IButton {
	class?: string;
	icon?: ButtonIcon;
	type?: 'primary' | 'secondary';
}
const Button: FunctionComponent<IButton> = (
  props,
) => {
  const { type = 'primary' } = props;
  const primary = `flex items-center bg-dark text-light text-xl font-ui py-3 px-4 text-center`;
  const secondary = `flex items-center text-xl font-ui text-center underline`;
  const classes = {
    primary,
    secondary,
  };
  const iconClasses = type === 'primary' ? `text-light ml-1` : `ml-1`;
  const icon: Record<ButtonIcon, SVGElement> = {
    external: externalIcon,
    download: downloadIcon,
  };
  return (
    <div class={`${classes[type]} ${props.class}`}>
      {props.children}
      <span class={iconClasses}>{icon[props.icon]}</span>
    </div>
  );
};

export default Button;
