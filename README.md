# DFA Minimization Simulator

<p align="center">
  An interactive web-based simulator for <strong>Deterministic Finite Automata (DFA) Minimization</strong> using the <strong>Myhill–Nerode Table-Filling Algorithm</strong>.
</p>

<p align="center">
  <a href="https://dfa-studio-lime.vercel.app/"><strong>🚀 Live Demo</strong></a>
  &nbsp; | &nbsp;
  <a href="https://github.com/stutipanda/dfa-studio"><strong>📂 GitHub Repository</strong></a>
</p>

---

## 📌 Overview

DFA Minimization is the process of reducing the number of states in a Deterministic Finite Automaton without changing the language it recognizes.

This project provides an interactive environment to understand and visualize the minimization process through the Myhill–Nerode Table-Filling Algorithm.

Users can define custom DFAs, identify unreachable states, explore distinguishable and equivalent state pairs, and visualize the resulting minimized automaton.

## ✨ Features

### 1. DFA Input and Validation
- Accepts user-defined DFA specifications.
- Validates states, alphabet symbols, initial state, final states, and transitions.
- Checks whether the DFA is complete and deterministic.

### 2. Unreachable State Detection
- Uses Breadth-First Search (BFS) to identify reachable states.
- Detects unreachable states that can be removed before minimization.

### 3. Myhill–Nerode Table-Filling Algorithm
- Generates a lower-triangular state-pair table.
- Initially marks pairs containing one final and one non-final state.
- Iteratively identifies distinguishable state pairs based on transitions.
- Explains why individual state pairs are marked.

### 4. Step-by-Step Visualization
- Interactive algorithm playback.
- Visual representation of table-filling rounds.
- Explanations of distinguishability propagation.

### 5. Equivalence Class Generation
- Groups equivalent states into equivalence classes.
- Uses these classes to construct the minimized DFA.

### 6. Minimized DFA Visualization
- Displays the minimized transition table.
- Visualizes the resulting minimized state diagram.

### 7. String Validation
- Tests input strings on both original and minimized DFAs.
- Compares acceptance and rejection results.
- Demonstrates language equivalence.

### 8. JSON Export
- Exports the minimized DFA as a JSON file.

## ⚙️ Algorithm

The simulator implements the **Myhill–Nerode Table-Filling Algorithm**.

The minimization process follows these steps:

1. Identify and remove unreachable states.
2. Construct a table of unordered pairs of reachable states.
3. Mark pairs where one state is final and the other is non-final.
4. Iteratively examine all unmarked pairs.
5. Check transitions for every input alphabet symbol.
6. Mark a pair if its transitions lead to an already distinguishable pair.
7. Repeat until no additional pairs can be marked.
8. Group the remaining unmarked pairs into equivalence classes.
9. Construct the minimized DFA using these equivalence classes.

**Time Complexity:** O(|Σ| × |Q|²)

Where:
- |Q| = Number of states
- |Σ| = Number of input alphabet symbols

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| React | Component-based UI |
| TypeScript | Application logic and type safety |
| CSS | Styling and responsive interface |
| Lucide React | Icons |
| SVG | DFA state diagram visualization |

The application performs DFA parsing, minimization, visualization, and validation entirely on the client side. No backend or database is required.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/stutipanda/dfa-studio.git
```

**2. Navigate to the project directory**

```bash
cd dfa-studio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 🧪 Example DFA

The simulator includes a sample DFA with:

- **States:** A, B, C, D, E, F
- **Alphabet:** {0, 1}
- **Initial State:** A
- **Final States:** {C, D, E}

Expected equivalence classes:

```text
[A, B]
[C, D, E]
[F]
```

The minimized DFA contains **3 states instead of 6**, while recognizing the same language as the original DFA.

## 📁 Project Structure

```text
dfa-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── dfa.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 👥 Contributors

Developed collaboratively as part of **CSET302 – Automata Theory and Computability**.

| S. No. | Contributor |
|---|---|
| 1 | Stuti Panda |
| 2 | Rhea Mathur |
| 3 | Nakshatra Gupta |
| 4 | Gurpreet Nagar |
| 5 | Aayush Adhikari |

## 🎓 Academic Context

- **Course:** CSET302 – Automata Theory and Computability
- **Project:** DFA Minimization Simulator
- **Institution:** Bennett University

---

<p align="center">
  Built to make automata theory more interactive, visual, and easier to understand.
</p>
