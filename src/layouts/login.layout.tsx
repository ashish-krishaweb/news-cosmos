import { SiteName } from "@/const/text.const"
import Image from "next/image"
import { ReactNode } from "react"

type Children = {children: ReactNode}

export default function LoginLayout({children}: Children ){
    return (
        <>
        <header className="bg-[#0D2934]">
            <div className="container flex justify-center py-3">
                <div className="flex flex-row gap-4 text-white">
                    <img src="d" alt="img" />
                    <h1 className="text-xl font-[500]">{SiteName}</h1>
                </div>
            </div>
        </header>
        {children}
        </>
    )
}