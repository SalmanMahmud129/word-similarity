import { HTMLAttributes, forwardRef } from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/app/lib/utils'


const paragraphVariants = cva(
    "max-w-prose text-slate-700 dark:text-slate-300 mb:2 text-center", 
    {
        variants : { 
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm sm:text-base'
            }
        },
        defaultVariants: {
            size: 'default'
        }
    }
    )



    //extending with the html attributes allows for this paragraph component we are making to have all the props that the html element inside the generic would have
    //so this component has all the available props that a normal paragraph element would have because we put HTMLParagraphElement in the generic

    //with variant props we now have access to the size prop that we defined above with our default and sm options
    
    interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {
        
    }




                    //FC= functional component and it takes a "generic" ex: ParagraphProps
                    //Generic = tells the component that the paragraph props (that will be defined above) are the types of the props that will be passed to this component
                    //think of generics part of a function but instead of passing arguments you are passing types
// const Paragraph: FC<ParagraphProps> = ({}) => {
//     return <div>Paragraph</div>
// }

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps >(({
    className, size, children, ...props
}, ref) => {
    return <p ref={ref} {...props} className={cn(
        paragraphVariants({size, className})
    )}>
        {children}
    </p>
})

Paragraph.displayName = 'Paragraph'

export default Paragraph