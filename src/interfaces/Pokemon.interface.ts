export default interface Pokemon {
    name: string,
    numberOfAbilities: number,
    baseExperience: number,
    numberOfMoves: number,
    types?: string[]
    imageUrl: string
}