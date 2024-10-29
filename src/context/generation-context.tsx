'use client'
import { LocalImageData, GenerationOutputItem, Img2vidInput, SDConfig } from '@/libs/types';
import { createContext, useState, useEffect, useContext } from 'react';
import ShortUniqueId from 'short-unique-id';

interface GenerationContextType {
    config: SDConfig
    isAdvancedView: boolean
    setIsAdvancedView: (value: boolean) => void
    t2iOutputs: Array<GenerationOutputItem>
    setT2iOutputs: (outputs: Array<GenerationOutputItem>) => void

    t2iOutputSelectedIndex: number
    setT2iOutputSelectedIndex: (value: number) => void

    get t2iSelectedOutput(): GenerationOutputItem | undefined

    overlayText: string
    setOverlayText: (value: string) => void
    overlayImageData: LocalImageData | undefined
    setOverlayImageData: (value: LocalImageData | undefined) => void

    shufflePrompt: () => string

    i2vInput: Img2vidInput | undefined
    setI2vInput: (value: Img2vidInput | undefined) => void

    i2vOutputs: Array<GenerationOutputItem>
    setI2vOutputs: (outputs: Array<GenerationOutputItem>) => void

    userSalt: string
    isReady: boolean

    reset: () => void

    //App installation 
    installPromtEvt: Event | undefined
    requestAppInstall: () => void
}

const GenerationContext = createContext<GenerationContextType | undefined>(undefined)


const readFromStorage = (storage: Storage, key: string): any => {
    const localStorageValue = storage.getItem(key)
    if (localStorageValue) {
        try {
            return JSON.parse(localStorageValue);
        }
        catch (e) {
            console.log(`??? localStorageValue json error ${typeof (localStorageValue)} ${localStorageValue}`)
            return localStorageValue
        }
    } else {
        return undefined
    }
}
const writeToStorage = (storage: Storage, key: string, value: any) => {
    if ([null, undefined].includes(value)) {
        storage.removeItem(key)
    }
    else {
        storage.setItem(key, JSON.stringify(value));
    }

}
const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        if (typeof (window) === 'undefined') {
            return defaultValue
        }
        const localStorageValue = readFromStorage(window.localStorage, key)
        return localStorageValue || defaultValue
    });

    useEffect(() => {
        if (typeof (window) === 'undefined') {
            return
        }
        writeToStorage(localStorage, key, value)
    }, [key, value]);

    return [value, setValue];
}


export default function GenerationContextProvider({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState<boolean>(false)
    const [isAdvancedView, setIsAdvancedView] = useLocalStorage('isAdvancedView', false)
    const [t2iOutputs, setT2iOutputs] = useLocalStorage('t2iOutputs', [])
    const [t2iOutputSelectedIndex, setT2iOutputSelectedIndex] = useLocalStorage('t2iOutputSelectedIndex', 0)
    const [overlayText, setOverlayText] = useLocalStorage('overlayText', '')
    const [overlayImageData, setOverlayImageData] = useLocalStorage('overlayImageData', undefined)
    const [i2vInput, setI2vInput] = useLocalStorage('i2vInput', undefined)
    const [i2vOutputs, setI2vOutputs] = useLocalStorage('i2vOutputs', [])
    const [userSalt] = useLocalStorage('userSalt', new ShortUniqueId({ length: 6 }).rnd())
    const [installPromtEvt, setInstallPromtEvt] = useState<Event | undefined>(undefined)

    const updateValueFromLocalStorage = (key: string) => {
        if (typeof (window) === 'undefined') {
            return
        }
        const localStorageValue = readFromStorage(localStorage, key)
        writeToStorage(localStorage, key, localStorageValue)

    }
    const handleBeforeInstallPromptEvt = (evt: Event) => {
        evt.preventDefault()
        setInstallPromtEvt(evt)
    }

    useEffect(() => {
        updateValueFromLocalStorage('isAdvancedView')
        updateValueFromLocalStorage('t2iOutputs')
        updateValueFromLocalStorage('t2iOutputSelectedIndex')
        updateValueFromLocalStorage('overlayText')
        updateValueFromLocalStorage('overlayImageData')
        updateValueFromLocalStorage('i2vInput')
        updateValueFromLocalStorage('i2vOutputs')
        updateValueFromLocalStorage('userSalt')
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPromptEvt)
        setIsReady(true)
        return () => {
            setInstallPromtEvt(undefined)
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPromptEvt)
        }
    }, []);

    const generationConfig = (): SDConfig => {
        return {
            'models': [
                { value: 'SG161222/RealVisXL_V4.0_Lightning', label: 'RealVisXL', default: true },
                { value: 'ByteDance/SDXL-Lightning', label: 'SDXL Lightning' },
                { value: 'stabilityai/sdxl-turbo', label: 'SDXL Turbo' },
            ],
            'videoModels': [
                { value: 'stable-video-diffusion-img2vid-xt', label: 'SVD' },
                { value: 'stabilityai/stable-video-diffusion-img2vid-xt-1-1', label: 'SVD 1.1', default: true }
            ]
        }
    };
    const shufflePrompt = (): string => {
        const prompts = [
    "An image of a globe with cracks forming, representing divisions caused by economic sanctions.",
"An Image depicting a digital chessboard with world leaders as chess pieces.",
"An animated timeline showing major economic downturns across different countries.",
"A graphic representation of fluctuating oil barrels impacting international relations.",
"A dystopian cityscape blending economic statistics and symbols of political power.",
"A visual metaphor of a global tug-of-war, with nations pulling on a rope made of currency notes.",
"An image of news footage detailing rising inflation and its social impact.",
"An art piece depicting diplomacy as a complex spider web of nations and interests.",
"A visualization of a stormy sea with ships carrying flags representing trade agreements.",
"A split-frame image showing affluence on one side and poverty on the other.",
"A creative rendering of digital data streams battling with traditional currencies.",
"A virtual diorama of a global financial summit taking place at war-torn locations.",
"A conceptual piece showing a digital world map with regions flickering like unstable signals.",
"An image showing the progression of political tensions as breaking news headlines.",
"An abstract image of world leaders trapped in a gigantic hourglass filled with sand and coins.",
"A series of portraits of diverse global citizens, each overlaid with their country's economic issues.",
"An image narrative contrasting peaceful diplomatic discussions with backgrounds of warfare.",
"An imaginative artwork of a phoenix representing economic cycles, rising from ashes marked by conflict.",
"A data visualization mapping the rise and fall of economies as roller coasters.",
"An AI-generated story depicting the clash between traditional media and rising digital economies."
            
        ]
        return prompts[Math.floor(Math.random() * prompts.length)]

    }

    const getT2iSelectedOutput = (): GenerationOutputItem | undefined => {
        if (t2iOutputs) {
            return t2iOutputs[t2iOutputSelectedIndex || 0]
        }
        return undefined
    }
    const reset = () => {
        setT2iOutputs([])
        setT2iOutputSelectedIndex(0)
        setOverlayText('')
        setOverlayImageData(undefined)
        setI2vInput(undefined)
    }

    const requestAppInstall = async () => {
        if (installPromtEvt) {
            (installPromtEvt as any).prompt()
            const { outcome } = await (installPromtEvt as any).userChoice
            console.log(`??? outcome ${outcome}`)
            setInstallPromtEvt(undefined)
        }
    }
    return (
        <GenerationContext.Provider
            value={{
                isAdvancedView, setIsAdvancedView,
                t2iOutputs, setT2iOutputs,
                t2iOutputSelectedIndex, setT2iOutputSelectedIndex,
                shufflePrompt,
                get config() {
                    return generationConfig()
                },
                get t2iSelectedOutput() {
                    return getT2iSelectedOutput()
                },
                overlayText, setOverlayText,
                overlayImageData, setOverlayImageData,
                i2vInput, setI2vInput,
                i2vOutputs, setI2vOutputs,
                userSalt,
                isReady,
                reset,
                installPromtEvt,
                requestAppInstall,
            }}>
            {children}
        </GenerationContext.Provider>
    )

}
export function useGenerationContext() {
    const context = useContext(GenerationContext)
    if (!context) {
        throw new Error(`Gerneration Context is not defined.`)
    }
    return context
}
