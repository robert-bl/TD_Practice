import { Box } from "./Box"

export const Board = () => {


    let boxNumber: number = 16
    const gridArr: JSX.Element[] = []
    for (let i = 0; i < boxNumber; i++ ) {
        gridArr.push(<Box i={i+1} />)
    }

    let test: JSX.Element = <Box i={4} />


    return (
        <div className="board-grid">
            {gridArr}
        </div>
    )
}