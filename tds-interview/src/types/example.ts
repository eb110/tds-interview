export type Example = {
    id: number,
    name: string,
    anotherExamples: AnotherExample[]
}


export type AnotherExample = {
    side: number,
    brand: string
}