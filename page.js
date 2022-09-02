const shittyHiddenStuffForNotebookBecauseImLazy = `
<div class="lines"></div>
 
<ul class="shittyhiding">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>


  </ul>
`
/*
<p class = "yongki"> </p>
<p class = "captain"> </p>
*/

const page1Content = `

<p class = "yongki">
You said Vik was really different. What was Vik like before?
</p>
<p class = "captain">Viktor was gentler. Eager to learn? They were upset after the accident. I gave their life purpose again. Now they want to wallow in uselessness. </p>
<p class = "captain">Actually, explain. Do they really torture people? </p>
<p class = "yongki">It's not Vik's fault! There are extenuating circumstances (a situation or condition that provides an excuse for an action). If Vik doesn't hurt people they'll get hurt worse, and they'll hurt other people worse! Besides, Vik says that <span style="text-decoration: line-through;">Harold</span> Parker makes sure they only hurt people who deserve it.
</p><p class = "yongki">
p.s. Sorry I called Parker Harold. Vik says I need to be careful to call people what they want to be called and that they don't know where I got that name from. I got it from a book I found with a funny little clown on it.
 </p>
 <p class = "captain">I'm sorry I broke the pen, Yongki. I'm not angry at you. I know it helps to hear that.  </p>
 <p class = "captain">I don't think I deserve to be hurt by Vik.  We were friends once. Or at least teacher and student. </p>
 <p class = "captain">I don't understand why things had to change while I was gone. </p>
 <p class = "captain">We should talk about something different. </p>
 <p class = "yongki">Why don't you make the good flavors anymore? Banana is disgusting.
 </p><p class = "yongki"> :( </p>
 <p class = "captain">If I make them smell good, you eat them. If you want the better smells, stop eating them.</p>
 <p class = "yongki">That's not equitable ('fair and impartial') because only you would be able to decide if I'm ready. I know they don't taste like they smell now. I don't know why you had to make them look like desserts either, if they weren't food. That is bad camouflage.  </p>
 <p class = "captain">Okay. fair. I'll stop following the tutorials all the way through. If you can handle mango for a week without eating it, I'll make something better. Like orange. </p>
 <p class = "captain">I would like to change the topic back.  </p>
 <p class = "captain">You never leave the room anymore. When it's your turn. Ever since I confronted Viktor. </p>
 <p class = "captain">Is this something we should talk to the Doctor about? </p>


`

/*
<p class = "yongki"> </p>
<p class = "captain"> </p>
*/
const page2Content = `

<p class = "yongki">I didn't realize Vik thought I was a burden.  I did realize they thought I was your memory.  </p>
<p class = "yongki">I never liked that. I never even knew you. Why did I have to be someone's memory? Why couldn't I just be me? </p>
<p class = "yongki">I thought we were friends. Me and Vik. I thought they liked me. They said they liked me, and K said so too. But now they get so mean to you, even though I'm watching too. 
</p>
<p class = "yongki">And they say such mean things about me to you.
</p>
<p class = "yongki">I don't want to leave my room because it feels like a lot of work. Figuring out if Vik is my friend or not. Seeing them figure out if I'm you or not. 
</p>
<p class = "yongki">I thought I knew how Vik worked but now I don't know anymore. I don't know if they've always thought I was a burden. Maybe it's just 'now' me they don't like.
</p>
<p class = "yongki">I don't know if I want to talk to the Doc about it. What if she says I'm a burden?
</p>
<p class = "captain">Yongki, you don't deserve to be treated this way. 
</p>
<p class = "captain">You are not a burden.  Even if you were, you never asked for Viktor to take care of you. 
</p>
<p class = "captain">I don't think Doc will say you're a burden. If she does, I will tell her she is wrong. I think she can help you. 
</p>
<p class = "captain">If we don't see her soon, you will hurt even more. Putting things off never helps.
</p>
<p class = "yongki">Like that time you put off replacing the expired scents and everything smelled gross for a week? </p>
<p class = "captain">Yes, exactly like that, Yongki. Exactly like that. </p>
















`







class Page {
  number;
  content;
  constructor(number, content){
    this.number = number;
    this.content = content;
  }

  render = (ele)=>{
    //make a div, add to parent, add dirt graphics.
    const me = document.createElement("div");
    me.className =(`page`);
    me.innerHTML = shittyHiddenStuffForNotebookBecauseImLazy + this.content;
    const bg = document.createElement("div");
    bg.className=`page${this.number}`;
    me.append(bg)
    ele.append(me);
  }
}

