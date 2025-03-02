# Crafting Interpreters (First Half - jlox) Book Review

## Preface
I often repeat this fact about myself, but I feel that it's something that bears repeating: I graduated from school with an electrical engineering degree, not a computer science degree. These are very similar degrees, especially at the school I went to. Both degrees require: Intro to Programming, Object Oriented Programming, Discrete Mathematics, Data Structures and Algorithms, Linear Algebra, Probability and Statistics, Microcontrollers and Microprocessors, and Computer Organization and Architecture. The electrical engineering degree required two additional programming electives, of which I took Computer Graphics with OpenGL and a class on how peripherals like Accellerometers, Gyroscopes, ACDs, DACs, etc. work and how they can be interfaced through a microcontroller.

I accumulated a wealth of programming knowledge purely through my degree, but I was left with a couple gaps compared to peers who had computer science degrees. Notably, these gaps were: Networking, Operating Systems, Multithreading and Async programming, and most importantly for this article, Compilers and Regex. I was terrified of anything that had to do with parsing, and I would mentally sieze up any time I saw a regex. Even simple problems like "how would you parse query parameters out of a url?" would make me terrified. This isn't an exaggeration. I would experience real fear and doubt about myself when I would encounter these types of problems. Even though that listed problem is basically just "do a `string.split('&')` then do `string.split('=')`," I would start do feel insecure and convince myself that I couldn't do it, and I just needed to leave those problems for the people that were smarter than me.

Luckily, I had the introspection to do something about this. I had decided to buy a couple of books on these subjects that were highly recommended on the internet and overcome these fears. These are pretty long books for me, so I've jumped back and forth between them, but *Crafting Interpreters* by Robert Nystrom is the first of those books that I've finished, and I have a lot to say about it.

## Compilers vs Interpreters
The first thing I have to say is a heads up for people like me who see the title and think "I don't want to read a book on *interpreters*. I want a compiler. I want the *real thing*." One of the first thing the book breaks down is the multiple stages of an interpreter/compiler, and the many design decisions you could make even at that point. Simply put, compilers and interpreters are *mostly* the same thing, and you should not be put off by the idea of writing an interpreter instead of a compiler. They have many of the same stages, and in many cases, an interpreter does *more* than some compilers. This break down is illustrated brilliantly by the cover of the book.

There are many possible choices a compiler can make from moving from one representation of code to another. These stages or design decision have 2-3 paragraphs summarizing each:
 - Scanning (Tokenization / Lexing)
 - Parsing
 - Static Analysis
 - Intermediate Representation
 - Optimization
 - Code Generation
 - Virtual Machine
 - Runtime

And each of these stages can be included in many types of compilers:
 - Single Pass Compilers
 - Tree Walk Interpreters
 - Transpilers
 - Just In Time Compilers

And those types of compilers could be combined together situationally.

The book then walks through each of these steps and shows you how to make a Scanner, Parser, and Interpreter in Java while skimming through some of the theory. This leaves you with a working interpreter of a toy language named lox as fast as possible. The reader is constantly rewarded with a working program after every chapter.

Then, once the interpreter is done, the book slows down for a second to reintroduce some of the theory it skimmed over earlier. Then, the book starts reimplimenting a compiler for the same toy language in C, diving deeper into theory this second time. Notably, this second compiler is a *bytecode* interpreter that compiles the program to an intermediate language, then a *virtual machine* that runs this intermediate language. The reader does write *real* compiler, even though it's still technically an interpreter. This method of teaching works incredibly well, since the reader can reimpliment most of the compiler very quickly now that they've already done it once, and they can spend most of the time thinking about the theory the second time through while still getting constantly rewarded.

## Compiler Generators
At the beginning of the book, the author briefly discusses "Compiler Generators" like flex, yacc, bison, etc. These are meta-languages that automatically build a compiler for you, given that you know the theoretical concepts of a compiler. Originally, I began reading a book named *Introduction to Compilers and Language Design* by Douglas Thain that teaches the reader through the lens of *compiler generators*, *regular expressions*, and *finite automata*, three topics that *Crafting Interpreters* either spends little time talking about, or doesn't mention at all. I'm very glad that I read through the first couple chapters of *Introduction to Compilers and Language Design*, because it helped prepare me to look at open source projects that use these tools, but I much prefer *Crafting Interpreters* approach. *Crafting Interpreters* chooses to get the reader to have a working program as fast as possible, thus boosting the reader's confidence, and making the reader actually have fun, rather than reading the book purely for training purposes.

Already, three pages into the book, *Crafting Interpreters* starts showing why it comes so highly recommended. The book is **fun**. I don't know if I ever thought that I would be able to describe a textbook as fun, but *Crafting Interpreters* is. Similar to some games, *Crafting Interpreters* consistently rewards you, and makes you want to keep reading. It will teach you how to add *just enough* to the program that you feel proud and excited watching it run. It made me say "wow I really did that" to myself over and over and over. In my personal opinion, the main downside of compiler generators, is that they're less fun. They require more upfront theory, causing a longer lead time to when you can get to the fun part.

## An Increase in Confidence
Outside of the being fun, I can directly attribute this book to an increase in confidence. Unlike some other aspects of computer science, the topics and themes of this book come up enough in real life that I can provide *real* examples of how it's affected me. Not only do I have a working interpreter that I can look at and say to myself, "I'm proud that I did that," I also have the skills to look at open source projects, and make more sense of them.

I can look at a repository like memcached, and I can find the function where they [tokenize the request with a hand-rolled tokenizer](https://github.com/memcached/memcached/blob/0e6ba4da1fcaa3bf93f588d6d1144c9ecb231f9e/proto_text.c#L290). I can also understand how they [parse and interpret those tokens](https://github.com/memcached/memcached/blob/0e6ba4da1fcaa3bf93f588d6d1144c9ecb231f9e/proto_text.c#L2879) without using an *abstract syntax tree*, and I can understand why they wouldn't want to use an abstract syntax tree in this case.

Because I've read this book, I can compare projects like sqlite and postgres, and I can directly see how sqlite chooses to use a [hand-rolled tokenizer](https://github.com/sqlite/sqlite/blob/c071c47b51f39e2a186dbb87e1b7347d5590986d/src/tokenize.c#L273), while postgres chooses to use a [compiler generator (flex) to tokenize queries](https://github.com/postgres/postgres/blob/cb45dc3afb05ce5e5267b1a9be4725d0be7ee33c/src/backend/parser/scan.l#L1). At the same time, I can see that both projects chose to use a parser generator to generate their AST ([postgres](https://github.com/postgres/postgres/blob/cb45dc3afb05ce5e5267b1a9be4725d0be7ee33c/src/backend/parser/gram.y#L1), [sqlite](https://github.com/sqlite/sqlite/blob/c071c47b51f39e2a186dbb87e1b7347d5590986d/src/parse.y#L1
)). And in sqlite, I can find where they interpret the AST, and I don't have any questions like why they would name this file ["walker"](https://github.com/sqlite/sqlite/blob/c071c47b51f39e2a186dbb87e1b7347d5590986d/src/walker.c#L25
).

When I look up the [documentation for how to use a feature in Microsoft SQL](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-group-by-transact-sql?view=sql-server-ver16), I used to get very intimidated by the *grammar* that they show at the beginning of the website. I used to look at these and scroll past it and think "Am I supposed to know what this means? Am I not smart enough to use this?" But now, I can look at these docs pages and actually gain some information out of the grammar section.

As my last example, in golang, I can find where they [parse the abstract syntax tree](https://github.com/golang/go/blob/282a14ec617ea663740026687d0ec5130066d75c/src/go/parser/parser.go#L2870), and I can admire how similar this code looks to the exact implementation provided in the book for parsing lox. I can even refer to it in case I ever need to do something similar in Go.

It might seem redundant that I brought up so many examples, but I want to stress that before I read this book, I couldn't have told you **any** of what I just said. Each of those examples is a direct measurement of the progress that I've made because of this book, and they make me feel both proud of myself for accomplishing this, and they make me have **fun** just clicking through those examples.

Before I read this book, I don't think I would have had fun opening any of those files. I would have been frustrated, sad, and insecure that I couldn't understand what was happening. I would believe that I wasn't cut out to be a programmer. Luckily, I don't feel any of those feelings from code related to parsing anymore.

This anecdote has persited with me outside of just parsing. It's a reminder that I can overcome these challenges, and that I can find the fun in something that I don't understand. If I look at code related to networking or a device driver that I don't understand, I know that if I can find the fun in it, then I will succeed. A year ago, I didn't see any fun in parsing, and it made me fail tasks that involved parsing. I'm a firm believer that people who can find the fun in something will ultimately be better at it long term than someone who can't. This book simply introduced me to the fun in parsing, thus it made me better at parsing. More than that, this book introduced me to the fun in something that I was deeply insecure about, thus it helped me be less insecure. It can seem slightly silly that a book named *Crafting Interpreters* affected me this much, but this book is truly one of the best of the best in computer science literature. It's hard not to say that every programmer should try to read this book.


