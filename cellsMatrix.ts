import * as ndarray from 'ndarray';

export type CellsMatrix = ndarray.NdArray<number[]> ;

export function CreateCellsMatrix(data : number[], height : number, width : number) : CellsMatrix {
    return ndarray(data, [height, width]);    
}