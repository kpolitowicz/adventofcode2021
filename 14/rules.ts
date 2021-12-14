export class InsertionRules {
    rules: Map<string, string> = new Map();
    freq: Map<string, number> = new Map();

    add(k: string, v: string): void {
        this.rules.set(k, v);
    }

    on(k: string): string | undefined {
        return this.rules.get(k);
    }

    f(k: string): number {
        return this.freq.get(k) || 0
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

    setInit(init: string): void {
        for (let i = 0; i < init.length - 1; i++) {
            const key = init.slice(i, i + 2)
            const currentCount = this.freq.get(key) || 0;
            this.freq.set(key, currentCount + 1);
        }
    }

    applySmarter(): void {
        let newFreq: Map<string, number> = new Map();

        // So for example if we have a chunk NN it will morph into NC and CN chunks
        this.freq.forEach((cnt: number, key: string) => {
            const c = this.on(key);
            if (c !== undefined) {
                const newChunk1 = `${key.charAt(0)}${c}`;
                const newChunk2 = `${c}${key.charAt(1)}`;

                newFreq.set(key, (newFreq.get(key) || 0) - cnt);
                newFreq.set(newChunk1, (newFreq.get(newChunk1) || 0) + cnt);
                newFreq.set(newChunk2, (newFreq.get(newChunk2) || 0) + cnt);
            }
        });
        newFreq.forEach((cnt: number, key: string) => {
            this.freq.set(key, cnt + (this.freq.get(key) || 0));
        });
    }

    letterFreq(init: string): Map<string, number> {
        let letterFreq: Map<string, number> = new Map();

        // add 1 for beginning and end char
        letterFreq.set(init.charAt(0), 1);
        letterFreq.set(init.charAt(init.length - 1), 1);

        this.freq.forEach((cnt: number, key: string) => {
            const c1 = key.charAt(0);
            const c2 = key.charAt(1);

            letterFreq.set(c1, (letterFreq.get(c1) || 0) + cnt);
            letterFreq.set(c2, (letterFreq.get(c2) || 0) + cnt);
        });

        return letterFreq;
    }
}