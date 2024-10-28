'use client'
import {  Spacer, Progress } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'

export default function Home() {
    const { authenticated, user, ready } = usePrivy()
    const router = useRouter()
    const [hasRedirected, setRedirected] = useState<boolean>(false)
    const redirect = async () => {
        if (hasRedirected) {
            return
        }
        if (ready) {
            if (authenticated && user) {
                gotoPage('/gallery')
            }
        
            else {
                gotoPage('/welcome')
            }
            
        }
    }
    const gotoPage = (path: string) => {
        setRedirected(true)
        router.replace(path)
    }
    useEffect(() => {
        redirect()
    }, [ready])

    return (
        <>
            <div className='w-full h-svh flex flex-col items-center justify-center bg-black'>
                <div className=' font-bold text-primary text-5xl mb-3'>SHRINK.AI </div>
                
        
                <Progress
                    size="lg"
                    isIndeterminate
                    aria-label="Loading..."
                    className="max-w-md mt-10"
                    />
                
            </div>
        </>
    )
}