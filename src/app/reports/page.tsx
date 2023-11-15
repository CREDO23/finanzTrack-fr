"use client"
import { ViewActionType } from "@/store/viewState/action";
import { useViewDispatcher } from "@/store/viewState/hooks";
import { useEffect } from "react"

export default function Repports () : JSX.Element {

    const dispatchView = useViewDispatcher();


    useEffect(() => {
        dispatchView({ type: ViewActionType.SET_ARROW_BACK, payload: true });
    },[])
    
    return <div className="w-full h-full flex items-center justify-center">Repports</div>
}