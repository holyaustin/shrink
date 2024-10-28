'use client'
import styles from "@/styles/home.module.css"
import { Spacer, Link } from "@nextui-org/react"
import { useRouter } from 'next/navigation'
import { appFont } from "../fonts"
import { PrimaryButton } from "@/components/buttons"

export default function Page() {
    const router = useRouter()
    return (
        <>
            <section className={`items-center justify-center ${appFont.className}`}>
                <div className={styles.centerSection}>
                    <div className="justify-center items-center">
                        First thing first, follow us on Twitter for an upcoming Shrink Video contest with large prizes in Next Year:&nbsp;
                        <Link className="text-[#f97216]" href="https://www.x.com/holyaustin">@holyaustin</Link>
                        <br /><br />
                        Shrink.ai introduces AI-enhanced real-time video compression, allowing for lower data usage without quality degradation. Utilizing LivePeer provides scalable streaming while Zora ensures blockchain-backed transaction security, thus revolutionizing content sharing and monetization for social media.
                        <br /><br />
                        Then generative AI came, and everything changed. Now, anyone with good taste and creativity can produce stunning videos with just a few lines of text.
                        We realized that if this could be done for videos, it could certainly be done for all.
                        <br /><br />
                        Thus, SHRINK.AI was born. If you share our lovely images and Video and sell contents as NFTs on Zora Marketplace, you are in for a treat.
                        <br /><br />
                        This project is generously supported by Livepeer, a decentralized GPU network that makes video processing
                        much more affordable than traditional cloud services and Zora.
                        <br /><br />
                        Got questions or ideas? Holla or DM us on Twitter:<Link className="text-[#f97216]" href="https://www.x.com/holyaustin">@holyaustin</Link>
                    </div>
                    <Spacer y={8} />
                    <div className="flex justify-center items-center"><PrimaryButton onPress={() => router.push('/txt2img')}>Get Started</PrimaryButton></div>
                    <Spacer y={2} />
                </div>
            </section>
        </>
    )
}