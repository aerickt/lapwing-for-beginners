# Chapter 20: Punctuation and Commands

## Recommended pace

**Recommended time to spend on this chapter: 1 day.**

1. Read [punctuation](#punctuation) (**10 minutes**)
2. Read [commands](#commands) (**10 minutes**)

Remember to take breaks!

## Useful links

* [Punctuation graphic](img/19-punctuation.png)

## Intro
This chapter will cover punctuation and Plover commands. As these are not really tied to any words, they may be less intuitive. Many of these will simply have to be memorized. There is no practice material for this chapter; instead, incorporating steno into daily computer tasks can be a great way to practise these miscellaneous outlines. It may be helpful to print out the punctuation graphic and keep it in a easy to reference location (such as taped to a wall). Playing typing games such as TypeRacer or monkeytype is also a great way to practise steno at this point.

## Punctuation

Punctuation is a lot different to regular words where a space is almost always inserted before. For different punctuation, there may be different scenarios for spacing on one side or the other. Furthermore, punctuation can sometimes also govern the capitalization of the next word. Therefore, punctuation strokes contain special formatting rules to control the spacing and capitalization.

The following table lists several common punctuation marks along with the name, formatting, steno outline, and a mnemonic to aid with memorization.

| Character | Name | Formatting | Steno outline | Mnemonic |
| ---- | ---- | ---- | ---- | ---- |
| <code class="code-mono">.</code>  | Period | Attaches to the previous word and capitalizes the next word. | `TP-PL` | Written by the top index and middle finger on both hands. |
| <code class="code-mono">?</code> | Question mark | Attaches to the previous word and capitalizes the next word. | `KW-PL` | This is like the outline for a period, but the shape resembles a rising intonation as would happen in a question. |
| <code class="code-mono">!</code> | Exclamation mark | Attaches to the previous word and capitalizes the next word. | `TP-BG` | This is like the period outline, but sloped downwards to mirror the question mark outline.|
| <code class="code-mono">.</code> | Decimal point | Attaches to the previous word and the next word. | `P-P` | This is like the period outline but is only pressed with the middle fingers. |
| <code class="code-mono">,</code> | Comma | Attaches to the previous word. | `KW-BG` | This is similar to the period outline, but is on the bottom row. |
| <code class="code-mono">"</code> | Opening quotation mark | Attaches to the next word. | `KW-GS` | Think of the outline as "**qu**ota**tion**". |
| <code class="code-mono">"</code> | Closing quotation mark | Attaches to the previous word. | `KW*GS` | This is the opening quotation mark outline with the asterisk. |
| <code class="code-mono">\`</code> | Opening backtick | Attaches to the next word. | `KH-FG` | This outline is symmetrical and the right hand makes a shape that resembles a backtick. |
| <code class="code-mono">\`</code> | Closing backtick | Attaches to the previous word. | `KH*FG` | This is the opening backtick outline with the asterisk. |
| <code class="code-mono">(</code> | Opening parenthesis | Attaches to the next word. | `PREPB` | This outline makes the sound "pren" as in **p**a**ren**thesis |
| <code class="code-mono">)</code> | Closing parenthesis | Attaches to the previous word | `PR*EPB` | This is the opening parenthesis outline with the asterisk. |
| <code class="code-mono">{</code> | Opening curly brace | Attaches to the next word. | `TPR-BGT` | This symbol is also called a "**Fr**ench **br**a**ck**e**t**" (hence the outline). |
| <code class="code-mono">}</code> | Closing curly brace | Attaches to the previous word. | `TPR*BGT` | This is the opening curly brace outline with the asterisk. |
| <code class="code-mono">[</code> | Opening square bracket | Attaches to the next word. | `PWR-BGT` | This outline resembles "**br**a**ck**e**t**". |
| <code class="code-mono">]</code> | Closing square bracket | Attaches to the previous word. | `PWR*BGT` | This is the opening square bracket outline with the asterisk.
| <code class="code-mono">:</code> | Colon (for writing) | Attaches to the previous word | `STPH-FPLT` | This outline uses the top row of keys apart from the `S` |
| <code class="code-mono">;</code> | Semicolon | Attaches to the previous word. | `STPH*FPLT` | This is the colon outline but with the asterisk. |
| <code class="code-mono">:</code> | Colon (for time) | Attaches to the previous word and the next word. | `KHR-PB` | This outline resembles the word "**c**o**l**o**n**". |
| <code class="code-mono">—</code> | Emdash | Attaches to the previous word and the next word. | `PH-RB` | This outline sort of resembles "e**m**da**sh**". |
| <code class="code-mono">–</code> | Endash | Attaches to the previous word and the next word. | `TPH-RB` | This outline sort of resembles "e**n**da**sh**". |
| <code class="code-mono">-</code> | Hyphen | Attaches to the previous word and the next word. | `H-PB` | This outline resembles "**h**yphe**n**".
| <code class="code-mono">‽</code> | Interrobang | Attaches to the previous word and capitalizes the next word | `TRAPBG` | This outline resembles the word "in**t**e**rr**ob**ang**". |
| <code class="code-mono">/</code> | Slash | Attaches to the previous word and the next word | `OEU` |

![](img/20-punctuation.png)

## Commands

Situations may arise where Plover will have to be explicitly told how to format a word. The following section goes over some useful formatting commands.

### Enter
#### Outline: `R-R`

### Insert a space
#### Outline: `S-P`

Mnemonic: **sp**ace

Although Plover will automatically insert spaces before regular words, it may be necessary to manually insert a space so that two strokes should not be interpreted as a multistroke outline.


#### Example

* `KOR/TPHET` cornet
* `KOR/S-P/TPHET` core net

### Retroactively insert a space
#### Outline: `S-PD`

Mnemonic: the `S-P` outline but with `-D` to indicate that this is a retroactive command.

#### Example
* `KOR/TPHET` cornet
* `KOR/TPHET/S-PD` core net

> **NOTE:** this does not work with multistroke outlines if `S-PD` is pressed in between two strokes part of the same word. For example, the phrase "core nettle" **cannot** be written like `KOR/TPHET/S-PD/-L`.

### Suppress the next space
#### Outline: `SP-S`

Mnemonic: **s**u**pp**ress **s**pace

#### Example
* how ever `HOU/-FR`
* however `HOU/SP-S/-FR`

### Retroactively suppress the last space
#### Outline: `SP-LS`

Mnemonic: **s**u**pp**ress **l**ast **s**pace

#### Example
* `PHOR/AUFR` more over
* `PHOR/AUFR/SP-LS` moreover

### Capitalize the next word
#### Outline: `KPA`

Mnemonic: the word "cap" but with the "a" and "p" out of order

#### Example
* `-T/KPA/AOEU/HRAPBD` the island

### Retroactively capitalize the next word
#### Outline: `KA*PD`

Mnemonic: the word "capped" but with the asterisk

#### Example
* `-T/AOEU/HRAPBD/KA*PD` the Island

### Capitalize the next word and suppress the next space
#### Outline: `KPA*`

Mnemonic: the `KPA` outline with the asterisk

This is useful for starting a new sentence.

### Uncapitalize the next word
#### Outline: `HRO*ER`

Mnemonic: the word "lower" but with the asterisk

### Retroactively uncapitalize the next word
#### Outline: `HRO*ERD`

Mnemonic: the `HRO*ER` outline but with `-D` to indicate the retro command.
