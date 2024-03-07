# copy4gpt

This Node.js command-line tool helps you prepare and copy code from multiple files into a format suitable for pasting into ChatGPT.

##   Usage

If you have files named `file1.txt` and `file2.txt` with code content, running:

```bash
npx copy4gpt file1.txt file2.txt
```
will copy the following formatted text to your clipboard:

```bash
[file1.txt]
# content of file1.txt 

[file2.txt]
# content of file2.txt
```
