import { ArrowRight } from "lucide-react"
import Image from "next/image"
import React from 'react'

function EmailLetter() {
    return (
        <div className="rounded-lg lg:flex lg:flex-row gap-5 bg-gradient-purple">
            <div className="relative flex-1 h-60 lg:h-full lg:w-1/2 lg:flex lg:justify-center lg:items-center -top-20 lg:top-0 lg:translate-y-0 overflow-hidden">
                <Image className=" w-full h-full object-contain" src={'/cta.png'} alt="image" height={500} width={500}></Image>
            </div>
            <div className="relative lg:flex lg:flex-col lg:justify-center mx-10 -top-20 lg:top-auto">
                <div className="font-abel text-5xl">Get exponential reach via AI Marketing</div>
                <div className="flex flex-col gap-5 lg:flex-row justify-center items-center">
                    <input
                        type="email"
                        placeholder="email address"
                        className="flex-1 rounded-full bg-white/30 text-white p-3 placeholder-white"
                        color="white"
                        

                    ></input>
                    <button className="flex-1 lg:flex-initial bg-black text-white rounded-full w-fit flex p-3 gap-2" type="submit">
                        <span>get in touch</span>
                        <ArrowRight></ArrowRight>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmailLetter