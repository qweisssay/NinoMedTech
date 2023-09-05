export function fromStringToArray (str:string | null):number[] | null {
    if (str) {
        return str.split(',').map(Number)
    }
    return null
}