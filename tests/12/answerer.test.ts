import { firstAnswer, secondAnswer } from "../../12/answerer";

test("Answer 1 example 1", () => {
    const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end
`

    const actual = firstAnswer(input);
    expect(actual).toBe(10);
});
test("Answer 1 example 2", () => {
    const input = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`

    const actual = firstAnswer(input);
    expect(actual).toBe(19);
});
test("Answer 1 example 3", () => {
    const input = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`

    const actual = firstAnswer(input);
    expect(actual).toBe(226);
});

test("Answer 2 example 1", () => {
    const input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end
`

    const actual = secondAnswer(input);
    expect(actual).toBe(36);
});
test("Answer 2 example 2", () => {
    const input = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`

    const actual = secondAnswer(input);
    expect(actual).toBe(103);
});
test("Answer 2 example 3", () => {
    const input = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`

    const actual = secondAnswer(input);
    expect(actual).toBe(3509);
});