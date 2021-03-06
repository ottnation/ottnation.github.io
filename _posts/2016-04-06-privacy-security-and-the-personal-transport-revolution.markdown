---
layout: post
title:  "Privacy, Security, and the Personal Transport Revolution"
date:   2016-04-06
excerpt: "Connected cars are here, autonomous vehicles are on their way, and TaaS is on the rise — privacy and security issues need to be considered at the outset."
image: "/assets/images/autonomous-car.png"
hidden: false
---
The connected car. It’s one of the hottest topics in tech right now, as it is widely recognized that cars are becoming connected spaces and computing platforms that will fundamentally change how we spend our time in transit.

At the same time, we are seeing a revolution in how we get from Point A to Point B, with the so-called “on demand” economy infiltrating transport in a way that is affecting even car cultures like the U.S. Indeed, the meteoric rise of platforms like Lyft, Uber, Ola, Didi, and others, combined with the “not too far away” introduction of truly autonomous vehicles, portends a future where low cost personal transport-as-a-service (TaaS) becomes the norm.

This shift to autonomous vehicles and TaaS ubiquity will create massive changes beyond just how we travel: living and work patterns will morph, cities will be re-designed, energy resources and basic materials will be better utilized, both land and personal time will be reclaimed, mapping of the physical world and of human movement will be comprehensive and continuous, etc.

The benefits of such a future are fairly obvious. But, of course, the connected, autonomous vehicles necessary for this TaaS future are also chock-full of technology — embedded systems, user-centric software interfaces that function as app and service platforms, high speed Internet connections that connect to remote compute power, content and services, and a wide variety of external and internal sensors — that will create very consequential privacy and security issues.

Moreover, the outsourcing of personal transport to the public and private sectors will mean that individuals have much less control over their transit environments than they have had in the past. Whether individual privacy rights should differ substantially based on car ownership (or lack thereof) in a ubiquitous TaaS world is an open question. To the extent that personal TaaS services are viewed as extensions of the connected home or workplace, there may actually be greater privacy interests involved than with, say, public transport or traditional common carriers.

All this means that the onus is on policy makers and industry to address the privacy and security issues involved with the personal transport revolution. This article attempts to describe some of those issues.

### Hackability, Remote Control, and Public Safety

The most obvious (and publicized) security issue with connected cars is the increased hackability of these vehicles. Last year, a Jeep was [shown](http://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/) to be "pwnable" from afar, and the FBI, DoT, and NHTSA recently [released a joint public service announcement](http://www.ic3.gov/media/2016/160317.aspx) warning about the risk of vehicles being vulnerable to remote exploits. That public service announcement listed the “vehicle function manipulations” that researchers were able to accomplish, which included:

* Engine shutdown
* Disable brakes
* Steering
* Door locks
* Turn signal
* Tachometer
* Radio, HVAC, GPS

The notion that one could be in a connected car and have major vehicle functions manipulated remotely is a scary one that clearly has public safety implications. The ability to degrade an individual’s control over a vehicle, or even completely take away control, could easily be used by hackers to hold travelers hostage (think about ransomware for vehicles) or, worse, put them into situations where the chances of injury or death go up greatly (for whatever reason).

Adding some level of autonomy to connected cars also effectively turns them into wheeled drones that could be used for illicit purposes. A nightmare scenario would be the unmanned control — either remotely or through installed software — of one or more connected, autonomous car carrying payloads of explosives or other dangerous materials. Would connected cars, then, need to be designed to be taken over by public officials to prevent the delivery of dangerous payloads? Would any such “backdoors” actually increase the chances of bad acts being perpetrated either remotely or through malicious code?

Designing public safety backdoors or procedures for exerting control over vehicles would require cooperation by auto manufacturers and TaaS providers. This interaction between industry and public officials would likely need to be overseen such that due process rights are preserved. Indeed, giving public officials the ability to remotely restrict freedom of movement raises important questions about the scope of actions that may be appropriate to take in the case of public safety events. Moreover, the very idea of giving governments access to, or control of, connected cars will almost certainly be controversial given the recent Apple vs. FBI blow-up over the issues of encryption and official backdoors.

And what about a future where connected, autonomous cars engage in vehicle-to-vehicle and vehicle-to-infrastructure communications for traffic optimization? When a public safety event occurs, it is not unreasonable to think that cars will be “talking” to each other, to infrastructure, and to public officials so that the relevant authorities are able to properly direct traffic flows to deal with the event. The exploitability of such a communications system by malicious actors is worrisome, as the pollution of those channels with bad information could potentially be disastrous.

The bottom line is that security and public safety in a world with connected, autonomous cars is something that all the relevant players need to start addressing sooner rather than later.

### Law Enforcement, Search, and Seizure

Closely connected to public safety is the general relationship between law enforcement and the public and how this may change in a world with connected, autonomous cars, where the opportunities for search and seizure will be substantially greater than they are today.

There are several reasons why connected cars and the widespread usage of TaaS will increase law enforcement’s ability to search (and even surveil) the citizenry. For one thing, the use of connected cars for personal transport inherently creates a treasure trove of location data that can be tied to individuals. Connected cars also serve as mobile broadband access points, with wireless Internet service providers (ISPs) partnering with vehicle manufacturers and fleet owners to provide services that are accessed either by mobile device or by the car itself (e.g., [Carplay](http://www.apple.com/ios/carplay/) or [Android Auto](https://www.android.com/auto/)). Depending on how the debate over ISP privacy turns out, we could see law enforcement granted the ability to intercept communications and data at the car level.

And while connected cars are often analogized to large mobile devices, they are actually more like moving connected spaces, which can be loaded with sensors for collecting data both from the external world and from inside the car. Such sensors, which will allow for the collection of “born analog” personal data, could include video cameras, microphones, motion detectors, chemical detectors, and more, and could easily be connected to software for facial recognition, voice recognition, speech analysis, drug detection, and the like.

The increased search/surveillance capabilities described above could be exacerbated by the fact that, in a TaaS world, individuals may not have any say over how the cars in which they are riding are configured for access by law enforcement. After all, what reasonable expectations of privacy do individuals have when they are in a connected car, and how does that change when the car is owned versus leased versus part of a TaaS fleet? Is a connected car more like public transport or more like a connected home when it comes to expectations of privacy?

Can and will legislation requiring technical assistance for intercepting communications be extended to mandate the incorporation of surveillance capabilities into manufacturer’s cars? Even if such a mandate were not put into place for all cars, it is not clear that TaaS providers would be able to escape such a mandate for their fleets. The [Apple vs. FBI fight over the San Bernadino iPhone](/blog/an-end-run-around-encryption/) was likely a preview of the type of battle that might arise over connected cars and surveillance capabilities.

Seizures will also be much easier for law enforcement in a world where it is possible to remotely take control of a car. What might be the combined affect of increased search and seizure capabilities? Might the concepts of “reasonable suspicion” and “probable cause” expand through the use of sensors and data analysis, which capture a much greater scope of human activity that might raise red flags? For example, could TaaS providers be required to install drug detection devices that inform law enforcement and automatically seize vehicles (and the persons inside) when illicit substances are detected? Might such functionality go beyond stopping a car and actually re-route cars to law enforcement checkpoints?

We will have to think very carefully about what type of search and seizure capabilities is acceptable to build into our new personal transport systems.

### Securing Personal Data and Business Data

As pointed out earlier, connected cars serve as mobile broadband access points. Passengers have the ability to use the Internet in their cars as they do in their homes, and perhaps as they do at their workplaces, via their devices. At the same time, the car itself is becoming a new platform, with apps running on operating systems that are layered on top of cars’ embedded systems. These apps allow passengers to interface with cloud-based apps, services, and content through the car itself. When cars become autonomous, it is quite possible that car interiors will change to replicate multimedia or office setups where accessing the Internet by personal device is a secondary option.

The connected car as communications, shopping, and entertainment hub puts a slew of personal data at risk — online credentials, personal communications, biometrics, payments data, location data, etc. The connected car as mobile office puts all types of business data at risk. Thus, connected cars will need to be designed with data security in mind. Like mobile devices, they will need to be patched regularly when security flaws are discovered. Encryption will need to be incorporated in some form or fashion to secure data at rest and in transit. In the case of business data that is accessed remotely, endpoint security will have to be considered and built into the entire ecosystem.

The data security measures implemented for connected cars will likely be the result of various industry players cooperating with each other and taking a security by design approach with their products and services. These players will include car manufacturers, Tier 1 and Tier 2 suppliers, ISPs, operating systems vendors, software partners, content vendors, and more. Presumably, self-regulatory organizations will play a large role in ensuring the standardization and best practices that will need to be put in place to ensure as secure environment as possible. Policy makers will also need to be involved, especially government agencies that are tasked with regulating the transportation sector, ISPs, and cybersecurity response systems. Academics and security researchers will also play a vital role in bringing to light vulnerabilities in the connected car and transportation network, generally.

Essentially, all of the possibility for mischief that exists for mobile devices and connected spaces with respect to data theft (and worse) will be present in the connected car. It is very important that all the aforementioned players get together at the outset to determine the role each will have in securing the connected car.

### Profiling, Behavioral Targeting, Big Data Analysis, and Captive Audiences

These days, being profiled is a part of the normal experience of using the Internet. Individuals are tracked across websites, apps, and devices, and the collected data is aggregated, exchanged, and analyzed for various reasons. Sometimes this data is used to create profiles for the purposes of taking decisions about individuals or for analyzing or predicting individuals’ personal preferences, behaviors, and attitudes. The prediction of personal preferences, behaviors, and attitudes is particularly useful for [behavioral targeting](https://www.ftc.gov/sites/default/files/documents/reports/federal-trade-commission-staff-report-self-regulatory-principles-online-behavioral-advertising/p085400behavadreport.pdf) (i.e., interest-based advertising), which is the monetization scheme for many free, online services.

The connected car is ripe for profiling, as it is like a mobile device, wireless access point, and connected space all rolled into one. Thus, there are many techniques for identifying and collecting personal data from passengers that might work in the connected car: the use of cookies, supercookies, and web beacons; deterministic and probabilistic [cross-device tracking](https://iapp.org/news/a/cookies-are-so-yesterday-cross-device-tracking-is-insome-tips/); [packet analysis](https://en.wikipedia.org/wiki/Packet_analyzer) and [deep packet inspection](https://en.wikipedia.org/wiki/Deep_packet_inspection); location tracking using GPS; voice and speech recognition, facial recognition; movement recognition (e.g., eye tracking), etc. The use of internal sensors in the connected car interior might be particularly useful for collecting granular data about an individual’s behavior that may not otherwise be collected via normal Internet use.

All of this data could be used for myriad purposes, including to deliver behaviorally targeted advertising and content and to make various decisions about individuals algorithmically. In fact, combining connected car data collection and profiling with big data analysis could result in a huge shift in how certain decisions are made.

For example, think about an auto insurance company, which must assess the risks associated with its current and potential policyholders. It is fairly obvious that the connected car makes it technically possible to profile an individual’s driving habits through the collection of data from a car’s internal sensors. However, an insurance company could also use other personal, non-driving data to make assessments about the risks of underwriting any particular policy. Perhaps after big data analysis of music listening habits, the insurance company finds that country music listeners tend to be worse drivers than NPR listeners and, therefore, ought to be charged higher premiums. Or perhaps it is determined that a car primarily used for shuttling around kids has less risk of being involved in accidents but more risk of a much higher personal injury payout and, therefore, requires higher premiums.

Ultimately, algorithmic decision making becomes much more powerful when you have robust data collection, and connected car fleets could provide just such a source when it comes to individual behavior. Naturally, there are many privacy issues that are raised as a result, and they are not theoretical in nature.

Alphabet (aka Google), who is at the forefront of big data analysis and algorithmic decision making and whose business prospects are highly dependent on interest-based advertising, also happens to be at the forefront of the personal transport revolution. Google self-driving cars are coming, but it is not yet clear how they plan to monetize any TaaS service that they bring to market. Could they be planning a business model that is partly supported through targeted advertisements? Might they decide to offer up YouTube audiovisual content that is specifically targeted based on passenger profiles?

It is worth noting that in a TaaS world, where connected, autonomous vehicles are ubiquitous, the possibilities for creating a captive audience are greatly enhanced. Those who have flown in planes or ridden in taxis where audiovisual content is played and cannot be turned off understand how media that cannot be ignored is often invasive in nature. Nevertheless, it is entirely possible that TaaS providers will take this approach, particularly if the major providers happen to be technology companies that also act as major media distribution channels. Moreover, the captive nature of the audience extends to more than just media — individuals may simply have no choice over what personal data is collected by TaaS providers.

The personal transport revolution will likely result in a much greater ability to profile individuals in the same manner that occurs across the web. Whether or not this is a good (or necessary) thing is an open question. Industry and policymakers will have to decide whether or not a laissez faire approach that parallels how the Internet ecosystem developed is appropriate when it comes to protecting privacy. Ultimately, society may decide that it makes sense to limit tracking and profiling in connected cars, especially if they are viewed as spaces that are closer to the connected home than to public transport.

### Mapping the Physical World for Virtual and Augmented Reality

Connected, autonomous vehicles require many sophisticated external sensors in order to truly drive autonomously. The video cameras, radar, and Lidar that these cars utilize make them into perfect real-time 3D mapping machines. This mapping ability will be even more enhanced in the future when entire TaaS fleets can continuously map the physical world as they go about providing service to passengers

As we saw with the [Google Street View controversy](https://en.wikipedia.org/wiki/Google_Street_View_privacy_concerns) in Europe, there are certainly privacy issues involved with mapping the physical world. Yet the public response has generally been quite supportive because of the sheer usefulness of mapping software in everyday life. However, when these real-time 3D maps start being used in virtual reality (VR) and augmented reality (AR) applications, we will likely see renewed privacy and security concerns.

It is hard to tell exactly what those privacy and security issues may be because VR and AR are technologies in their infancy. In the case of security — specifically, public safety — the 3D map data itself may pose problems. For privacy, it will be the combination of map data plus personal data that creates issues.

Connected cars, especially those that are part of TaaS fleets, will almost certainly continue to be the most effective way to map the physical world. That is the reason why we see car manufacturers, transportation network companies, and large tech companies collaborating and competing for mapping assets and talent, as well as robotics talent. All of these players should be prepared to face regulatory and public scrutiny when the inevitable privacy and security issues arise.

### Conclusion

The privacy and security issues described above are some of the most important that will need to be addressed as we undergo a shift to connected, autonomous cars and a personal TaaS world. However, as with all highly innovative industries, one can never determine what novel issues will arise.
