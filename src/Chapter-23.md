# Chapter 23: Phrase briefs

## Basic phrase briefs

One word briefs like `SKP`, `T`, `TPH`, and `-T` can be quite useful especially as they can also be used in phrases.

Here is a non-exhaustive table of some common phrase briefs.

| Brief | Outline | Mnemonic |
| ---- | ---- | ---- |
| "is it" | `ST` | "is" + "it" |
| "is the" | `S-T` | "is" + "the" |
| "and the" | `SKP-T` | "and" + "the" |
| "and he" | `SKPE` | "and" + `E` |
| "and I" | `SKPEU` | "and" + `EU` |
| "and you" | `SKPU` | "and" + "you" |
| "at the" | `TE` | a**t** th**e** (this one is quite arbitrary) |
| "it is" | `T-S` | "it" + `-S` |
| "in the" | `TPH-T` | "in" + "the" |

Again, if you come across a phrase that you think could be briefed, try looking it up first. If an outline is not available, this is where you should add your own!

Lapwing doesn't contain many phrase briefs (compared to other theories), but this is because I recommend learning Jeff's phrasing. It is a very useful system that is already packaged in the <code class="code-mono">plover-lapwing-aio</code> plugin.

## Jeff's phrasing

Jeff's phrasing system enables writing many common phrases, especially those that involve pronouns and verbs. For example, have a look at the following monkeytype quote:

> **They used to** tell me **I was** building a dream, and so I followed the mob. When there was earth to plow or guns to bear, **I was** always there, right on the job. **They used to** tell me **I was** building a dream with peace and glory ahead. Why should I be standing in line just waiting for bread? Once I built a railroad, **I made** it run. Made it race against time. Once I built a railroad, now it's done. Brother, **can you** spare a dime?

Every bolded phrase can be written in one stroke using Jeff's phrasing. There are likely some that I have also missed, as I personally do not go beyond the basics of Jeff's phrasing.

### Setup

Make sure you are using the <code class="code-mono">plover-lapwing-aio</code> plugin, or you have manually configured your dictionary stack by following [these instructions](Appendix-B.md).

### Basics

Jeff's phrasing is a Magnum-esque phrasing system that allows you to write phrases involving pronouns and verbs.

In its most basic form, these are some phrases you can write:

 - I go
 - she does
 - he wants
 - they need
 - we find
 - it runs

Jeff's phrasing works by having pronoun chords on the left side, and verbs on the right side.

While this does mean that a lot of the chords are quite arbitrary (since you don't have vowels to work with), the speed boost you can achieve is well worth it. This is especially the case as Jeff's phrasing is quite extensive.

| Pronoun | Chord |
| ---- | ---- |
| I | `SWR` |
| she | `SKWHR` |
| he | `KWHR` |
| they | `TWH` |
| we | `TWR` |
| it | `KPWH` |

If you try these chords out on their own, you will find that they output the pronouns by themselves. However, these aren't particularly useful, so let's add in some right hand verbs.

| Verb | Chord |
| ---- | ---- |
| go | `-G` |
| find | `-PBLG` |
| want | `-P` |
| need | `-RPG` |

To write a phrase, you just have to combine a pronoun chord and a verb chord. Try some of phrases out!

* `SWR-RPG` I need
* `SKWHR-RPG` she needs
* `TWH-P` they want
* `KPWH-P` it wants

Notice how Jeff's phrasing automatically conjugates the verb by adding an ending "s" where appropriate.

If you want to see all of the possible verbs and ending chords, take a look at [the documentation](https://github.com/jthlim/jeff-phrasing#verbs-and-suffix-words).

#### Past tense verbs

If you want to write a phrase like "I needed", you only need to add the `-D` key to indicate past tense.

* `SWR-RPGD` I needed
* `SKWHR-RPGD` she needed
* `TWH-PD` they wanted
* `KPWH-PD` it wanted

#### Negation

If you want to negate a phrase, use the asterisk key. You can also combine this with the `-D` key.

* `SWR*RPGD` I didn't need
* `SKWHR*RPG` she doesn't need
* `TWH*P` they don't want
* `KPWH*PD` it didn't want

#### Modifier words

You can add in some modifier words in addition to any of the other negation or tense features.

| Modifier word | Chord |
| ---- | ---- |
| can | `A` |
| shall | `O` |
| will | `AO` |

* `SWRORPGD` I should need
* `SKWHRAORPG` she will need
* `TWHO*PD` they shouldn't want
* `KPWHOP` it shall want

### Advance usage

[The documentation](https://github.com/jthlim/jeff-phrasing) lists out a lot more features that I have not outlined in this page. I definitely recommend you keep it bookmarked if you want to learn this system. However, I myself have only learned what I have listed on this page plus a few more ending chords and I still find this system incredibly useful. If I get the time to learn the other features, I will update this page.
