export class InsertionRules {
    rules: Map<string, string> = new Map();

    add(k: string, v: string): void {
        this.rules.set(k, v);
    }

    on(k: string): string | undefined {
        return this.rules.get(k);
    }

    apply(init: string): string {
        let newPolymer = init.charAt(0);

        for (let i = 1; i < init.length; i++) {
            const insert = this.on(`${init.slice(i - 1, i + 1)}`);
            if (insert !== undefined) {
                newPolymer += `${insert}${init.charAt(i)}`
            }
        }
        return newPolymer;
    }
}