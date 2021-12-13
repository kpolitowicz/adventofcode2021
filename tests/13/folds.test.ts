import { Paper } from "../../13/folds";

test("Folds along y", () => {
    const paper = new Paper();
    paper.add(4,3);
    paper.add(0,0);
    paper.fold('y=2');
    
    expect(paper.dots.has('0|0')).toBe(true);
    expect(paper.dots.has('4|1')).toBe(true);
    expect(paper.dots.has('4|3')).toBe(false);
});

test("Folds along x", () => {
    const paper = new Paper();
    paper.add(14,2);
    paper.add(0,0);
    paper.fold('x=7');
    
    expect(paper.dots.has('0|0')).toBe(true);
    expect(paper.dots.has('0|2')).toBe(true);
    expect(paper.dots.has('13|2')).toBe(false);
});