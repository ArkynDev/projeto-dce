import { w } from "windstitch";

export const Button = w.button(
    `
        flex 
        items-center
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
            },
            Justify: {
                center: `
                    justify-center
                `,
                between: `
                    justify-between
                `
            }
        },
        defaultVariants: {
            type: 'primary',
            rounded: 'simple',
            Justify: 'center',
        }
    }
);