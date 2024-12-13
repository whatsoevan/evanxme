---
layout: ../../layouts/MarkdownPostLayout.astro
title: Initial commit
pubDate: 2024-12-12
description: how it took 5 years to build a goddamn html website.
author: Evan Xu
tags: ["building in public"]
---

Hello there! Welcome to my website, and thanks for dropping by on this first post!

The site you see now is the product of a long, 5-year uphill battle that follows my development as a programmer. I want to share this story with you, because it's kinda embarrassing how long it took and how much overthinking it took to create a simple HTML website for myself.

## in the beginning...

Back in my freshman year of college, I was a recluse. I was also pretty aimless, and I didn't really know where to begin in terms of searching for what I wanted to do. As a result, I distinctly remember on one cold winter day in my first fall semester that I would program my own portfolio website. You know, that's what everyone says to do as a CS major. Maybe I'd get ahead of my peers that way.

So there I was, on quiet Friday nights, holed up in a desk somewhere, forgotten by the world for an afternoon, as I designed my magnum opus, an expression of who I was and who I could become, right on the internet. I even got a free domain name on Namecheap using a student discount to fully commit to the idea I'd be done with my website.

That would have been a really nice period of time, and I would have looked back on it fondly as a period where I was working on something cool...

if I had actually done something.

I was naive. What ended up happening was I over-engineered and over thought every design decision possible. I started thinking about how I would store my blog articles, so I looked into Firebase. I started thinking about what I wanted my home page to look like, so I told myself I'd research how other people design their personal portfolio.

I was doing literally everything other than building the thing. Looking back, that advice about premature optimization being the root of all evil... yeah it rings truer than I ever realized.

So spring semester comes and goes, and my personal portfolio project crashes and burns before it even has any legs. I spent a handful of lonely afternoons, working on something I thought would be enjoyable, and yet turned out to be largely unproductive (and probably just a cope that I didn't have many friends at university yet).

## okay, maybe this time it'll work.

Later, I find out about Astro as the hot new thing for static websites. So I decide to take it for a spin and initialize a fresh repository. I remember clicking around this new project, feeling some excitement once again, but too many things in this project I didn't really understand. Where is this variable coming from? This style is weird, and I don't know how to fix it?

So I eventually settle on using a template that I find that Shu Ding uses for their personal website. It's sleek, it's minimalist. I like it, and I think it'd be easy to work with. I slap my name on it, and deploy it on my domain.

Hey hey! I'm finally on the internet for real.

I would work on this website in random, motivated sprints, although I would only change a color there or a font there. I remember I got frustrated by the template I was using, because I wanted to integrate a component library and I couldn't figure out how to make a dark mode toggle work with the component library and the template. It was like trying to mix oil and water, and somehow, it would always explode on me. That frustration boiled over one day, and from then on the website just sat and collected dust, with just two sad buttons I had copy and pasted the CSS from the internet (hey, at least they had a cool press down animation).

Sophomore year comes and goes. I get a tech internship, but my website isn't anything worth showing off, so it never comes up.

## man, screw this programming thing.

A year or two goes by, and I decide it's time to refresh my internet presence. This time, I say I'm gonna skip the programming. The issue, I realize, is that I'm not moving fast enough. People much less tech-savvy are out there making websites on Wix and actually doing their thing on the internet. So this time, I'm gonna learn from my mistakes and just build something that looks pretty, and quick.

I follow Thomas Frank's Notion website building tutorial. I link it up to my domain, and tada! A new, fresh personal website, just for me. This time, featuring my face, and Notion does all the work to make things look pretty for me.

Yea... so that Notion website has been up for a year, also sitting duck. I mean, it's one thing to have a website on the internet. But really, my websites up until this point have really just been taking up space. There's never been anything of any interest on any of them. The whole point of having a website is to show the world something about you, and so far I have yet to do anything like that.

## the personal web

So that's was the story up until I come across this video: Your Guide to the Personal Web.

This video really resonated with me about the purpose of the internet. It really made me yearn for the ye old days of jank programming. Where nobody was worried about scale, UI/UX design, SEO. It was just humans marking their spot in internet history, for no reason other than to mark their spot in internet history and say "I was here". Putting up their interests where people could see them. Interacting with others. Being authentic, human bloggers sharing about their lives, without flexing on Instagram.

There is a lot to miss in Web 1.0, now that I'm growing up with Web 2.0 and the dumpster fire that is Twitter (X now), Facebook (now Meta, whatever that means) and AI garbage being posted up everywhere on the internet.

Inspired by this, that brings us here, iteration four of this website.

## do it the right way.

What's crazy is that I learned how to program in JavaScript over the pandemic in 2020. It was my COVID hobby, and that period of time was something I was quite proud of. Being proactive, learning all that I could with the free time I had. I literally could have built this website at any time within the last 5 years, yet each time there was some fault that prevented me from seeing it through:

The first was over-engineering. I was overambitious from the get go.
The second was under-understanding. I didn't learn anything or attain any mastery.
The third was taking shortcuts. Sure Notion looked pretty, but I again I didn't learn anything and wasn't motivated to do anything with my website if someone else was hosting it. It felt like I had no autonomy over my website.
The fourth was never building it for the right reasons.

Up until now, I had been building the websites because other people had told me it was the right thing to do. Yet I never had the due diligence to learn, from the ground up, the skills it takes to do it right.

Which is why I'm particularly proud of this website. In the matter of about two weeks, I sat down and learned almost everything I needed to recreate the website I made on Astro almost 3 years ago. It looks almost the exact same as the template I had used back then, but this time I built everything from the ground up and understand everything I built myself. The dark mode toggle works so easily without the layer of abstraction I put on myself all those years ago. The styling was easy now that I learned how to integrate Tailwind into my project. It looks better than the template now. And in just a day, I managed to clean up the website and get it launched.

![before image of blog](/images/initial-commit-blog-before.png)
blog page from just a few days ago...
![after image of blog](/images/initial-commit-blog-after.png)
spruced up with some Tailwind styling!

This really was a case of it taking 5 years to do something that takes 5 days, just because I didn't have the balls to face up to the challenge. All of this was so simple, I just needed to get off my ass and believe that I could learn everything I need. It's this mindset -- that I'm able to learn anything I don't know already if I put in the time and due diligence.

Somewhere along the journey I forgot about this lesson. I spent 5 years sulking and finding shortcuts about not knowing how to do something, when really I just needed the resilience to figure it out over 5 days. Leaning into learning, not being intimidated by the things unknown and building before you know how to... that's the story of an engineer. But more so, the essence of learning and being a capable human.

At some point I may post up a tutorial on how to get a website running the way I did it. But until then, I hope this story about how stupid long it took to get here is inspiring, as I intend to keep this momentum up, and this website active, for the long term.

