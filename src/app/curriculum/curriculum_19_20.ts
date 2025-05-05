export const CURRICULUM = [
  [
    [
      {
        "course_id": "CSE 133",
        "course_title": "Structured Programming Language",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Programming Language:</b> Basic concept, Overview of programming languages, Problem Solving Techniques and Data Flow Diagram.<br><b>C-Language:</b> Preliminaries, Program constructs, variables and data types in C.<br>Input and output. Character and formatted I/O; Arithmetic Expressions and Assignment statements; Control statement, Loops and Nested loops; break, continue, goto, Decision making; Arrays, Functions; Arguments and local variables, Calling Functions and arrays. Recursion and Recursive functions; Structures within structure. Automatic, external, static variable, Files; File functions for sequential and Random I/O. Pointers; Pointers and structures, union; Pointer and functions, Pointer and arrays; Operation and Pointer; Pointer and memory addresses; Operations on Bits; Bit Operation; Bit field; Advanced features; Preprocessor and Macros, enumeration, Standard library.<br><b>Recursion:</b> Basic idea of recursion (3 laws-base case, call itself, move towards base case by state change), tracing output of a recursive function, applications: factorial, fibonacci, tower of Hanoi, merge sort, permutation, combination.<br><b>Sorting:</b> Insertion sort, selection sort, bubble sort, merge sort, quick sort, distribution sort(counting soft, radix sort, bucket sort).<br><b>Searching:</b> Linear search, binary Search, application of Binary Search- finding element in a sorted array, finding nth root of a real number, solving equations.<br><b>Stack and Queue:</b> Basic stack operations (push/pop/peek), stack-class implementation using Array and linked list, in-fix to post-fix expressions conversion and evaluation, balancing parentheses using stack, basic queue operations (enqueue, dequeue), circular queue/ dequeue, queue-class implementation using array and linked list, application- Josephous problem, palindrome checker using stack and queue.",
        "textbooks": [
          "Schaum's Outline of Programming with C by Byron S. Gottfried",
          "C: The Complete references by Herbert Schildt"
        ],
        "references": [],
        "prerequisites": []
      },
      {
        "course_id": "CSE 134",
        "course_title": "Structured Programming Language Lab",
        "credits": 3.0,
        "contact_hours": 6,
        "details": "<b>Introduction:</b> Introductory outputs using C.Data Types &Operator. Declaring variablesof different data types and doing different types of operations on them, facing problems when internal result of calculation crosses the boundary of a data type.<br><b>DataInput/Output:</b> Variation and formats of getting input and giving output.<br><b>Control Statement:</b> Implementation of all types of controlstatement structures.<br>odd/even test, find max/min from 2/3 numbers, generate grades from marks, floor, ceiling, absolute value, sum of n numbers using loop and calculate average, test prime, generate Fibonacci sequence.<br><b>Array, String and Nested Looping:</b> Finding the number of students getting marks above average, finding vowel and consonant from a given string, detecting palindrome, counting words of a string, reversing each words of a sentence, using different functions inctions of string h library, bubble sort, matrix multiplication,<br><b>Using Library Functions:</b> Functions from stdio.h, math.h, stdlib.h and ctype.h library. Functions: Doing some previous problemsusing function, implement call by value and call by references, prime factorization.<br><b>Recursion:</b> Find Greatest Common Divisor, Fibonacci, Factorial, Tower of Hanoi. Program Structure: Use static and global variable.<br><b>Pointers:</b> Passing pointer to a function, dynamic memory allocation, arrays of pointers. Structure and Union: Sorting points (first according to x, then according to y), using line segment structure, using union.<br><b>File:</b> Opening, closing, creating and processing data files.<br><b>Number Theory:</b> Prime Generation, Sieve and How to Optimize, Prime factorization, Factorial Factors, sum of divisor, number of divisor, Big Mod.<br><b>Recursion:</b> Basic idea of recursion (3 laws-base case, call itself, move towards base case by state change), tracing output of a recursive function, applications: factorial, fibonacci, tower of Hanoi, merge sort, permutation, combination.<br><b>Sorting:</b> Insertion sort, selection sort, bubble sort, merge sort, quick sort, distribution sort(counting sort, radix sort, bucket sort).<br><b>Searching:</b> Linear search, binary Search, application of Binary Search- finding element in a sorted array, finding nth root of a real number, solving equations.<br><b>Stack and Queue:</b> Basic stack operations (push/pop/peek), stack-class implementation using Array and linked list, in-fix to post-fix expressions conversion and evaluation, balancing parentheses using stack, basic queue operations (enqueue, dequeue), circular queue/ dequeue, queue-class implementation using array and linked list, application-Josephous problem, palindrome checker using stack and queue.",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "course_id": "CSE 143",
        "course_title": "Discrete Mathematics",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Set, Relations, Functions:</b> Set, Function, Representing Relations, Equivalence Relations.<br><b>Propositional Calculus:</b> Propositions, Predicate and Quantifier.<br><b>Algorithms:</b> Complexity, Divisions, Algorithm, Application of Number Theory.<br><b>Recursion:</b> Sequences and summations, Recursive Definition and algorithm.<br><b>Combinatorial Analysis:</b> Permutation and Combination, Divide and Conquer Algorithms, Generating Functions.<br><b>Graphs:</b> Representation, Isomorphism, Connectivity, Euler and Hamilton path, Shortest path, Planer, Coloring.<br><b>Trees:</b> Spanning trees, Rooted Trees, Binary Trees, Huffman Trees.<br><b>Boolean Algebra:</b> Number System, Boolean Function, representing Boolean Function, Logic gate, Minimization of Circuits.",
        "textbooks": [
          "Discrete Mathematics and Its Applications by Kenneth H. Rosen"
        ],
        "references": [],
        "prerequisites": []
      },
      {
        "course_id": "EEE 109D",
        "course_title": "Electrical Circuits",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Circuit variables and elements:</b> Voltage, current, power, energy, independent and dependent sources, and resistance. Basic laws: Ohm's law, Kirchhoff's current and voltage laws. Simple resistive circuits: Series and parallel circuits, voltage and current division, wye-delta transformation. Techniques of circuit analysis: Nodal and mesh analysis including super node and super mesh.<br><b>Network theorems:</b> Source transformation, Thevenin's, Norton's and superposition theorems with applications in circuits having independent and dependent sources, maximum power transfer condition and reciprocity theorem. Energy storage elements: Inductors and capacitors, series parallel combination of inductors and capacitors. Responses of RL and RC circuits: Natural and step responses.<br><b>Sinusoidal functions:</b> Instantaneous current, voltage, power, effective current and voltage, average power, phasors and complex quantities, impedance, real and reactive power, power factor. Analysis of single phase AC circuits: Series and parallel RL, RC and RLC circuits, nodal and mesh analysis, application of network theorems in AC circuits.",
        "textbooks": ["Introductory circuit analysis by Boylestad"],
        "references": [
          "Networks, lines and fields by J. D. Ryder",
          "Alternating Current Circuits by Russel M. Kerchner, George F. Corcoran"
        ],
        "prerequisites": []
      },
      {
        "course_id": "EEE 109D",
        "course_title": "Electrical Circuits Lab",
        "credits": 1.5,
        "contact_hours": 3,
        "details": "In this course students will perform experiments to verify practically the theories and concepts learned in EEE-109.<br><ol><li>To familiar with the operation of different electrical instruments.</li><li>To verify the following theorems:<br><ul><li>KCL and KVL theorem,</li><li>Superposition theorem,</li><li>Thevenin's theorem,</li><li>Norton's theorem and</li><li>Maximum power transfer theorem</li></ul></li><li>RL and RC response.</li><li>Study the frequency response of an RLC circuit and find its resonant frequency.</li><li>Basic electrical element like fan, bulb, calling bell etc connection from 220v AC single phase supply.</li><li>Relevant application based on EEE 109.</li></ol>",
        "textbooks": ["Introductory circuit analysis by Boylestad"],
        "references": [
          "Networks, lines and fields by J. D. Ryder",
          "Alternating Current Circuits by Russel M. Kerchner, George F. Corcoran"
        ],
        "prerequisites": []
      },
      {
        "course_id": "MAT 102D",
        "course_title": "Matrices, Vector Analysis and Geometry",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Matrices:</b> Types of matrices; null and unit matrices; algebraic operations on matrices; determinant of a square matrix; matrix equivalence, adjoint and inverse of a matrix, orthogonal and unitary matrices; system of linear equations, vector spaces; linear transformations; similarity of matrices, characteristic roots and sectors; diagonalization of matrices. <b>Vector Analysis:</b> Scalars and vectors; operations on vectors; null and unit vectors; components of a vector; scalar and vector products of two, three and four vectors - their applications; vector components in spherical and cylindrical coordinates systems; derivative of vectors; vector operator Del; gradient, divergence and curl - their physical significance; vector integration: line, surface and volume integrals; Green's, Gauss's and Stoke's theorem and their applications. <b>Geometry:</b> pair of straight lines; general equation of the second degree. Three-dimensional coordinates: Equations for a plane, sphere, cylinder, cone, ellipsoid and paraboloid.",
        "textbooks": [
          "Ayres, F.: Matrices",
          "Kolman, B.: Elementary Linear Algebra",
          "Speigel M R.: Vector analysis",
          "Smith C.: An elementary treatise on coordinate geometry of three dimension",
          "Rahman and Bhattacharjee: A Text Book on coordinate geometry",
          "Harun Ar Rashid: A Text Book on coordinate geometry"
        ],
        "references": [],
        "prerequisites": []
      },
      {
        "course_id": "ENG 101D",
        "course_title": "Effective Communication in English",
        "credits": 2.0,
        "contact_hours": 2,
        "details": "<b>Objectives:</b><br><ol><li>Developing oral and written communication with grammatical accuracy.</li><li>Practicing reading to facilitate communication</li></ol><b>Course Contents:</b><br><ul><li>Reading a selection of texts (story, essay, newspaper article. etc)</li><li>Forms and functions of different word categories (eg. noun, verb, adjective, adverb, etc.)</li><li>Aspects and use of tense</li><li>Subject-verb agreement</li><li>Use of infinitive, gerund, present participle, past participle, modals, causatives, conditionals, subjunctives</li><li>Use of sentence connectors/cohesion markers (eg. moreover, in addition, in contrast, similarly, as a result, though, although, etc)</li><li>Effective combination of sentences (e.g. simple, complex, compound, etc)</li><li>Writing composition (To demonstrate grammatical competence)</li></ul>",
        "textbooks": [
          "Books and resources recommended by course instructors",
          "Books recommended by teachers",
          "Headway-Upper Intermediate (Work book and student's book) -Liz and John Soars",
          "Cliff's TOEFL"
        ],
        "references": [],
        "prerequisites": []
      },
      {
        "course_id": "ENG 102D",
        "course_title": "English Language Lab 1",
        "credits": 1.0,
        "contact_hours": 2,
        "details": "<b>Objectives:</b><br><ol><li>To develop students awareness of standard English pronunciation</li><li>To develop students understanding of the variations in pronunciation</li><li>To develop students ability to use conversational English</li></ol><b>Contents:</b><br><ul><li>English phonemes, Varieties of English, English stress and intonation, Dialogue, debate, extempore speech, interview, role-play, presentation.</li></ul>",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
    ],
    [
      {
        "year": 1,
        "semester": 2,
        "course_id": "CSE 137",
        "course_title": "Data Structure",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Internal Data Representation:</b> Specification, representation, Asymptotic analysis: Recurrences, Substitution method and manipulation of basic data structures: arrays, records and pointers, linked lists, stacks, queues, recursion, trees, optimal search trees, heaps, disjoint sets. <b>Recursion:</b> permutation, combination. <b>Sorting:</b> merge sort, quick sort (randomized quick sort), distribution sort (counting sort, radix sort, bucket sort), lower bounds for sorting, external sort. <b>Binary Tree:</b> Binary tree representation using array and pointers, traversal of Binary Tree (in-order, pre-order and postorder). Ternary tree, <b>Binary Search Tree:</b> BST representation, basic operations on BST (creation, insertion, deletion, querying and traversing), application- searching, sets. Ternary search tree, Binary Index tree, Segment tree, RMQ(Range Minimum Query). <b>Searching:</b> Application of Binary Search- finding element in a sorted array, finding nth root of a real number, solving equations. <b>Heap:</b> Min-heap, max-heap, Fibonacci-heap, applications-priority queue, heap sort. <b>SetOperations& Disjoint Set:</b> Union find, path compression. <b>Huffman Coding</b><br><b>Graph:</b> Graph representation (adjacency matrix/adjacency list), basic operations on graph (node/edge insertion and deletion), traversing a graph: Review of Breadth first search (BFS), Depth first search (DFS), Topological Sort, Strongly Connected Components, Euler Path, Articulation Point, Bridge, Bi-connected Components, graph-bicoloring. Floodfill, Dijkstra's Shortest Path Algorithm, Bellman -Ford algorithm and negative cycle detection, Floyd-Warshall all pair shortest path algorithm, Johnson's algorithm, shortest path in Directed Acyclic Graph. Minimum spanning tree: Prim's algorithm and Kruskal's algorithm.<br><b>Self balancing Binary Search Tree:</b> AVL tree (rotation, insertion).<br><b>SetOperations:</b> Set representation using bitmask, set/clear bit, querying the status of a bit, toggling bit values, LSB, application of set operations. <b>String ADT</b> The concatenation of two strings, the extraction of substrings, searching a string for a matching substring, parsing, Suffix tree, Suffix array.",
        "textbooks": [
          "Advanced Data Structures, Peter Brass",
          "Data Structures - Seymour Lipschutz, Schaum's Outlines Series.",
          "Introduction to Algorithms Thomas H. Cormen, Charles E. Leiserson"
        ],
        "references": [],
        "prerequisites": ["CSE 133"]
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "CSE 138",
        "course_title": "Data Structure Lab",
        "credits": 2.0,
        "contact_hours": 4,
        "details": "<b>Objectives:</b><br><ul><li>To understand numerous examples of relationships between data</li><li>To understand the purpose and mathematical background of algorithm analysis and be able to apply this to determine the run time and memory usage of algorithms</li><li>To understand the abstract data types of stacks, queues and deques</li><li>To understand the variety of ways that linearly and weakly ordered data can be stored, accessed, and manipulated</li><li>To understand the characteristics and optimal behavior of hash tables for access and retrieval</li><li>To understand various sorting algorithms and the run-time analysis required to determine their efficiencies</li><li>To understand various tree traversal technique and graph algorithms.</li><li>Good programming practices</li><li>To explain the concepts relating to the complexity analysis of algorithms, apply them to the algorithms discussed in the course, and use the results of the analysis to make good design decisions in building programs.</li></ul>",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "CSE 147",
        "course_title": "ENGINEERING ETHICS AND CYBER LAW",
        "credits": 2.0,
        "contact_hours": 2,
        "details": "<b>Applied Ethics:</b> What ethics is and is not, Explore differences between laws and ethics, Ethical viewpoints, Virtue (deontology), Utilitarianism, Natural Rights, Fairness (Justice), Common good, Ethical decision making process<br><b>Professionalism and Work Place Issues in the IT Field:</b> Impact of technology on employment trends, Laws and ethics of employee monitoring. Review ethical codes of IT professional organizations<br><b>Introduction to Research Ethics:</b> Overview of theories and methods in ethics and research ethics. How to handle data, The meaning of secrecy and confidentiality, Good research practice, research integrity and scientific misconduct, Criteria and principles for good research practice, Meaning of scientific misconduct and fraud, Cases and procedures for establishing misconduct, prevention and sanctions, Responsibility for the results of research, Responsibility for research and the results and consequences of research, The limits of responsibility, Risks and the precautionary principle.<br><b>Cyber laws and rights in today's digital age:</b> Digital Security Act, Intellectual Property Issues connected with use and management of Digital Data The similar Acts of other countries <b>Information Warfare:</b> Nature of information warfare, including computer crime and information terrorism; Threats to information resources, including military and economic espionage, communications eavesdropping, computer break-ins, denial-of-service, destruction and modification of data, distortion and fabrication of information, forgery, control and disruption of information How, electronic bombs, and sops and perception management. Countermeasures, including authentication, encryption, auditing, monitoring, intrusion election, and firewalls, and the limitations of those countermeasures. <b>Cyberspace law and law enforcement, information warfare and the military, and intelligence in the information age.</b> Information warfare policy and ethical Issues.",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "CSE 150",
        "course_title": "Project Work",
        "credits": 1.0,
        "contact_hours": 2,
        "details": "<b>Objectives:</b><br><ul><li>Any project based on C language including implementation of Data Structure is acceptable. Gaming project using graphics.h library in C is preferable. Teachers must have to ensure every project is unique. Innovative project idea should get extra weight to prevent imitating old projects.</li></ul>",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "EEE 111D",
        "course_title": "Electronic Devices and Circuits",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>P-N junction as a circuit element:</b> Intrinsic and extrinsic semiconductors, operational principle of p-n junction diode, contact potential, current-voltage characteristics of a diode; <b>Diode circuits:</b> Half wave and full wave rectifiers, rectifiers with filter capacitor, characteristics of a Zener diode, clamping and clipping circuits. <b>Bipolar Junction Transistor (BJT) as a circuit element:</b> current components, BJT characteristics and regions of operation, BJT as an amplifier, biasing the BJT for discrete circuits, small signal equivalent circuit models, BJT as a switch.<br><b>Metal Oxide Semiconductor Field Effect Transistor (MOSFET) as circuit element:</b> structure and physical operation of an enhancement MOSFET, threshold voltage, Body effect, current-voltage characteristics of an enhancement MOSFET, biasing discrete and integrated MOS amplifier circuits, single-stage MOS amplifiers, MOSFET as a switch, CMOS inverter.<br><b>Operational amplifiers (Op-Amp):</b> Properties of ideal Op-Amps, non-inverting and inverting amplifiers, inverting integrators, differentiator, weighted summer and other applications of Op-Amp circuits.<br><b>Introduction to photodiode, Laser, Solar cell, Photo detector, LED.</b>",
        "textbooks": ["Electronics Devices by R. L. Boylestad"],
        "references": ["Electronics Principles. By Malvino"],
        "prerequisites": ["EEE 109D"]
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "EEE 112D",
        "course_title": "Electronic Devices and Circuits Lab",
        "credits": 1.5,
        "contact_hours": 3,
        "details": "Students will also perform different experiments based on EEE203.<br><ol><li>To familiar with electronics devices and Laboratory Equipments.</li><li>To study of V-l Characteristics curve of P-N junction diode.</li><li>To study of Half-Wave Rectification circuit.</li><li>To study of Full-Wave Rectification circuit (Bridge Center-tap).</li><li>To study of Clipping and clamping circuit.</li><li>To study MosFET and BJT characteristics.</li><li>Speech/Audio amplification using NPN/PNP Transistor.</li><li>MosFET as an amplifier and switch.</li><li>Different operational amplifier circuits.</li></ol>",
        "textbooks": ["Electronics Devices by R. L. Boylestad"],
        "references": ["Electronics Principles. By Malvino"],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "IPE 106D",
        "course_title": "Engineering Graphics",
        "credits": 1.5,
        "contact_hours": 3,
        "details": "Introduction, Instruments and their uses, First angle and Third angle projections, Orthographic drawing, Sectional views, Isometric views.",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "IPE 108D",
        "course_title": "Workshop Practice",
        "credits": 1.0,
        "contact_hours": 2,
        "details": "Introduction to Hand Tools, Study and operation of an Engine Lathe, Study and operation of Milling Machine. Study and operation of Bench Drilling Machine, Study and operation of Shaper Machine. Preparation of a hexagonal nut.",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "MAT 103D",
        "course_title": "Calculus",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Differential Calculus:</b> Functions of a real variables and their plots; limit; continuity and derivatives, physical meaning of derivative of a function; Leibnitz Theorem; Rolle's Theorem; mean value theorem and Taylor's theorem (statement only). Taylor's and Maclaurin's series and expansion of functions; maximum and minimum values of functions; functions of two or three variables; partial and total derivatives. <b>Integral Calculus:</b> Physical meaning of integration of a function; integration as an inverse process of differentiation, different techniques of integrations; definite integrate as the limit of a sum and as an area; definition of Riemann integrals; fundamental theorem of integral calculus and its application to definite integrals, reduction formula; improper integrals; double integration; evaluation of area and volume by integration. <b>Differential Equations:</b> Definition and solution of ordinary differential equation; first order ordinary differential equation; second order ordinary linear differential equation with constant coefficients, initial value problems.",
        "textbooks": [
          "Differential Calculus by Das and Mukherjee.",
          "Integral Calculus by Das and Mukherjee.",
          "Advanced Calculus by M.R. Spiegel.",
          "Differential Calculus by J. Edwards.",
          "Integral Calculus by J. Edwards.",
          "Differential Calculus by R.A. Sardar.",
          "Differential equations by S. L. Ross."
        ],
        "references": [],
        "prerequisites": []
      },
      {
        "year": 1,
        "semester": 2,
        "course_id": "PHY 103D",
        "course_title": "Mechanics, Wave, Heat and Thermonynamics",
        "credits": 3.0,
        "contact_hours": 3,
        "details": "<b>Mechanics:</b> Motion in two dimensions; projectile motion; Newton's laws of motion; conservation theorems (momentum and energy); collisions; circular motion; rotational dynamics of rigid bodies; central forces and gravitation; Kepler's laws. <b>Waves:</b> Simple harmonic motion; damped and forced vibrations; waves in elastic media; sound waves; Doppler effect; Fourier's theorem and its applications. <b>Heat and thermodynamics:</b> Principles of thermometry; measurement of high and low temperature; zeroeth law of thermodynamics, kinetictheory of ideal gas; first and second laws of thermodynamics; entropy; black body radiation. Wein's law and Planck's law.",
        "textbooks": [],
        "references": [],
        "prerequisites": []
      }
    ]
  ],
];
