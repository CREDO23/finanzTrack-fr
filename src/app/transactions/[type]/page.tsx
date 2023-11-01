"use client"

import { useParams } from "next/navigation"

export default function Transactions () : JSX.Element {

    const {type} = useParams()

    return <div>{type} Transactions </div>
}