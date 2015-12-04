## TheGIFFile—Web-if-ied!

For quite a while, I’ve been collecting GIFs in my GIF file (“TheGIFFile”, or “GIFFile”). (As I tell my friends: “Italian/Germans curate good GIFs.” *Disclaimer*: This may or may not be true for any other Italian/German—my sample size is 1.) At the time of writing, I have 753 GIFs taking up 1.22 GB in one of Dropbox’s old “public” folders (the ones where you can really easily get a public link to view any file within). I guess my Oma was on the right track when she gave me her old coin collection—I do have a penchant for collecting!

Recently a friend asked for access to my GIFFile.

Being the code-savvy developer (read: lazy bum) that I am, I quickly churned out a Python script that generated a list of HTML links to all the GIFs in the directory. This served its purpose, but was decidedly *boring*. This is the web—it should be sortable, tagged, searchable, all that stuff! (Hahaha hello interactive web 2.0 folks, welcome to my ramblings.)

To achieve these latter goals, I decided to refactor (so, so, so easy to do when you start out from a script that literally just prints HTML links), building out a little AngularJS app to serve as [a web interface to my GIFFile](https://dl.dropboxusercontent.com/u/9296799/TheGIFFile/index.html).

This is a work in progress. But yay learning! And yay GIFs! And yay to the friendship that got me to do this in the first place!