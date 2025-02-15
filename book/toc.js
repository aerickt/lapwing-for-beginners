// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Home.html">Home</a></li><li class="chapter-item expanded affix "><a href="Chapter-01.html">Chapter 1: Introduction</a></li><li class="chapter-item expanded affix "><a href="Chapter-02.html">Chapter 2: Steno hardware and software</a></li><li class="chapter-item expanded affix "><a href="Chapter-03.html">Chapter 3: How to learn steno</a></li><li class="chapter-item expanded affix "><a href="Chapter-04.html">Chapter 4: The layout</a></li><li class="chapter-item expanded affix "><a href="Chapter-05.html">Chapter 5: Lapwing setup and basics</a></li><li class="chapter-item expanded affix "><a href="Chapter-06.html">Chapter 6: Left hand consonants continued</a></li><li class="chapter-item expanded affix "><a href="Chapter-07.html">Chapter 7: Vowels</a></li><li class="chapter-item expanded affix "><a href="Chapter-08.html">Chapter 8: Vowels continued</a></li><li class="chapter-item expanded affix "><a href="Chapter-09.html">Chapter 9: Right hand chords</a></li><li class="chapter-item expanded affix "><a href="Chapter-10.html">Chapter 10: Right hand chords continued</a></li><li class="chapter-item expanded affix "><a href="Chapter-11.html">Chapter 11: Right hand compound clusters</a></li><li class="chapter-item expanded affix "><a href="Chapter-12.html">Chapter 12: Wrapping up basic words</a></li><li class="chapter-item expanded affix "><a href="Chapter-13.html">Chapter 13: Prefixes and suffixes</a></li><li class="chapter-item expanded affix "><a href="Chapter-14.html">Chapter 14: Suffix keys and compound words</a></li><li class="chapter-item expanded affix "><a href="Chapter-15.html">Chapter 15: Syllabic splitting</a></li><li class="chapter-item expanded affix "><a href="Chapter-16.html">Chapter 16: Top 200 common English words</a></li><li class="chapter-item expanded affix "><a href="Chapter-17.html">Chapter 17: Shortening techniques</a></li><li class="chapter-item expanded affix "><a href="Chapter-18.html">Chapter 18: Fingerspelling and numbers</a></li><li class="chapter-item expanded affix "><a href="Chapter-19.html">Chapter 19: Proper nouns</a></li><li class="chapter-item expanded affix "><a href="Chapter-20.html">Chapter 20: Punctuation and commands</a></li><li class="chapter-item expanded affix "><a href="Chapter-21.html">Chapter 21: UK spellings</a></li><li class="chapter-item expanded affix "><a href="Chapter-22.html">Chapter 22: Theory principles wrap-up</a></li><li class="chapter-item expanded affix "><a href="Chapter-23.html">Chapter 23: End of basic theory</a></li><li class="chapter-item expanded affix "><a href="Chapter-24.html">Chapter 24: Phrase briefs</a></li><li class="chapter-item expanded affix "><a href="Chapter-25.html">Chapter 25: Symbols and modifiers</a></li><li class="chapter-item expanded affix "><a href="Chapter-26.html">Chapter 26: Editing text</a></li><li class="chapter-item expanded affix "><a href="Appendix-A.html">Appendix A: Switching to Lapwing from Plover</a></li><li class="chapter-item expanded affix "><a href="Appendix-B.html">Appendix B: Setting up Lapwing manually</a></li><li class="chapter-item expanded affix "><a href="Appendix-C.html">Appendix C: Lapwing with Javelin</a></li><li class="chapter-item expanded affix "><a href="Appendix-D.html">Appendix D: Theory Reference Guide</a></li><li class="chapter-item expanded affix "><a href="Glossary.html">Glossary</a></li><li class="chapter-item expanded affix "><a href="Changes.html">Changes</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
