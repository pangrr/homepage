# Highlight Main Code

As a code reader, I'd like to grab the main code after open a file. Just like a good one screen document summary.


For .jsx files, my first interest is usually the layout, but I need to scroll down to reach the return. I build a really funny habit that I open a file then immediately scroll all the way to the bottom, ignoring the passing code. What a waste of time and space. 

Similarly for js code, the main code can be well down below many lines of variable declarations.

To make things worse, the main code can be many screens and needs some scroll around to catch them all. Not a good summary.

---

Use `function` instead of `const` for function definitions. Because `const` must go before usage, not `function`.

Be flexible on collapsing multiple code lines. I don't enjoy scroll either horizontally nor vertically. But for high level understanding, missing the detail of a code line is better than missing a line. The sweet spot could be keeping each code line a top level step, rather than the details of a step, plus, if a line ends up to long, break it.
