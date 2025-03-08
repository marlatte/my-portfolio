import clsx from 'clsx';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'inline-block cursor-pointer rounded-full border-0 font-bold leading-none',
        { 'px-4 py-2.5 text-xs': size === 'small' },
        { 'px-5 py-2.5 text-sm': size === 'medium' },
        { 'px-6 py-3 text-base': size === 'large' },
        { 'bg-indigo-600': primary },
        { border: !primary },
      )}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
