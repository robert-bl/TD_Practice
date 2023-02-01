import { FC } from "react"

export interface Props {
    i: number
}

export const Box: FC<Props> = ({i}) => {
    return (
        <div key={i} className="box">
            <h1>{i}</h1>
        </div>
    )
}