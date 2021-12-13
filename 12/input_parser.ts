class Node {
    label: string;
    outs: Node[] = [];

    constructor(label: string) {
        this.label = label;
    }

    addOut(node: Node): void {
        this.outs.push(node);
    }

    goesTo(): string[] {
        return this.outs.map((n) => n.label);
    }

    bigCave(): boolean {
        return this.label.match(/^[A-Z]+$/) != undefined;
    }
}

interface VisitedMap { [key: string]: boolean };

class CaveNetwork {
    nodes = new Map();
    pathCount = 0;

    addEdge(n1: string, n2: string): void {
        if (this.nodes.get(n1) == undefined) {
            this.nodes.set(n1, new Node(n1));
        }
        if (this.nodes.get(n2) == undefined) {
            this.nodes.set(n2, new Node(n2));
        }
        this.nodes.get(n1).addOut(this.nodes.get(n2));
        this.nodes.get(n2).addOut(this.nodes.get(n1));
    }

    edge(label: string): Node | null {
        return this.nodes.get(label);
    }

    countPaths(): number {
        let visited: VisitedMap = {};
        visited['start'] = true;
        this.pathCount = 0;
        this._countPaths('start', visited);
        return this.pathCount;
    }

    _countPaths(node: string, visited: VisitedMap): void {
        // if we are at the end, count it as another path
        if (node == 'end') {
            this.pathCount++
            return
        }

        // mark node as visited
        visited[node] = true;

        // go to each of the neighbor nodes
        const currentNode = this.nodes.get(node);
        for (let connectedNode of currentNode.outs) {
            // Go to big caves or small caves not visited yet
            if (connectedNode.bigCave() || !visited[connectedNode.label]) {
                // console.log(`Going to ${connectedNode.label}`)
                this._countPaths(connectedNode.label, visited);
            } 
        }

        visited[node] = false;
    }

    countPathsOneSmallTwice(): number {
        let visited: VisitedMap = {};
        visited['start'] = true;
        this.pathCount = 0;
        this._countPathsOneSmallTwice('start', visited, null);
        return this.pathCount;
    }

    _countPathsOneSmallTwice(node: string, visited: VisitedMap, visitedTwice: string | null): void {
        // if we are at the end, count it as another path
        if (node == 'end') {
            this.pathCount++
            return
        }

        // mark node as visited
        visited[node] = true;

        // go to each of the neighbor nodes
        const currentNode = this.nodes.get(node);
        for (let connectedNode of currentNode.outs) {
            // Go to big caves or small caves not visited yet
            if (connectedNode.bigCave() || !visited[connectedNode.label] || visitedTwice == null) {
                // We can visit any small cave twice, but start
                if (connectedNode.label == 'start') {
                    continue;
                }
                // console.log(`Going to ${connectedNode.label}`)
                if (connectedNode.bigCave() || !visited[connectedNode.label]) {
                    this._countPathsOneSmallTwice(connectedNode.label, visited, visitedTwice);
                }  else {
                    // let's visit this one the second time!
                    this._countPathsOneSmallTwice(connectedNode.label, visited, connectedNode.label);
                }
            } 
        }

        if (visitedTwice != node) {
            visited[node] = false;
        }
    }
}

export class InputParser {
    parse(input: string): CaveNetwork {
        const net = new CaveNetwork();

        for (let line of this.lines(input)) {
            const elems = line.split('-');
            net.addEdge(elems[0], elems[1]);
        }
        return net;
    }

    // Read the input file's string, split along the lines, remove the last (empty) line
    lines(input: string): string[] {
        return input.split("\n").slice(0, -1);
    }
}