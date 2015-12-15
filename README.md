**Hit a problem using Node.js?**<br>
**Confused about how to use a module?**<br>
**Maybe you just want to profess your love for Node.js?**

The Node.js IRC channels are vibrant gatherings of *volunteers* that want to make
Node.js and its friends the best platform available on ALL operating systems!
<br>
<br>
**Are you a rookie?**<br>
**Just getting starting?**<br>
**A bit nervous to ask a question that might be silly?**

Don't worry- most people feel that way initially. To make Node.js even more
super awesome, it requires new people come on board. And we all understand
that they *may* have silly questions. It isn't a big deal- but there are a
few things you should know before you jump in. Here we go...

## Important links
[Freenode Webchat](http://webchat.freenode.net/)<br>
Connecting can't get much easier. Freenode offers this **free** in-browser chat client.

[Code of Conduct](http://confcodeofconduct.com/)
The node.js IRC should be welcoming to everyone. Use this code of conduct to check yourself before
you wreck yourself.

tl;dr: behavior that causes people to be unwelcome/uncomfortable should be kept out of the channel.

[Policy on Trolling](http://blog.izs.me/post/30036893703/policy-on-trolling)<br>
Read it. Don't break it.

[IRC Logs](http://logs.nodejs.org/channels)<br>
Never miss a thing!<br>
Catch up on way-back-when goodness!<br>
Figure out what that darn link was that you can't remember!<br>

[Stack Overflow](http://stackoverflow.com/questions/tagged/node.js)<br>
Your problem may already be solved! Or if IRC doesn't work out for you- definitely
give Stack Overflow a whirl. Many great experts helping out over there.

[Node.js Slack Community](http://node-dev.slack.com)<br> 
An open community for Node.js discussion.  Includes a channel which is integrated directly with #Node.js IRC for easy communication. 
[Visit nodeslackers.io to register](http://nodeslackers.io) 

## World Wide!
The Node.js community is global. It is very important to realize that your mid
afternoon crisis is happening at 3AM for others! (Or should I say 03:00) There is
no time-of-day that is "best" to seek help.

## What to expect
The channels are open to all. That includes experts, novices, noobies, and... of
course the occasional smart ass, jerk, hater, troll ...etc. The channels
are moderated by several volunteers living all around the world. In the inevitable
case of a misbehaving member, they will step in and resolve the issue to ensure
the community keeps a positive vibe.

Everyone in a channel is there on their own free will. No one is *required* to
help you. Most people just have the channel open, are mostly silent, but enjoy
multi tasking and helping whenever they can.

Many module authors are connected but have their IRC client running in the
background. If you have a question about a specific module, it is better to ask
your question to everyone and not directly to the author. Module authors are
volunteers too! They may be busy at the moment.

> TIP!: A question asked directly to someone will be ignored by everyone else!<br>
> TIP!: NEVER ASSUME A NON-RESPONSE IS VICIOUS!


## Asking for help
I'm going to unofficially declare:

* RULE #1: Ask Google first. If your answer is easily found on Google do not ask in IRC.
* RULE #2: Check the [Node.js API docs](http://nodejs.org/api/). They're actually quite good!

> TIP! You can find older Node.js API docs here: http://nodejs.org/docs/

If you haven't put in a reasonable effort to resolve the issue on your own- you'll
just irritate people. Volunteers want to *help* you- not *work* for you.

Also, it is a really good idea to search the [Node.js issues](https://github.com/joyent/node/issues) on Github.
Both Open & Closed issues! This is especially true if you are still using an older
version of Node. The solution to your problem may be that you need to upgrade to
the [latest stable version](http://nodejs.org/download/).

### Help everyone help you!
The more detailed and well prepared your question is the more likely
you are to get help.

The more complicated your scenario is, the more detailed you should be.
(example: https://gist.github.com/williamkapke/6477189)

#### Isolate your problem first
The example above was something I experienced in a large application of mine.
It took me several hours to create that whittled down use case that removed
all unnecessary code possible. I focused on making it as easy as possible
for others to follow and work with. The result: some gracious folks *did*
run the code and ultimately surfaced [a confirmed bug](https://github.com/joyent/node/issues/6203).

#### What not to do
Here are some common questions that will generally will go ignored:

* "Can someone help me?"
* "Can I ask a question?"
* "Hey, does anyone here have experience with Express?" (or other thing)
* "What's wrong with this code: &lt;big blob pasted in&gt;"

#### A good example
> I'm having a problem with socket.io. I've searched google for the error
and cannot find anything. When I call this.emit('foo') I'm getting the error
'&lt;Object&gt; does not have a function emit()'. You can see my code here:
http://pastebin.com/asdf1234"

*(That is a completely made up example. Send me a PR to suggest a better one!)*

Here, a simplistic high-level overview starts the question and then ends
with a way for a volunteer to click a link to a well-know service to examine
the details.


### Be on topic
It's very very OK to be a rookie! Often when you're getting started, you're
confused about what-is-what and don't know where to start. We've all been there!

If you are told to "Go ask in channel X!"... do not get offended often you'll
discover that the channel you're referred to will do a much better job.

For example: People often ask C/C++ questions in the #Node.js channel. Although
it may be related to #Node.js the channel doesn't discuss it often or in great
detail. You may get more love in `#libuv` or `#v8`.

####The #Node.js channel has a few cousins:
<a name="io.js"></a>
##### #io.js
This channel is where discussions surrounding the community maintained & governed
Node.js fork - io.js - often happen. Most of the collaborators engage in here, and
it is a great place for discussing both broad topics about node, and node's internals.

<a name="#javascript"></a>
##### ##javascript
The ##javascript channel is the unofficial IRC channel for the language itself, which Node.js runs.
Although there are many helpful people in the #Node.js channel, if you have more generic
or browser-related JavaScript questions, you may find more help there.

<a name="#js"></a>
##### ##js
The ##js channel is a newer javascript channel than ##javascript, and has a code of conduct. If you have general javascript questions, they're welcome there.

<a name="libuv"></a>
##### #libuv
Node.js strives to run on all platforms. Node.js provides a platform agnostic API
to Operating System functions. To accomplish this, Node.js delegates things to the
`libuv` library. If you are having low-level operating system issues, this may be
the place you want to ask.

The members here frequently need to work with v8 and are often very knowledgeable
about v8 (in the context of Node.js) also.

<a name="v8"></a>
##### #v8
Node.js uses the v8 JavaScript engine. This means we rely on them to bring new
JavaScript features to Node.js. It also means bugs/quirks trickle into Node.js.

*Very important to know:*
V8 is a google backed product that is primarily focused on Google products. You
may not get love if you ask about a specific Node.js issue. DO NOT HATE THEM
(Google) FOR THIS! They are doing amazing things that Node.js is able to leverage.
Be grateful for this gift. They have no obligation to cater to the Node.js
community. (And that's OK!)

You should probably have a decent knowledge of v8 if asking here.

#### Info for Moderators

Here is a guide with some tips on how to effectively moderate and deal with trolls: https://gist.github.com/maxogden/8610086
