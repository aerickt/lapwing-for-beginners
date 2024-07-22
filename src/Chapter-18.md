# Chapter 18: Fingerspelling and numbers

## Useful links

* [Fingerspelling graphic (lowercase)](img/18-fingerspelling-lower.png)
* [Fingerspelling graphic (uppercase)](img/18-fingerspelling-upper.png)
* [Numbers graphic](img/18-numbers.png)

## Intro

There won't be any practice material for this chapter as these topics are easy to practise in everyday writing. It may be helpful to keep the tables on this page in an easy to read place (i.e., printed out and taped to the wall).

## Fingerspelling
To write a short acronym or a word that is not yet defined, a letter-by-letter spelling technique called *fingerspelling* can be used. This is done by pressing a letter chord plus the asterisk key with the right hand.

### Lowercase

| | | | | |
| ---- | ---- | ---- | ---- | ---- |
| a <br> ![](img/18-a.png) | b <br> ![](img/18-b.png) | c <br> ![](img/18-c.png) | d <br> ![](img/18-d.png) | e <br> ![](img/18-e.png) |
| f <br> ![](img/18-f.png) | g <br> ![](img/18-g.png) | h <br> ![](img/18-h.png) | i <br> ![](img/18-i.png) | j <br> ![](img/18-j.png) |
| k <br> ![](img/18-k.png) | l <br> ![](img/18-l.png) | m <br> ![](img/18-m.png) | n <br> ![](img/18-n.png) | o <br> ![](img/18-o.png) |
| p <br> ![](img/18-p.png) | q <br> ![](img/18-q.png) | r <br> ![](img/18-r.png) | s <br> ![](img/18-s.png) | t <br> ![](img/18-t.png) |
| u <br> ![](img/18-u.png) | v <br> ![](img/18-v.png) | w <br> ![](img/18-w.png) | x <br> ![](img/18-x.png) | y <br> ![](img/18-y.png) |
|  |  | z <br> ![](img/18-z.png) |  |  |

### Uppercase
To write uppercase letters, use `-P` on the right hand.

| | | | | |
| ---- | ---- | ---- | ---- | ---- |
| A <br> ![](img/18-A.png) | B <br> ![](img/18-B.png) | C <br> ![](img/18-C.png) | D <br> ![](img/18-D.png) | E <br> ![](img/18-E.png) |
| F <br> ![](img/18-F.png) | G <br> ![](img/18-G.png) | H <br> ![](img/18-H.png) | I <br> ![](img/18-I.png) | J <br> ![](img/18-J.png) |
| K <br> ![](img/18-K.png) | L <br> ![](img/18-L.png) | M <br> ![](img/18-M.png) | N <br> ![](img/18-N.png) | O <br> ![](img/18-O.png) |
| P <br> ![](img/18-P.png) | Q <br> ![](img/18-Q.png) | R <br> ![](img/18-R.png) | S <br> ![](img/18-S.png) | T <br> ![](img/18-T.png) |
| U <br> ![](img/18-U.png) | V <br> ![](img/18-V.png) | W <br> ![](img/18-W.png) | X <br> ![](img/18-X.png) | Y <br> ![](img/18-Y.png) |
|  |  | Z <br> ![](img/18-Z.png) |  |  |

### Attachment behaviour
Fingerspelling uses glue (<code class="code-mono">&</code>) formatting. These translations stick to other translations that also have glue. For example, writing `HE/HROE/A*/PW*/KR*` will result in <code class="code-mono">hello abc</code>. Since the translation for `HE/HROE` contains no glue, the subsequent fingerspelling chord inserts a space after <code class="code-mono">hello</code>. However, as the subsequent fingerspelling chords all contain glue, they stick together.

## Numbers

With Lapwing, numbers are written with a numberpad system much like the ones found on regular keyboards and calculators. The number key is pressed with the left hand, and the right hand is responsible for the number. Since there are only two rows on the steno layout, we use vertical chords to represent the middle row.

| | | |
| ---- | ---- | ---- |
| 1 <br> ![](img/18-1.png) | 2 <br> ![](img/18-2.png) | 3 <br> ![](img/18-3.png) |
| 4 <br> ![](img/18-4.png) | 5 <br> ![](img/18-5.png) | 6 <br> ![](img/18-6.png) |
| 7 <br> ![](img/18-7.png) | 8 <br> ![](img/18-8.png) | 9 <br> ![](img/18-9.png) |
| 0 <br> ![](img/18-0.png) | 00 <br> ![](img/18-00.png) | 000 <br> ![](img/18-000.png) |

The right hand vowel keys can be combined with a number chord to add some trailing zeros:

* `#ER` 10
* `#EUPB` 5000
* `#UP` 800
* `#EB` 20

### Attachment behaviour
Numbers use the same glue formatting as fingerspelling by default. To prevent numbers from sticking to other glued translations, include `T` with the chord.

#### Examples
* `A*/PW*/KR*/#-R/#-B/#-G` abc123
* `A*/PW*/KR*/#T-R/#T-B/#T-G` abc 1 2 3
