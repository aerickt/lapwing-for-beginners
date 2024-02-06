# Chapter 19: Punctuation and Commands

## Recommended pace

**Recommended time to spend on this chapter: 1 day.**

1. Read [punctuation](#punctuation) (**10 minutes**)
2. Read [commands](#commands) (**10 minutes**)

Remember to take breaks!

## Useful links

* [Punctuation graphic](img/19-punctuation.png)

## Intro
In this chapter, we will look at punctuation and Plover commands which tend to be less intuitive. You will have to simply memorize many of these. There won't be any practice material for this chapter; instead, I encourage you to start using steno whenever you can and refer back to this page whenever you need to. This would also be a great time to start playing typing games like TypeRacer or Monkeytype if you are interested in that.

## Punctuation

You should be familiar with how regular words in Plover are written with spaces in between them (apart from special translations). For punctuation, however, you do not necessarily want to have a space on either side of the symbol. Thus, each punctuation outline has its own special formatting.

By default, every translation will have a space on either side—it won't be attached to the previous or the next word. Every translation also won't affect the capitalization of the next word. In the table below, the formatting specifies where each translation differs from default formatting.

| Character | Name | Formatting | Steno outline | Mnemonic |
| ---- | ---- | ---- | ---- | ---- |
| <code>.</code>  | Period | Attaches to the previous word and capitalizes the next word. | `TP-PL` | Written by the top index and middle finger on both hands. |
| <code>?</code> | Question mark | Attaches to the previous word and capitalizes the next word. | `KW-PL` | This is like the outline for a period, but the shape resembles a rising intonation as would happen in a question. |
| <code>!</code> | Exclamation mark | Attaches to the previous word and capitalizes the next word. | `TP-BG` | This is like the period outline, but sloped downwards to mirror the question mark outline.|
| <code>.</code> | Decimal point | Attaches to the previous word and the next word. | `P-P` | This is like the period outline but is only pressed with the middle fingers. |
| <code>,</code> | Comma | Attaches to the previous word. | `KW-BG` | This is similar to the period outline, but is on the bottom row. |
| <code>"</code> | Opening quotation mark | Attaches to the next word. | `KW-GS` | Think of the outline as "**qu**ota**tion**". |
| <code>"</code> | Closing quotation mark | Attaches to the previous word. | `KW*GS` | This is the opening quotation mark outline with the asterisk. |
| <code>\`</code> | Opening backtick | Attaches to the next word. | `KH-FG` | This outline is symmetrical and the right hand makes a shape that resembles a backtick. |
| <code>\`</code> | Closing backtick | Attaches to the previous word. | `KH*FG` | This is the opening backtick outline with the asterisk. |
| <code>(</code> | Opening parenthesis | Attaches to the next word. | `PREPB` | This outline makes the sound "pren" as in **p**a**ren**thesis |
| <code>)</code> | Closing parenthesis | Attaches to the previous word | `PR*EPB` | This is the opening parenthesis outline with the asterisk. |
| <code>{</code> | Opening curly brace | Attaches to the next word. | `TPR-BGT` | This symbol is also called a "**Fr**ench **br**a**ck**e**t**" (hence the outline). |
| <code>}</code> | Closing curly brace | Attaches to the previous word. | `TPR*BGT` | This is the opening curly brace outline with the asterisk. |
| <code>[</code> | Opening square bracket | Attaches to the next word. | `PWR-BGT` | This outline resembles "**br**a**ck**e**t**". |
| <code>]</code> | Closing square bracket | Attaches to the previous word. | `PWR*BGT` | This is the opening square bracket outline with the asterisk.
| <code>:</code> | Colon (for writing) | Attaches to the previous word | `STPH-FPLT` | This outline uses the top row of keys apart from the `S` |
| <code>;</code> | Semicolon | Attaches to the previous word. | `STPH*FPLT` | This is the colon outline but with the asterisk. |
| <code>:</code> | Colon (for time) | Attaches to the previous word and the next word. | `KHR-PB` | This outline resembles the word "**c**o**l**o**n**". |
| <code>—</code> | Emdash | Attaches to the previous word and the next word. | `PH-RB` | This outline sort of resembles "e**m**da**sh**". |
| <code>–</code> | Endash | Attaches to the previous word and the next word. | `TPH-RB` | This outline sort of resembles "e**n**da**sh**". |
| <code>-</code> | Hyphen | Attaches to the previous word and the next word. | `H-PB` | This outline resembles "**h**yphe**n**".
| <code>‽</code> | Interrobang | Attaches to the previous word and capitalizes the next word | `TRAPBG` | This outline resembles the word "in**t**e**rr**ob**ang**". |
| <code>/</code> | Slash | Attaches to the previous word and the next word | `OEU` |

![](img/19-punctuation.png)

## Commands

Quite often, you might have to manually tell Plover to format a word a certain way.

### Insert a space
#### Outline: `S-P`

Mnemonic: **sp**ace

Although Plover will automatically insert spaces before regular words, sometimes you might have to explicitly tell Plover to insert a space so that two strokes should not be interpreted as a multistroke outline.

For example, `KOR/TPHET` is the word "cornet" in the Lapwing dictionary, but this makes it impossible to write the phrase "core net". Instead, we use the "insert space" command in between the two strokes:

`KOR/S-P/TPHET` → core net

### Retroactively insert a space
#### Outline: `S-PD`

Mnemonic: the `S-P` outline but with `-D` to indicate the retro command

This outline will insert a space before the last stroke.

`KOR/TPHET/S-PD` → core net

> **NOTE:** this doesn't work with multistroke outlines.

For example, you cannot use this technique to write the phrase "core nettle". What's happening is that when you write `KOR/TPHET/S-PD/-L`, Plover interprets the second word as `TPHET/S-PD/-L` which, of course, isn't defined in the dictionary.

### Suppress the next space
#### Outline: `SP-S`

Mnemonic: **s**u**pp**ress **s**pace

Example:

`HOU/SP-S/-FR` → however

### Retroactively suppress the last space
#### Outline: `SP-LS`

Mnemonic: **s**u**pp**ress **l**ast **s**pace

Example:

`PHOR/AUFR/SP-LS` → moreover

### Capitalize the next word
#### Outline: `KPA`

Mnemonic: the word "cap" but with the "a" and "p" out of order

Example:

`-T/KPA/AOEU/HRAPBD` → the Island

### Retroactively capitalize the next word
#### Outline: `KA*PD`

Mnemonic: the word "capped" but with the asterisk

Example:

`-T/AOEU/HRAPBD/KA*PD` → the Island

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

## No test this chapter!
