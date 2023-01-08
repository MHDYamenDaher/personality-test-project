import {forwardRef, ReactElement} from "react";

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
    children?: ReactElement | string;
    variant: ButtonVariant;
    className?: string; 
    disabled?: boolean;
    onClick?: () => void;
};

const bgVariants: {[key in ButtonVariant]?: string} = {
    primary: 'bg-primary',
    secondary: 'bg-secondary'
};

const bgHover: {[key in ButtonVariant] ?: string} = {
    primary: 'hover:bg-primaryLight',
    secondary: 'hover:bg-secondaryLight'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, className, disabled, onClick}, ref) => {
    return <button ref={ref} onClick={onClick} disabled={disabled} type='button' className={`whitespace-nowrap disabled:opacity-25 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${bgVariants[variant]} ${bgHover[variant]} ${className}`}>
        {children}
    </button>
});