import { FC, ChangeEvent, useState } from "react"

export interface Props {
    name?: string;
    age?: number;
    getName?: (name: string) => string;
}

enum HairColor {
    Blonde = "Straw",
    Brown = "Wood",
    Red = "Fire"
}

export const Person: FC<Props> = ({ name, age }) => {

    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1> {name} </h1>
            <h1> {age} </h1>
            <input placeholder="enter country" onChange={handleChange} />
            {country}
            {HairColor.Blonde}
        </div>
    )
}