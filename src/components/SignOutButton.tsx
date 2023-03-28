'use client'

import { FC, useState } from 'react'
import Button from './ui/Button'
import { signOut } from 'next-auth/react'


interface SignOutButtonProps {
  
}

const SignInButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)

    const signUserOut = async () =>{
        setIsLoading(true)

        try{
            await signOut
        } catch (error){
            // toast({
            //     title: 'Error signing out',
            //     message: 'Please try again later',
            //     type: 'error'
            // })
        }
    }


  return <Button onClick={signUserOut} isLoading={isLoading}>
    SignOut

  </Button>
}

export default SignInButton