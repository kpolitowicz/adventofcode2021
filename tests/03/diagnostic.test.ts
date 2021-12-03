import { DiagnosticCalculator } from "../../03/diagnostic";

test("Counts bit values after each add", () => {
    let calc = new DiagnosticCalculator();
    calc.add('01');
    
    expect(calc.readings.length).toBe(2);

    expect(calc.readings[0].zeroes).toBe(1);
    expect(calc.readings[0].ones).toBe(0);

    expect(calc.readings[1].zeroes).toBe(0);
    expect(calc.readings[1].ones).toBe(1);
});

test("Calculates gamma rate", () => {
    let calc = new DiagnosticCalculator();
    calc.add('01');
    calc.add('10');
    calc.add('01');
    
    // 01 is the most used
    expect(calc.gammaRate()).toBe(1);
});

test("Calculates epsilon rate", () => {
    let calc = new DiagnosticCalculator();
    calc.add('011');
    calc.add('101');
    calc.add('010');
    
    // 100 are the less used bit values on each position
    expect(calc.epsilonRate()).toBe(4);
});