'use client'
import { Spacer } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import styles from '@/styles/home.module.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useGenerationContext } from '@/context/generation-context'
import LandingPromoComponent from '@/components/landing-promo'
import { PrimaryButton, SecondaryButton } from '@/components/buttons'
import { appFont } from '@/app/fonts'

export default function Page() {
    const router = useRouter()
    const gContext = useGenerationContext()
    const handleTxt2img = () => {
        //Clear context 
        gContext.reset()
        router.push('/txt2img')
    }
    const handleDownload = () => {
        gContext.requestAppInstall()
    }

    return (
        <div className={`${styles.main} ${appFont.className} w-full min-h-svh bg-black`}>
            <div className={`${styles.wave}`} />
            <div className={styles.centerLanding }>
                <div className='font-bold text-background text-5xl mb-7'>SHRINK.AI</div>
                <div className='font-semibold text-background text-base'>
                    <p className="text-4xl text-yellow-200">Create, Own, Share or Sell.  </p>
                    <Spacer y={4} />
                    <p className="text-xl bg-black">Image and Video creators tool for content scalability.</p>
                </div>
                <Spacer y={4} />
                <LandingPromoComponent />
                <Spacer y={8} />
                <PrimaryButton onPress={handleTxt2img} className='text-2xl font-semibold w-full'>Get Started</PrimaryButton>
                <Spacer y={4} />
      
            </div >
        </div >
    )
}