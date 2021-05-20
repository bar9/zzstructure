/* Straightforward implementation of a zzstructure after http://www.lord-enki.net/ZigZagProject.pdf > Context */

class ZzStructure<F> {
    private cells: ZzCell<F>[] = [];

    addCellExplicit(cell: ZzCell<F>){
        this.cells.push(cell);
    }
}

class ZzCell<F> {
    constructor(private field: F, private dimensions: Dimension<F>[]) {
    }
}

interface Dimension<F> {
    dim: string;
    prevCell: ZzCell<F>;
    nextCell: ZzCell<F>;
}