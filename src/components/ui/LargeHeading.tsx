import { HTMLAttributes, forwardRef } from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/app/lib/utils'


const headingVariants = cva(
    "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter", 
    {
        variants : { 
            size: {
                default: 'text-4xl md:text-5xl lg:text-6xl',
                sm: 'text-2xl md:text-3xl lg:text-4xl',
                lg: 'text-5xl md:text-6xl lg:text-7xl',
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
    
    interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
        
    }




                    //FC= functional component and it takes a "generic" ex: ParagraphProps
                    //Generic = tells the component that the paragraph props (that will be defined above) are the types of the props that will be passed to this component
                    //think of generics part of a function but instead of passing arguments you are passing types
// const Paragraph: FC<ParagraphProps> = ({}) => {
//     return <div>Paragraph</div>
// }

const LargeHeading = forwardRef<HTMLHeadElement, LargeHeadingProps >(({
    className, size, children, ...props
},) => {
    return <h1 {...props} className={cn(
        headingVariants({size, className})
    )}>
        {children}
    </h1>
})


// for debugging purposes. Since we are using a forward ref
LargeHeading.displayName = 'LargeHeading'

export default LargeHeading