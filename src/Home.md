# Lapwing for Beginners

Welcome to Lapwing for beginners—the online book for hobbyists to teach themselves stenography with Lapwing theory!

To get started:

* as a complete beginner: [Chapter 1](Chapter-01.md)
* as a current Plover user thinking about switching to Lapwing: [Appendix A](Appendix-A.md)

> **NOTE:** setting up Lapwing with the Plover app is covered in [Chapter 5](Chapter-05.md).

This resource is still in development and feedback is highly appreciated. You can reach out to me by:

* creating a new post on [GitHub discussions](https://github.com/aerickt/lapwing-for-beginners/discussions/new/choose)

## Motivation

In early 2022, I was dissatisfied with the state of learning resources for Plover theory and started working on a new dictionary. However, throughout this process, I realized that Plover theory itself had many gaps and adding all the valid outlines would be impossible. I added more and more rules to account for these theory gaps, and slowly the entire project diverged far enough from Plover to be considered its own theory.

Over two years later, Lapwing is used by several community members and is a regarded as a viable theory to learn. I created this resource to make stenography more accessible to hobbyists.

## Contributing

This book is compiled with [mdbook](https://rust-lang.github.io/mdBook/). The source can be found on [GitHub](https://github.com/aerickt/lapwing-for-beginners), and pull requests are welcome (build instructions are in the repository's README).

If you like my work, maybe consider [buying me a coffee](https://www.paypal.com/donate/?hosted_button_id=VNMUULBPTQGMC) 😄.

### Current tasks

This section covers a few shortcomings to this book I would like to address. If you want to see these realized faster, consider contributing!

#### Expanding chapter 25

The symbols and modifiers dictionaries that Lapwing uses are customized, and some official Lapwing documentation would be helpful.

* All three dictionaries (emily's symbols, modifiers, and Abby's left hand modifiers) could use more explanation on how they work.
   * More like the official documentation on their GitHub repositories.
* Abby's left hand modifiers could use a graphic.

#### Expand appendix D

Some people prefer learning by using a reference guide instead of working their way through structured chapters. This is the motivation behind the appendix D. It also provides a convenient place to look up any forgotten rules.

The theory reference guide is currently work-in-progress, and very incomplete.

#### Switching steno outline graphics to SVG

~~I would like to switch all the outline graphics to SVG so that the colours can be tweaked depending on the theme. This is a relatively low priority change, however, it can help with accessibility as the current colour theme does not have a lot of contrast.~~

~~The original graphics are screenshots created with the `plover-svg-layout-display` plugin. Creating these graphics manually was a bit time consuming, but having to create SVG files for each stroke will be even more tedious. This can be helped by:~~

* ~~Getting more people onboard to help with creating the graphics.~~
or
* ~~Writing a program to generate SVG graphics on demand.~~

This has mostly been implemented by [@IllustratedMan-code](https://github.com/IllustratedMan-code). Thanks!

There are still a few graphics and animations using the old PNGs generated via the `plover-svg-layout-display` plugin. I'm not sure what would be the best course of action to migrate these, so I'm just leaving them for now. If you have an idea, do reach out!
