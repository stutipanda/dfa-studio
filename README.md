# DFA Studio — Minimization Lab

Interactive, client-side DFA minimization simulator using BFS reachability analysis and the Myhill–Nerode table-filling algorithm.

## Requirements
Node.js 20.9+ and npm.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
npm start
```

## Features
- JSON DFA editor and validation
- BFS unreachable-state removal
- Lower-triangular table-filling visualization
- Initial and transition-based marking with explanations
- Equivalence classes and minimized transition table
- SVG DFA diagram
- Original/minimized string simulation
- JSON export

The app expects a complete DFA: every state must define exactly one destination for every alphabet symbol.

Built-in example: Q={A,B,C,D,E,F}, Σ={0,1}, start A, finals {C,D,E}. Expected classes: {A,B}, {C,D,E}, {F}.
