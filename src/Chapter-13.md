# Chapter 13: Prefixes and suffixes

## Useful links

* [Words with -y and -ly suffixes drill](practice/13-EU.txt)
* [Words with -ar, -or, and -er suffixes drill](practice/13-ar-or-er.txt)
* [Words with -ful and -ness suffixes drill](practice/13-ful-ness.txt)
* [Right hand `-BLT` words drill](practice/13-right-BLT.txt)
* [Right hand ment and let words drill (one-stroke drill)](practice/11-right-ment-and-let.txt)
* [Right hand `-BL` and `-BLT` words drill (one-stroke drill)](practice/11-right-BL-BLT.txt)
* [Right hand `KWR` suffix words drill](practice/13-KWR.txt)
* [Chapter 13 test](practice/13-test.txt)

## Intro

For words with more than one syllable, outlines with multiple strokes are used. There are two primary techniques: *affix strokes* (prefixes and suffixes) and *syllabic splitting*. The former is slightly more straightforward and is covered in this chapter.

## Prefix strokes

Every translation so far found in examples or exercises have been regular words without any special formatting. For these words, Plover will insert a space before every word. To see how this works behind the scenes, open the main window of Plover, and go to <code class="code-mono">Tools → Add Translation</code>. Writing <code class="code-mono">STROEBG</code> into the <code class="code-mono">Strokes</code> field will show the following:

![](img/13-add-translation-stroke.png)

Compare this to prefix strokes; writing `PRAOE` (the prefix stroke for "pre^") into the <code class="code-mono">Strokes</code> field results in:

![](img/13-add-translation-pre.png)

Here, the curly braces denote that there is special formatting rules contained inside the braces. The caret tells Plover to suppress the space where it is located; any translation of the form <code class="code-mono">{abc^}</code> is a prefix.

Prefix strokes enable writing words such as  "preview" like so: `PRAOE/SRAOU`. Most prefix strokes are fairly intuitive and take precedence when they conflict with other translations. For example, the "for^" prefix as in "forget" `TPOR/TKPWET` is written as `TPOR` while the word "for" is briefed. It's not necessary to memeorize many of these prefix strokes.

### Common Prefix Strokes

* a^ `A`
  - As in "<ins>a</ins>round" `A/ROUPBD`
* co^ `KOE`
  - As in "<ins>co</ins>star" `KOE/STAR`
* de^ `TKAOE`
  - As in "<ins>de</ins>plane" `TKAOE/PHRAEPB`
* for^ `TPOR`
  - As in "<ins>for</ins>go" `TPOR/TKPWOE`
* in^ `EUPB`
  - As in "<ins>in</ins>fix" `EUPB/TPEUBGS`
* mis^ `PHEUS`
  - As in "<ins>mis</ins>take" `PHEUS/TAEUBG`
* non^ `TPHOPB`
  - As in "<ins>non</ins>stop" `TPHOPB/STOP`
* pro^ `PROE`
  - As in "<ins>pro</ins>tip" `PROE/TEUP`
* re^ `RAOE`
  - As in "<ins>re</ins>take" `RAOE/TAEUBG`
* sub^ `SUB`
  - As in "<ins>sub</ins>way" `SUB/WAEU`

### Prefix usage

It is difficult to write certain words using prefixes alone. For example, `KOPB/TPAOUS` may be a valid outline for "confuse", but this requires knowing if `KOPB` is a prefix stroke. Furthermore, "fuse" is not the root word of "confuse"—the two words aren't related in meaning. Syllabic splitting is used for this word instead (covered in chapter 15).

**For now, only use prefix strokes when they make sense semantically. A prefix stroke should modify a root word that can exist on its own.**

> In this context, a **root word** is any group of letters that can exist by itself as a word; "do" would be considered the root word in "redo", but "tain" in "contain" would not be considered one ("tain" is not a word).

### Prefixes with different pronunciations

English pronunciation differs from person to person, but even a single speaker may pronounce a word differently depending on the context. For example, the word "defect" can be pronounced with a *long e* `TKAOE/TPEBGT` or a *short e* `TKE/TPEBGT` depending on if it is a noun or a verb.

Here is a non-exhaustive list of some alternative prefix strokes:

* "de-" `TKE`
* "pre-" `PRE`
* "pro-" `PRO`
* "re-" `RE`

This chapter later covers [looking up prefixes and suffixes](#looking-up-prefixes-and-suffixes) which is handy for finding these alternative prefix strokes.

### Practice material?

There is no practice material for this section. It's not important to explicitly know and memorize prefix strokes as they tend to be implicitly used with the syllabic splitting technique (to be covered later).

## Suffix strokes

Much like how a prefix stroke attaches to the next word, a *suffix* stroke attaches to the previous word. Unlike prefix strokes, however, suffixes tend to be less intuitive and most have to be memorized. This section is split into smaller subsections with different "families" of suffix strokes to hopefully make them easier to remember.

It is very important to understand when it is appropriate to use a suffix. In most cases, they can only be used to modify a root word (much like prefix strokes).

> Pay careful attention to the information in each subsection telling you when it is appropriate to use those suffix strokes.

### `*` suffixes

The following suffixes all contain a single vowel key, an asterisk, and the `-R`.

| Stroke | Suffix | Example outline | Example translation |
| ------ | -------| --------------- | ------------------- |
| `A*R` | ^ar | `KREL/A*R` | cellar |
| `O*R` | ^or | `ABGT/O*R` | actor |
| `*ER` | ^er | `TAOEFP/*ER` | teacher |

> In chapter 15, you will learn that `KWR` can also represent a glide. `KWRAR`, `KWROR`, and `KWRER` would actually represent ^iar, ^ior, and ^ier, respectively. For all other suffixes, these are merged in the same stroke starting with `KWR`. However, these three suffixes have a lot more potential conflicts, so they are kept separate, so these suffixes follow a different pattern.

**Use these suffixes only to modify a root word. Ensure that the root word relates to the full word semantically.**

#### Examples of correct usage

* upper `UP/*ER`
* player `PHRAEU/*ER`
* planar `PHRAEPB/A*R`
* hangar `HAPBG/A*R`
* tormentor `TORPLT/O*R`
* sailor `SAEUL/O*R`

#### Examples of wrong usage

* imposter `EUPL/POFT/*ER` ❌
   - "impost" does not refer to a deceptive action in the same way "imposter" refers to the person who partakes in this action
* mutter `PHUT/*ER` ❌
  - "mutter" does not relate to "mutt" (slang for a dog)
* pillar `PEUL/A*R` ❌
  - "pill" refers to a medicinal substance while "pillar" refers to an upright post
* sugar `SHUG/A*R` ❌
  - `SHUG` is not a word
* humor `HAOUPL/O*R` ❌
  - `HAOUPL` is not a word
* mentor `PHEPBT/O*R` ❌
  - "ment" is not the root of "mentor"

> These are correctly written with syllabic splitting covered in chapter 15.

#### Practice material

[Words with -ar, -or, and -er suffixes drill](practice/13-ar-or-er.txt)

5–10 minutes is sufficient for this drill.

### Right hand chord suffixes

These suffixes are composed entirely of consonant keys on the right hand.

| Stroke | Suffix | Example outline | Example translation |
| ------ | -------| --------------- | ------------------- |
| `-FL` | ^ful | `HEL/-P/-FL` | helpful |
| `-PBS` | ^ness | `EUL/-PBS` | illness |

**Use these suffixes only to modify a root word. Ensure that the root word relates to the full word semantically.**

#### Examples of correct usage

* hopeful `HOEP/-FL`
* rightful `RAOEUT/-FL`
* ripeness `RAOEUP/-PBS`
* thickness `THEUBG/-PBS`

> Both "ful" and "ness" are rarely used in English as non-suffixes so it's difficult to find examples of incorrect usage.

#### Practice material

[Words with -ful and -ness suffixes drill](practice/13-ful-ness.txt)

### Right hand compound cluster suffixes

Like the last subsection, these suffixes are also composed entirely of consonant keys on the right hand.

| Stroke | Suffix | Example outline | Example translation |
| ------ | -------| --------------- | ------------------- |
| `-PLT` | ^ment | `TRAOET/-PLT` | treatment |
| `-BLT` | ^ability or ^ibility | `EUPB/-BLT` | inability |
| `-BL`  | ^able | `PHRAEU/-BL` | playable |
| `-LT` | ^let | `EUPB/-LT` | inlet |

**These suffixes can be used whenever as they are also compound clusters.**

#### Examples: as a root word + suffix

In these words, the suffix is used to modify a root word.

* basement `PWAEUS/-PLT`
* movement `PHAOUF/-PLT`
* possibility `POS/-BLT`
* sensibility `SEPBS/-BLT`
* readable `RAED/-BL`
* viewable `SRAOU/-BL`
* outlet `OUT/-LT`
* sublet `SUB/-LT`

#### Examples: as a compound cluster

In these words, the suffix is used as a compound cluster; notice how the group of letters before the suffix are not root words related to the full translations.

* cement `SE/-PLT`
* ferment `TPER/-PLT`
* probability `PROB/-BLT`
* pliability `PHRAOEU/-BLT`
* humble `HUPL/-BL`
* arable `AEUR/-BL`
* omelet `OPL/-LT`
* bullet `PWU/-LT`

#### Compound clusters in a single stroke

Several of these examples can be written in one stroke by putting the suffix chord into the first stroke. The above examples are only to illustrate these how these compound clusters have the second function of behaving as suffix strokes.

For these chords, it is recommended to include the suffix chord in the first stroke for a slight speed advantage. To determine if an outline can be compressed into one stroke, take into account steno order and whether any keys are being overlapped.

For example, `SEPLT` is perfectly valid as none of the keys in `SE` overlap with the keys in `-PLT`. However, to write "humble" in one stroke, the `-BL` chord would have to overlap with the `-PL` chord in the first stroke as `-B` comes in between `-P` and `-L` in steno order.

The following are the same words from above but with the compound cluster in the first stroke:

* cement `SEPLT`
* ferment `TPERPLT`
* pliability `PHRAOEUBLT`
* arable `AEURBL`
* bullet `PWULT`

The rest of the examples are not possible to write in one stroke:

* probability `PROB/-BLT`
  - `-B` key overlaps in both strokes
* humble `HUPL/-BL`
  - `-L` key in the second stroke overlaps with the `-PL` chord in the first stroke
* omelet `OPL/-LT`
  - `-L` key overlaps in both strokes

> **NOTE:** although overlapping these strokes is not valid in Lapwing theory, they are perfectly valid briefs as long as there are no entries already existing in the dictionary. Feel free to add/use `PROBLT`, `HUPBL`, or `OPLT` as briefs.

#### Practice material

[Right hand `-BLT` words drill](practice/13-right-BLT.txt)

The `-PLT`, `-LT`, and `-BL` compound clusters should already be already be familiar, however, the practice material is listed below as a refresher if needed.

[Right hand ment and let words drill (one-stroke drill)](practice/11-right-ment-and-let.txt)

[Right hand `-BL` and `-BLT` words drill (one-stroke drill)](practice/11-right-BL-BLT.txt)

### `KWR` suffixes

The `KWR` chord has two uses in Lapwing theory. It is widely used in suffixes where it could be thought of as a linker chord without any associated sound; its job is simply to connect to the previous word. This subsection has many suffix strokes to memorize, but they should hopefully be somewhat intuitive as they resemble their phonetic sounds to some degree.

| Stroke | Suffix | Example outline | Example translation |
| ------ | -------| --------------- | ------------------- |
| `KWRAL` | ^al | `SPAOEUPB/KWRAL` | spinal |
| `KWRAPBT` | ^ant | `SAOEL/KWRAPBT` | sealant |
| `KWRAEUGS` | ^ation | `TPHROET/KWRAEUGS` | flotation |
| `KWRAOEUZ` | ^ize | `PHOEBL/KWRAOEUZ` | mobilize |
| `KWROUT` | ^out | `HOELD/KWROUT` | holdout |
| `KWREUF` | ^ive | `TPEFT/KWREUF` | festive |
| `KWREUFPL` | ^ism | `TAOUR/KWREUFPL` | tourism |
| `KWREUFT` | ^ist | `ART/KWREUFT` | artist |
| `KWREUPB` | ^in | `PHRUG/KWREUPB` | plugin |
| `KWREUBG` | ^ic | `PWAEUS/KWREUBG` | basic |
| `KWREPB`  | ^en | `SOFT/KWREPB` | soften |

**Use these suffixes only to modify a root word. Ensure that the root word relates to the full word semantically.**

#### Examples of correct usage

* coolant `KAOL/KWRAPBT`
* bailout `PWAEUL/KWROUT`
* flirtation `TPHREURT/KWRAEUGS`
* stylize `STAOEUL/KWRAOEUZ`
* active `ABGT/KWREUF`
* realism `RAEL/KWREUFPL`
* purist `PAOUR/KWREUFT`
* herein `HAOER/KWREUPB`
* cubic `KAOUB/KWREUBG`
* rotten `ROT/KWREPB`

#### Examples of incorrect usage

* pedant `PED/KWRAPBT` ❌
  - "ped" unrelated to "pedant"
* captive `KAPT/KWREUF` ❌
  - "capt" unrelated to "captive"

#### Practice material

[Right hand `KWR` suffix words drill](practice/13-KWR.txt)

### `EU` suffixes

The suffixes in this subsection contain the `EU` vowel and some consonant on the left hand. While the `EU` chord represents the *short i* vowel as in "kiss", `EU` is also used for the *long e* vowel as in "tee" under some circumstances.

> This comes from Plover theory's main.json and it is unfortunately an arbitrary rule that would be difficult to change Lapwing theory. These rules are covered more formally in syllabic splitting.

One such circumstance where `EU` represents the *long e* sound is in the following suffixes:

| Stroke | Suffix | Example outline | Example translation |
| ------ | -------| --------------- | ------------------- |
| `KWREU` | ^y | `KRAEUZ/KWREU` | crazy |
| `HREU` | ^ly | `TPEURPL/HREU` | firmly |

**Use these suffixes only to modify a root word.**

> Remember to not double consonants between strokes. If you are writing a word that already ends in "l", use `KWREU` instead of `HREU` (see "hilly" example below).

#### Examples of correct usage

* chatty `KHAT/KWREU`
* hilly `HEUL/KWREU`
* freely `TPRAOE/HREU`
* mostly `PHOEFT/HREU`

#### Examples of incorrect usage
* city `SEUT/KWREU` ❌
  - This would be "sitty"
* hilly `HEUL/HREU` ❌
  - Cannot double the "l"
* lily `HREUL/KWREU` ❌
  - "lil" is not the root word of "lily"

#### Practice material

[Words with -y and -ly suffixes drill](practice/13-EU.txt)

> Since this only contains two suffixes, it is not necessary to spend too long on this drill. 5 minutes is sufficient.

### Suffixes and orthography

The spellings of some words in examples and exercises so far have not been entirely consistent with a prefix stroke modifying a root word. For example, "purist" was listed above as `PWAOUR/KWREUFT`, but the root word is really spelled "pur<ins>e</ins>" with an "e" at the end.

Here are some other examples where adding a suffix to a root word changes its spelling:

* "haste" + "-y" → "hasty"
  - "e" is removed
* "lucky" + "-ly" → "luckily"
  - "y" changed to "i"
* "base" + "-ic" → "basic"
  - "e" is removed

It is not necessary to think about these spelling differences  consciously with suffix strokes; the Lapwing dictionary and the Plover steno engine automatically handles these spelling quirks.

* hasty `HAEUFT/KWREU`
* luckily `HRUBG/KWREU/HREU`
* basic `PWAEUS/KWREUBG`

## Prefix priority

When there are conflicts between prefixes strokes and words, the former will be given higher priority for the primary outline. The words will instead be briefed. This allows writing complicated words fairly intuitively without having to explicitly remember prefixes. Of course, this does come at the cost of having to memorize more arbitrary briefs. Since common words are often briefed, however, it does not require significantly more mental effort.

| Prefix/word | Prefix Outline | Recommended word outline(s) | Explanation |
| ---- | ---- | ---- | ---- |
| a | `A` | `AEU` | `A*` is already used. |
| bi^ (by) | `PWAOEU` | `PWEU` | There is a three way conflict between "by", "bye", and "buy". |
| be | `PWE` | `-B` | Useful in phrase briefs. |
| for | `TPOR` | `TP-R` | Useful in phrases like "for the" `TP-RT`. |
| in | `EUPB` | `TPH` | Useful in phrases like "in the" `TPH-T`. |
| or | `OR` | `AOUR` or `AUR` | `O*R` is already used. |
| out | `OUT` | `AOUT` | Alternative vowel chord. |
| on | `OPB` | `AUPB` | Alternative vowel chord. |
| tri^ (try) | `TRAOEU` | `TRAO*EU` or `TREU` | The first is the more "formal" outline, but the second matches the pattern with "by". |

> You will see this table again in later chapters.

## Looking up prefixes and suffixes

The Plover's lookup tool can be used to find prefix and suffix strokes not listed in this chapter. In Plover's main window, press <code class="code-mono">Tools → Lookup</code>. Type in the letters that make up the translation and the tool will show outlines for prefixes, suffixes, and regular words; the dictionary formatting with the curly braces and carets is not required.

![looking up "in"](img/13-lookup.png)

## Tailoring your own dictionary to your understanding of etymology

Trying to use affix strokes only when they make sense semantically can be tricky. It is unreasonable to require learning the etymology of every word before one can write it. In some words, it is somewhat obvious when a suffix stroke shouldn't be used, but this should be up to the individual's discretion.

For example, the Lapwing dictionary doesn't view "cop" as the root word of "copper". This is because "cop" refers to a police officer, and "copper" is an element. This reasoning is very obvious to me. However, "copper" has another meaning; [it is also slang for police officer](https://en.m.wiktionary.org/wiki/cop#Etymology_2). "Cop" is simply just a shortened version of "copper". That being said, this usage is not part of my dialect—I have never heard anyone in speech say "copper" to mean police officer. Therefore, I don't consider "cop" and "copper" to be related semantically, and I don't use affix strokes.

> Maybe for you, these two words are very related. In this case, you should definitely add `KOP/*ER` for "copper"! Although, this particular word already works (without being explicitly defined) because of the orthography rules.

It is completely acceptable bend the rules about modifying root words with affixes. It is not necessary to add entries that only follow the "correct etymology". Outlines should be quick to recall. Having to look up origin and history of a word defeats this purpose. Steno is highly personal—one should use their own understanding and intuition.

> **NOTE:** before adding your own entries, I highly encourage you to read past chapter 15. It covers the other method for writing multisyllable words. Most words in the default Lapwing dictionary can be written with this technique, while affix stroke usage tends to be more strict.

## Seemingly incorrect prefix usage

This section mentions topics that have not yet been covered, but if you tend to use the lookup tool a lot, make sure to read it over. There are several outlines in the dictionary that may seem like they are using prefix strokes incorrectly.

### Regular prefixes in syllabic splitting

In chapter 15, you will learn to write words like "trident" as `TRAOEU/TKEPBT`. It may seem like this is violating prefix usage since "dent" is not the root word of "trident"—the two are unrelated in meaning. However, this outline is actually just a result of the syllabic splitting method covered in chapter 15. Syllabic splitting does not care if `TRAOEU` is a prefix or not.

Keep this in mind when you use the lookup tool. If you spot an outline that uses an affix incorrectly, the outline in question is just using syllabic splitting. It's not that prefix rules are being broken; the outline has just been constructed use an entirely different method.

### Brief versions of multistroke prefixes

Prefix outlines do not have to be one stroke long. Using syllabic splitting, it is actually possible to construct prefix outlines with multiple strokes. For example, the prefix auto^ is written as `AU/TOE`. Again, you may sometimes see outlines like `AU/TOE/PHAEUT` for "automate" when using the lookup tool. This may seem incorrect, but remember that these outlines aren't actually using a prefix stroke, only syllabic splitting.

For these multistroke prefixes, there are sometimes briefer one-stroke versions that can be used instead. For `AU/TOE`, there is `OEUT` as in `OEUT/PHAEUT` for "automate". This may also seem like incorrect usage of a prefix stroke. However, keep in mind that `OEUT` is a brief-y prefix stroke. Regular one-stroke or multistroke prefixes that are not briefs are still supposed to be used strictly to alter a root word.

## Chapter 13 test

This chapter's test consists of all the practice drills in this chapter. Make sure your settings are configured as such:

![test settings](img/5-test-settings.png)

* Limit word count: 45
* Start from word: 1
* Repetitions: 3
* Sort: random
* Show hint for every word: unchecked
* Hide hint on last repetition: unchecked
* Show hint on misstroke: checked

[Click here to access the chapter 13 test](practice/13-test.txt)

### Recommended completion goal

This is only a suggestion if you are unsure of when to move on to the next chapter; it is not a strict requirement!

**Aim for 10–40 WPM with 90% accuracy.**

**You may use the test material as practice!**
