import { w } from "windstitch";

export const Button = w.button(
    `
        flex 
        items-center 
        justify-between
    `,
    {
        variants: {
            type: {
                primary: `
                    border-none
                `,
                border: `
                
                `,
                text: `
                    border-none
                `
            },
            rounded: {
                full: `
                    rounded-full
                `,
                simple: `
                    rounded-lg
                `
            }
        },
        defaultVariants: {
            type: 'primary',
            rounded: 'simple',
        }
    }
);