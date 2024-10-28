import { Button, ButtonProps } from '@nextui-org/react';
import React from 'react';



const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button size='lg' className='w-full font-lg' color='danger' radius='full' {...props}>
            {children}
        </Button>
    );
};

const SecondaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button size='md' className='w-full font-bold' color='success' radius='full' variant='flat' {...props}>
            {children}
        </Button>
    );
};

export {
    PrimaryButton,
    SecondaryButton
}