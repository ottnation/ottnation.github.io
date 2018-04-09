---
layout: post
title:  "Facebook and the Upcoming Fight for Data Portability"
date:   2018-04-09
excerpt: "Facebook's response to the Cambridge Analytica debacle suggests that the company might take a troubling stance on \"data portability\" that conflicts with the principles of the GDPR and may be intended to stave off similar regulation at home."
image: "/assets/images/eu_flag_fb_like.png"
hidden: true
---

This is not a post about the [mistakes Facebook made](https://medium.com/tow-center/the-graph-api-key-points-in-the-facebook-and-cambridge-analytica-debacle-b69fe692d747) that caused the Cambridge Analytica debacle. Nor is it a post about [Facebook's overall response](https://www.wired.com/story/facebook-cambridge-analytica-response/) to that PR crisis, which was troubling to say the least. 

No, this post is about a very specific line of argument that has surfaced during Facebook's Cambridge Analytica response and which indicates the position the company will be taking on "data portability" in anticipation of the [inevitable regulation](https://www.cnbc.com/2018/03/22/facebook-coo-sheryl-sandberg-its-not-a-question-of-if-regulation-its-a-question-of-what-type.html) to come in the U.S.

This line of argument suggests that Facebook will be pushing a definition of "data portability" that not only muddies the concept but also conflicts with the principles of the EU's new [General Data Protection Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) (the "<u>GDPR</u>"), which goes into effect on May 25. This appears to be by design -- Facebook is taking a stance that, if adopted in the U.S., will enable them to avoid regulation that decreases social networking service [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), just as more and more end users and startups are focusing on the adoption and creation of [re-decentralized Internet-based services](https://www.youtube.com/watch?v=dRb76Z_ZXns). 

Facebook's version of "data portability" -- and presumably its interpretation of the GDPR -- actually leads to data being "locked down" in services like Facebook, ostensibly for the sake of privacy. *Unfortunately, these are the trade-offs between privacy and openness/interoperability,* goes the line. 

However, this skewed interpretation of the GDPR and "data portability" does not comport with the intention of that law's drafters.

But nothing could be further from the truth, and this skewed interpretation of the GDPR and "data portability" does not comport with the drafters' intentions. 

So let's analyze what's going on here.

### What is this "GDPR" You Speak of?

The GDPR -- which stands for the General Data Protection Regulation -- is a [new regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) that has been passed by the European Union for the protection of European persons' personal data. It is a momentous update to the EU's current privacy regime and purports to apply extra-territorially in order to protect the fundamental rights of EU citizens, which means that U.S. data controllers and processors theoretically must adhere to its strictures when dealing with the personal data of European data subjects. 

The GDPR addresses obligations on matters such as data subject consent, data anonymiztion and pseudonymization, breach notifications, cross-border data transfers, privacy by design requirements, the appointment of data protection officers by organizations, and more. It also enshrines into law personal data rights such as the "[Right to be Forgotten](https://en.wikipedia.org/wiki/Right_to_be_forgotten)," the rights to access and correct personal data, and the right to data portability.

Pretty much any company or organization that does personal data-intensive product and service development -- and especially those where either the product or the business model is based fundamentally on behavioral analysis -- ought to have a keen understanding of the GDPR. Unfortunately, this does not appear to be the case; indeed, at the time of publication of this post, even companies that have been aware of the GDPR for some time [are scrambling](http://thehill.com/policy/technology/381071-tech-giants-brace-for-sweeping-eu-privacy-law) to become compliant by the May 25 deadline. For many of these companies, the threat of fines of up to 4% of their worldwide turnover poses a real regulatory risk that warrants changing how they handle the personal data of individuals who may be protected by the law.

The GDPR individual right we are focused on in this post is the right to data portability.

### Data Portability Under the GDPR

[Article 20 of the GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) lays out the right to data portability:

*1. The data subject shall have the ***right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format*** and have the ***right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided***, where:*

*(a) the processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and*

*(b) the processing is carried out by automated means.*

*2. In exercising his or her right to data portability pursuant to paragraph 1, the data subject shall have the right to have the personal data transmitted directly from one controller to another, where technically feasible.*

([GDPR, Article 20](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN), emphasis added)

The Article 29 Working Party (the "<u>Working Party</u>" or "<u>WP29</u>"), the group that represents EU privacy regulators, has issued [guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099) and an [FAQ](http://ec.europa.eu/information_society/newsroom/image/document/2016-51/wp242_annex_en_40854.pdf) which further describes the right's purpose:

> In essence, data portability provides the ability for data subjects to obtain and reuse “their” data for their own purposes and across different services. This right facilitates their ability to move, copy or transfer personal data easily from one IT environment to another, without hindrance. ***In addition to providing consumer empowerment by preventing “lock-in”, it is expected to foster opportunities for innovation and sharing of personal data between data controllers in a safe and secure manner under the control of the data subject***.

([WP 242 Annex -- FAQ on data portability](http://ec.europa.eu/information_society/newsroom/image/document/2016-51/wp242_annex_en_40854.pdf), emphasis added)

In short, the right to data portability is all about giving individuals control by imposing an obligation on data controllers to provide for the automated export of personal data. 

Importantly, though, there are limitations to the right in that it "shall not adversely affect the rights and freedoms of others." ([GDPR, Article 20(4)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN)). In other words, the scope of personal data that is subject to portability is limited such that it does not negatively affect third parties. As we shall see later, this third party data limitation is a key jumping-off point for the questionable line of argument being pushed by Facebook and some commentators.

Notably, a key ***social benefit*** to establishing the ***individual right of data portability***, at least according to the Working Party, is that lock-in will decrease and more competition will ensue between data controllers. This is likely the reason why Facebook and others have been discussing the data portability concept in the wake of Cambridge Analytica and the increased drumbeat for regulation.

### Data Portability as a Potential Threat to Social Networking Service Lock-In

Social networking services such as Facebook, Instagram, and WhatsApp (all [Facebook Inc.](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001326801&owner=exclude&count=40) properties) benefit from positive [network effects](https://en.wikipedia.org/wiki/Network_effect), since they become more valuable to users as the number of users increases. Strong positive network effects, combined with ever increasing and intertwined social networking features on which users rely, can result in [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) because the costs of switching to competing services are too high. 

For example, in the case of Facebook's properties, the cost of switching to new social networks may be that a leaving user misses updates, photos, messages, and events posted and exchanged by the user's circles of "friends," which could be quite numerous. This cost could very well be a deterrent to leaving -- or lessening use of -- Facebook's social networking service properties over time, affecting the success of competitors trying to chip away at these properties' stickiness. This would especially be the case *where the **data and connections** created on Facebook's properties cannot easily be replicated on competing social networks*.

And this is where data portability comes in. 

In theory, data portability lessens the transaction costs associated with switching between online services by making it relatively easy to export one's personal data from a service and replicate it on another. Here is the Working Party on data portability and competition:

> Since it allows the direct transmission of personal data from one data controller to another, the right to data portability is also an important tool that will support the free flow of personal data in the EU and ***foster competition*** between controllers. It will ***facilitate switching*** between different service providers, and will therefore foster the development of new services in the context of the digital single market strategy.

([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099), _Adopted on 13 December 2016, As last Revised and adopted on 5 April 2017_, WP 242 rev.01, emphasis added)

Facilitating ***user migration*** between online services, then, is a ***core feature*** of the GDPR via the right to data portability.

But isn't there an important limitation here that decreases the right's competitive effect with respect to social networking services -- namely, that users are limited to exporting their own "personal data" and not their "[social graph](https://en.wikipedia.org/wiki/Social_graph)"? 

Maybe not. 

According to the Working Party:

> [T]he personal data requested should ***concern the data subject*** and be ***provided by him.*** WP29 recommends to data controllers to ***not take an overly restrictive interpretation*** of the sentence “personal data concerning the data subject”, ***when third parties data are contained in a data set relating to the data subject and provided by him, and are used by the data subject making the request for personal purposes***.

([WP 242 Annex -- FAQ on data portability](http://ec.europa.eu/information_society/newsroom/image/document/2016-51/wp242_annex_en_40854.pdf), emphasis added)

Interesting. 

But it looks like there is a requirement that this third party data be "provided by" the data subject requesting the export, right? So the real question is: _how do we define third party personal data that is "provided by" the user_?

Obviously, third party personal data *provided directly by the user* would be covered under the data portability requirements, so long as third party rights and freedoms are not adversely affected. For example, a contacts book created by a webmail user, which contains third party information such as names, email addresses, physical addresses, and telephone numbers, would almost certainly be exportable under the GDPR to another webmail service, so long as the new service does not use that contact data for its own purposes (e.g., third party profile creation for ad targeting).

But, importantly, the Working Party also notes that personal data "provided by" the data subject can also consist of "**[o]bserved data provided by the data subject by virtue of the use of the service or the device**," including, for example, a person’s "search history, traffic data and location data" or even "raw data such as the heartbeat tracked by a wearable device." ([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099), emphasis in original)

While observed data that is "inferred or "derived" -- "which include personal data that are created by a service provider (for example, algorithmic results)" -- should *not* be considered exportable data, a service provider "should include all other personal data provided by the data subject through technical means provided by the controller." ([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099)) 

Going back to the webmail example:

> [A] webmail service may allow the creation of a directory of a data subject’s contacts, friends, relatives, family and broader environment. Since these data relate to (and are created by) the identifiable individual that wishes to exercise his right to data portability, data controllers should transmit the entire directory of incoming and outgoing e-mails to that data subject.

([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099))

In the webmail context, then, third party personal data (both email content and metadata), which is indirectly provided by a user by virtue of their use of the webmail service, is subject to that user's data portability rights.

Thus, in the context of a social networking service, we must determine what type of third party data -- either directly provided by a user or indirectly provided by virtue of usage of the service -- is subject to data portability. *Would such third party data include user identifiers and other social networking service data that allow a user's "social graph" to be reconstructed on a competitor's service?*

*Probably, yes.* 

It is certainly true that the Working Party's guidance is not necessarily controlling when it comes to determining the ultimate scope of personal data "provided by" a data subject. However, even while representatives of the European Commission have [expressed concerns](https://iapp.org/news/a/european-commission-experts-uneasy-over-wp29-data-portability-interpretation-1/) over the scope of the Working Party's guidance on "observed data," they still appear to [acknowledge that "data portability is a concept that is focussed [_sic_] primarily on social networks](https://iapp.org/news/a/european-commission-experts-uneasy-over-wp29-data-portability-interpretation-1/)." It would make little sense, then, to provide for a fundamental right to data portability but hamper its use in the social networking context.

If the Working Party's interpretation of GDPR data portability and third party data is correct, certain data that Facebook has, and which gives Facebook a competitive edge over other social networking services, could be subject to export either directly to the user or the user's new social networking service of choice. *But what the scope of that third party data could be is subject to debate*, as will be examined in a later section.

At a minimum, one would expect that user IDs (or hashed versions) for users with whom the data subject is connected, along with identifying information (e.g., name and shared contact info), would be subject to export. After all, a social networking service allow users to actively create social connections using the "technical means provided by" the service. In the case of Facebook and Instagram, one connects to, and shares with, other users by finding them on the service and making requests to, or pulling from, the unique platform identifiers that are attached to each user (though this is hidden behind the scenes). Even WhatsApp, which presumably used the telephone number as the primary unique identifier for users when it was initially rolled out, now has a WhatsApp-assigned unique identifier for each user, allowing users to keep their accounts even when their phone numbers have changed. 

Such a minimally required export of third party personal data is not a trivial thing for a social networking service, especially when combined with the ability to export one's own personal data. Indeed, in the past, Facebook itself has clearly [viewed such functionality as a threat](https://techcrunch.com/2013/01/24/my-precious-social-graph/) to their business moat.

### Facebook's Aversion to True Data Portability

In 2008, MySpace, Twitter, and several other partners released the [Data Avilability initiative](https://techcrunch.com/2008/05/08/myspace-embraces-data-portability-partners-with-yahoo-ebay-and-twitter/), which allowed these services' users to give third party app providers access to their user data, including profile information and their connections to other users. Very shortly thereafter, Facebook [released a new application programming interface](https://techcrunch.com/2008/05/09/facebook-responds-to-myspace-with-facebook-connect/) ("<u>API</u>") called Facebook Connect, which also allowed its users to connect third party apps to their Facebook accounts and utilize both their "real identity" and "friends." Google would [follow suit](https://techcrunch.com/2008/05/12/google-confirms-friend-connect/).

These initiatives were an attempt to simultaneously make the web more "social" while [making the participating services indispensable](https://techcrunch.com/2008/05/16/data-portability-its-the-new-walled-garden/) as profile and [social graph](https://en.wikipedia.org/wiki/Social_graph) repositories. However, over time, the more dominant services [began](https://techcrunch.com/2008/05/15/he-said-she-said-in-google-v-facebook/) to [refuse access](http://www.adweek.com/digital/facebook-negotiations/) to [each other](https://beta.techcrunch.com/2010/11/04/facebook-google-contacts/), almost certainly for competitive reasons. Friend finding functionality, in particular, was [cut off](https://techcrunch.com/2013/01/24/my-precious-social-graph/) where social graphs were in danger of being replicated. 

Facebook even incorporated an anti-competitive rationale into their [January 2013 platform policy](https://web.archive.org/web/20130125092728/https://developers.facebook.com/policy/):

> Competing social networks: (a) You may not use Facebook Platform to export user data into a competing social network without our permission; (b) Apps on Facebook may not integrate, link to, promote, distribute, or redirect to any app on any other competing social network.

This new language appeared to be put in place after Facebook [cut Twitter and other competing apps off](https://techcrunch.com/2013/01/18/facebook-data-voxer/) from the their Find Friends data. Facebook's [explanation](https://developers.facebook.com/blog/post/2013/01/25/clarifying-our-platform-policies/):

> For the vast majority of developers building social apps and games, keep doing what you’re doing. Our goal is to provide a platform that gives people an easy way to login to your apps, create personalized and social experiences, and easily share what they’re doing in your apps with people on Facebook. This is how our platform has been used by the most popular categories of apps, such as games, music, fitness, news and general lifestyle apps.
> For a much smaller number of apps that are using Facebook to either replicate our functionality or bootstrap their growth in a way that creates little value for people on Facebook, such as not providing users an easy way to share back to Facebook, we’ve had policies against this that we are further clarifying today (see I.10).

It is, of course, understandable from a business perspective why Facebook felt it necessary to cut off its competitors from APIs that would allow the replication of its social graph. It made particular sense to [do so with Vine](https://www.digitaltrends.com/opinion/facebook-cuts-off-access-to-vine/), as Vine (owned by Twitter) was seen as a potentially viable competitor to Instagram. 

A product like Instagram is far more duplicable than the Facebook service because it is a purpose-built product for photo, video, and Snapchat-style story sharing. One can simply take a look at how Instagram [has cloned Snapchat](https://techcrunch.com/2017/03/15/facebook-stories-roll-out/) to see how easy it is to duplicate such limited functionality products. But, of course, the social graph is the key element of stickiness for such services. And even today, [there is no easy way to backup or export](https://www.digitaltrends.com/social-media/how-to-download-instagram-photos/) one's Instagram data, *though that ought to change as GDPR goes into effect and Facebook rolls out its new data portability settings*.

And therein lies the GDPR's threat to Facebook. If a critical mass of users were to take advantage of the GDPR's data portability requirements to migrate to competing social networking services, that could sow the seeds for a market where Facebook is less dominant than it is today. For example, what could happen if Snapchat, Twitter, Apple, or much smaller companies released Instagram clones that were much more privacy-aware as soon as GDPR goes into effect? Could they convince migration to occur en masse?

As noted in the previous section, at a minimum, Facebook ought to be required under the GDPR to allow for the easy export of both purely personal data and third party user data such as unique platform identifiers and associated contact info from its various social networking services (which it does not yet do through its current data download functionality). But, perhaps more consequentially, it is possible that under GDPR, additional third party personal data may be required to be exported as well.

### Balancing Data Portability with Third Party Rights in the Social Networking Context

Again, one of the fundamental limitations on GDPR data portability is that third party personal data cannot be exported in a way that will "adversely affect the rights and freedoms" of those third party data subjects. ([GDPR, Article 20(4)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN)) This poses a vexing problem in the social networking context, where first party and third party personal data is inherently commingled by virtue of the nature of the service.

Let's analogize the social networking service context to the webmail context. The Working Party has stated that, for a webmail service, certain third party data would definitely be exportable, including the email itself, which includes third party personal data in the form of both content and metadata, and the contacts data created by users.  What would be the social networking service equivalents for Facebook? Here are some possibilities:

- Facebook property platform identifiers for users
- Facebook Messenger messages and metadata
- Facebook Group, Pages, and Event data (platform identifiers and some content)
- Third party reactions and shares for personal posts and group chats

All of the above could conceivably be exported such that third party rights are protected. However, such data would have to be "under the sole control of the requesting user" and "only managed for purely personal or household needs." Moreover, the Working Party has stated, any receiving data controller would not be allowed to "use the transmitted third party data for his own purposes e.g. to propose marketing products and services to those other third party data subjects. For example, this information should not be used to enrich the profile of the third party data subject and rebuild his social environment, without his knowledge and consent." ([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099)) 

Interestingly, the Working Party appears to be encouraging -- but not mandating -- data controllers to "implement consent mechanisms for other data subjects involved, to ease data transmission for those cases where such parties are willing to consent, e.g. if they also want to move their data to some other data controller. Such a situation might arise, for example, with social networks, but it is up to data controllers to decide on the leading practice to follow." ([Guidelines on the right to data portability](https://www.ec.europa.eu/newsroom/document.cfm?doc_id=44099)) It is doubtful that most social networking services will take the Working Party up on their recommendation.

The bottom line is that Facebook should be ready to face a GDPR mandate requiring them to export quite a bit of third party data concerning a requesting data subject. However, certain arguments that have surfaced post-Cambridge Analytica indicate that Facebook might be resistant to the Working Party's interpretation of the GDPR.

### Facebook's Take on Data Portability in the Aftermath of Cambridge Analytica

Finally, we get to the troubling arguments made by Facebook with respect to data portability post-Cambridge Analytica.   

Here's Mark Zuckerberg in an interview with CNN:

> [T]he feedback from the community and the world has overwhelmingly been, that, if you ***balance these two values*** of being able to take your data and some data from friends to be able to have social experiences on other apps on the one hand, ***this ideal of kind of data portability. And on the other hand, making sure that your data's always locked down. Guaranteeing that it never goes anywhere.*** You know I think we've started off a little bit on the idealistic, and maybe naive side, right, of thinking that that vision around data portability and enabling social apps was gonna be what our community preferred, and I think what we've learned over time very clearly is that the ***most important thing always is making sure that people's data is locked down***. And that's a mistake that ... we fixed a few years back and I don't expect us to make again.

([Zuckerberg interview with CNN](http://money.cnn.com/2018/03/21/technology/mark-zuckerberg-cnn-interview-transcript/index.html), Mar. 21, 2018, emphasis added)

And an interview with Kara Swisher of Recode:

> [Y]ou know, your calendar should have your friend’s birthday. Your address book should have your friend’s picture. In order to do that, ***you basically need to make it so a person can log into an app and not just port their own data over, but also be able to bring some data from their friends as well.*** That was the vision, and a bunch of good stuff got created. 
> ...
> There’s this ***values tension playing out between the value of data portability***, right? Being able to take your data and some social data ... To be able to create new experiences on the one hand, ***and privacy on the other hand, and just making sure that everything is as locked down as possible.***
> You know, frankly, I just got that wrong. I was maybe too idealistic on the side of data portability, that it would create more good experiences. And it created some, but I think what the clear feedback was from our community was that people value privacy a lot more. And ***they would rather have their data locked down and be sure that nothing bad will ever happen to it than be able to easily take it and have social experiences in other places.*** So, over time, we have been just kind of narrowing it down.
> ...
> But I do think part of this comes from ***these idealistic values of openness and data portability*** and things that I think the tech community holds really dear, but ***are in some conflict with some of these other values, are in protecting people privately, right?*** And a lot of the most sensitive issues that we faced today are conflicts between our real values, right?
> 

([Zuckerberg interview with Recode](https://www.recode.net/2018/3/22/17150814/transcript-interview-facebook-mark-zuckerberg-cambridge-analytica-controversy), Mar. 22, 2018, emphasis added)

Clearly, Facebook is ***pushing the notion that privacy and openness/ interoperability are opposing values***, perhaps in an attempt to sway both the tech community and the general public's opinion on the efficacy of GDPR-style regulation in the U.S.

This idea has gained traction amongst some tech commentators. For example, Ben Thompson, a widely followed technology strategy analyst, seems to commiserate with Mark Zuckerberg in this regard:

> It seems far more likely that Facebook will be directly regulated than Google; arguably this is already the case in Europe with the GDPR. What is worth noting, though, is that ***regulations like the GDPR entrench incumbents: protecting users from Facebook will, in all likelihood, lock in Facebook’s competitive position.***
> 
> This episode is a perfect example: ***an unintended casualty of this weekend’s firestorm is the idea of data portability***: I have argued that social networks like Facebook should make it trivial to export your network; it seems far more likely that most social networks will respond to this Cambridge Analytica scandal by locking down data even further. ***That may be good for privacy, but it’s not so good for competition.*** Everything is a trade-off.

([Ben Thompson, The Facebook Brand, Stratechery](https://stratechery.com/2018/the-facebook-brand/), emphasis added, internal citations omitted)

The [American Enterprise Institute](https://en.wikipedia.org/wiki/American_Enterprise_Institute), the generally anti-regulatory think tank, has cited Thompson and argued against the GDPR in a similar vein:

> Another idea would be to replicate here Europe’s General Data Protection Regulation, soon going live. But here’s a possible problem: ***Copying the GDPR might actually entrench Facebook’s dominance since that regulation would seem to make data portability — the moving of one’s social graph to other social networks — pretty difficult if not impossible.*** In theory, at least, giving Facebook users the ability to do so would make it easier to generate Facebook challengers.

[James Pethokoukis, Some thoughts about Facebook, regulation, and trade-offs](https://www.aei.org/publication/some-thoughts-about-facebook-regulation-and-trade-offs/), Mar. 22, 2018)

And yet another reference to Thompson in the tech press: 

> As Ben Thompson notes in his own post about this mess, ***most of the regulatory suggestions being proffered [will lock in Facebook](https://stratechery.com/2018/the-facebook-brand/) as an entrenched incumbent.*** That's because it will (a) create barriers that Facebook can deal with, but startups cannot and (b) focus on "cementing" Facebook's model (with safeguards) rather than letting the next wave of creative destruction take down Facebook.
> Note that last bit? A good way to take away Facebook's dominance is to enable others to compete in the space. The best way to do that? Make it easy for people to switch from Facebook to upstart competitors. The best way to do that? Make it easier for Facebook users to export their data... and use it on another service. But as soon as you do that, you're actually right back into the risky zone. Why is Facebook in so much hot water right now? Because it made it too easy to export user data to third party platforms! And, ***any kind of GDPR-type solution is just going to lock down that data, rather than enabling them to help seed competition.***
> ....
> Let users control and export their data, and let people build tools that allow them to do so, and to control and transparently understand what others do with their data.
> If someone comes up with ***a "regulatory regime"*** that does that, it would be fantastic. But so far, nearly every suggestion I've seen has gone in the other direction. They ***will do things like force Facebook to "lock down" its data even more, making it harder for users to extract it, or for third parties to provide users the tools they need to control their own data.***

([Mike Masnick, How 'Regulating Facebook' Could Make Everyone's Concerns Worse , Not Better](https://www.techdirt.com/articles/20180320/22195339464/how-regulating-facebook-could-make-everyones-concerns-worse-not-better.shtml), Mar. 21, 2018, emphasis added)

Unfortunately, this ***wrong-headed notion that GDPR-style data portability is at odds with openness and interroperability -- and ostensibly requires the total "lock down" of personal data*** -- indicates that Facebook may be prepping to take a stance on data portability and third party personal data (i.e., social graph data) that is at odds with the principles of the GDPR. 

Indeed, Facebook appears to be fanning the flames of this argument by: (1) quickly [locking things down](https://newsroom.fb.com/news/2018/04/restricting-data-access/) ***from third party developers*** in a way that would probably be ***more restrictive than the GDPR allows for data portability requests made explicitly by users***; and (2) by [accelerating breaking changes](http://www.businessinsider.com/instagram-barely-gave-developers-notice-about-api-data-sharing-changes-2018-4) to its Instagram API without explanation, causing irritation amongst these third party developers that could eventually be turned against privacy regulation. 

Several days ago, the CTO of Facebook released an [update](https://newsroom.fb.com/news/2018/04/restricting-data-access/) on changes the company is making to its data access policies. Many of these changes have been long overdue, especially in the current paradigm where users grant data access to third party developers with the click of a button and without fully understanding what they are doing. Facebook has, indeed, realized that it needs to better protect its users' information.

However, it is important to keep in mind that many of these API changes cut data off to third party developers in a way that is more restrictive than what would be permissible under the GDPR if the users themselves wanted to download such data. The Events, Groups, and Pages APIs [now all exclude](https://newsroom.fb.com/news/2018/04/restricting-data-access/) certain third party personal data pulls that arguably should be allowable under a user's data download request. For example, if a user created a Facebook Event, that user ought to be able to download the guest list, event wall posts, and attendance information, even though third party app developers no longer have access to that data via the Events API. 

Similarly, with the [deprecation of the Instagram API](https://www.instagram.com/developer/changelog/), third party developers have been immediately cut off from access to data like a user's followers and following lists. But users themselves ought to be able to download this data (including Instagram platform user identifiers) when the GDPR goes into effect.

Thus, commentators should not be conflating new controls on third party developer access to personal data via a simple click of a button with data portability rights that allow users to export such data for purely personal and household activities. Nor should they generally be arguing that openness and interoperability are inherently opposed to privacy and, therefore, GDPR results in protecting incumbents. ***GDPR's data portability right is inherently about fostering openness, interoperability, and competition, while also preserving the privacy rights of third party data subjects.***

What is troubling about Facebook's rhetoric is that they seem to be pushing a definition of "data portability" that is at odds with the GDPR and is intended to muddy the waters in the face of public opinion that is increasingly turning towards the idea of new privacy legislation that could potentially borrow from Europe. 

Mark Zuckerberg recently [stated](https://techcrunch.com/2018/04/04/zuckerberg-gdpr/) -- in response to a [news story](https://www.reuters.com/article/us-facebook-ceo-privacy-exclusive/exclusive-facebook-ceo-stops-short-of-extending-european-privacy-globally-idUSKCN1HA2M1) where he reportedly "demurred when asked what parts of the [GDPR] he would not extend worldwide" -- that Facebook is "going to make all the same controls and settings available everywhere, not just in Europe," with the caveat that "[i]s it going to be exactly the same format? Probably not. We’ll need to figure out what makes sense in different markets with different laws in different places."

This, of course, begs the question: *exactly what type of format is Zuckerberg referring to?* Will the Download Your Information options available for Facebook properties include third party personal data in a way that is sufficient to take one's "social graph" elsewhere?

We shall see in due course.