var emailData = 'com # / # \ nSubject: Re: Aliquam cursus velit not inexpensive. # / # \ ndat: 08-11-2016 # / # \ nTo: baz@foo.com # / # \ nCras from a lion, faucibus id mollis a, dignissim sit and girls. However dui mass, in a soft and sad, the author of the temperature. Donec egestas purus velit, eget laoreet urna venenatis id. It also will need temperature. The lion sterilized my homework, he is an employee at the gate. No stress airports, mass and protein valley, soccer Performance Award. How big or graduated. Soccer carrots Vulputate alcohol. Tomorrow is the alcohol. In fact, the very eget tincidunt tempor iaculis. Present financing various drop, or law enforcement in the door itself. But the mass takes a pill or across the country. ## || ## \ n \ nfrom: qux@bar.com # / # \ nSubject, but the gas in the Bureau. # / # \ Ndat: 06-25-2016 # / # \ nTo: qux@bar.com # / # \ what has been said to be free of clinical Justo carrots. However, Eu therapy. E-but basketball pot. However, justo, but members of large, functional pain Planning valley. No programming or enhanced now. But developers soccer scores, clinical need financing. Laoreet the chat itself as antioxidants, football bananas graduated cartoon. Maecenas ullamcorper makeup Pakistan, carrots and bananas, my pillow. ## || ## \ n \ nfrom: quux@foo.com # / # \ nSubject, game and chat and laughter. # / # \ Ndat: 07-24- 2016 # / # \ nTo: quux@foo.com # / # \ nCurabitur sometimes been enhanced. Nulla. Each region but also enhanced, rather than manufacturing but, skirt start. Smart smile now, but there was no eu, Press Releases. Need emergency element across the country. Tomorrow dui free vehicles innovative and arrows any pain. Class began Employment twist by our marriage, per himenaeos. A skirt if any; Reserved members of one or boundaries. Maecenas vulputate, the price of a lion, the author of sollicitudin, lectus elit eleifend hatred, or a from a molestie ligula eget tellus. Relay from the budget to the elements. The laughter of life tortor iaculis of football in that now they do to employees. The ends of the Integer lobortis lorem, id rutrum elit mauris condimentum. The refinancing. ## || ## \ n \ nfrom: garply@foo.com # / # \ nSubject Integer and now antioxidants, classroom. # / # \ Ndat: 07-03-2016 # / # \ nTo: garply@foo.com # / # \ nFusce orange chili unless either sit and warm gas. Sit amet, ultricies rutrum facilisis vitae nisl vehicula. Mid-one is always zero. Maecenas congue, lacus feugiat dapibus a lion worth it metus facilisis elit, it is not the ends of the players but he is a lion. Donec varius not, for filthy are not members of the pillow, there is no there is no posuere ligula, ut tortor vel faucibus eleifend more than she feared. But the threshold real estate. Soccer and football peanut. Aliquam sed Pellentesque dui, ut consequat neque. Mourning whole ugly basketball, Planning for real estate, vehicles relax. Tincidunt dui put developers. In the refinancing. "'

function mailCount(emailData) {
  mailArray = emailData.split('## || ##');
  dateArray = mailArray.map(function(text) {
    textMatch = text.match(/[0-9]+\s?-[0-9]+\s?-[0-9]+/)
    if (textMatch) {
      return new Date(textMatch[0]);
    }
  });
  dateArray = dateArray.filter(x => x);
  dateArray.sort();
  dateArray = dateArray.map(date => date.toDateString());
  numberOfEmails = dateArray.length;
  dateRange = dateArray[0] + '-' + dateArray.slice(-1);
  console.log(`Count of Email: ${numberOfEmails}`);
  console.log(`Date Range: ${dateRange}`);
}


mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

