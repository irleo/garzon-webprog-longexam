import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-accent text-default hover:bg-[var(--color-accent-hover)]',
  secondary: 'bg-primary text-white hover:bg-[var(--color-primary-hover)]',
  outline: 'bg-transparent text-default hover:bg-primary-soft',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const borderClass =
    variant === 'primary'
      ? 'border-accent'
      : variant === 'outline'
      ? 'border-primary'
      : 'border-primary';

  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    borderClass,
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;