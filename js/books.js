
    // URL'dan product ID olish
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // Fashion mahsulotlari ro'yxati
    const products = [
      {
        id: "1",
        name: "107 Days",
        img: "../image/107 days kamala harris.png.jpg",
        description: "107 Days Hardcover – September 23, 2025",
        price: "$20.98",
        details: `
        
        For the first time, and with surprising and revealing insights, former Vice President Kamala Harris tells the story of one of the wildest and most consequential presidential campaigns in American history.

            Your Secret Service code name is Pioneer.
            You are the first woman in history to be elected vice president of the United States.
            On July 21, 2024, your running mate, Joe Biden, announces that he will not be seeking reelection.
            The presidential election will occur on November 5, 2024.
            You have 107 days.

            From the chaos of campaign strategy sessions to the intensity of debate prep under relentless scrutiny and the private moments that rarely make headlines, Kamala Harris offers an unfiltered look at the pressures, triumphs, and heartbreaks of a history-defining race. With behind-the-scenes details and a voice that is both intimate and urgent, this is more than a political memoir—it’s a chronicle of resilience, leadership, and the high stakes of democracy in action.

            Written with candor, a unique perspective, and the pace of a page-turning novel, 107 Days takes you inside the race for the presidency as no one has ever done before.x
        
        
        
        `
      },
      {
        id: "2",
        name: "Alchemised Hardcover",
        img: "../image/Alchemised.png",
        description: "Alchemised Hardcover – September 23, 2025",
        price: "$24.48",
        details: `
        
        
        In this riveting dark fantasy debut, a woman with missing memories fights to survive a war-torn world of necromancy and alchemy—and the man tasked with unearthing the deepest secrets of her past.

This stunning hardcover edition features a deluxe jacket with gold foil on the front and a full-color illustration on the reverse, gorgeous designed endpapers, a gold foil case stamp, and, from acclaimed artist Avendell, a black-and-white interior illustration.

“What is it you think you’re protecting in that brain of yours? The war is over. Holdfast is dead. The Eternal Flame extinguished. There’s no one left for you to save.”

Once a promising alchemist, Helena Marino is now a prisoner—of war and of her own mind. Her Resistance friends and allies have been brutally murdered, her abilities suppressed, and the world she knew destroyed.

In the aftermath of a long war, Paladia’s new ruling class of corrupt guild families and depraved necromancers, whose vile undead creatures helped bring about their victory, holds Helena captive.

According to Resistance records, she was a healer of little importance within their ranks. But Helena has inexplicable memory loss of the months leading up to her capture, making her enemies wonder: Is she truly as insignificant as she appears, or are her lost memories hiding some vital piece of the Resistance’s final gambit?

To uncover the memories buried deep within her mind, Helena is sent to the High Reeve, one of the most powerful and ruthless necromancers in this new world. Trapped on his crumbling estate, Helena’s fight—to protect her lost history and to preserve the last remaining shreds of her former self—is just beginning. For her prison and captor have secrets of their own . . . secrets Helena must unearth, whatever the cost.
        
        `
      },
      {
        id: "3",
        name: "Poems & Prayers Hardcover",
        img: "../image/POEMS&PRAYERS.png",
        description: "Poems & Prayers Hardcover – September 16, 2025",
        price: "$19.58",
        details: `
        
        #1 NEW YORK TIMES BESTSELLER • From the Academy Award–winning actor and author of Greenlights comes an inspiring, faith-filled, and often hilarious collection of personal poetry and prayers about navigating the rodeo of life and chasing down the original dream, belief.

My prayers are my poems are my prayers.

I’ve always relied on logic to make sense of myself and the world.

A prescriptionist at heart, I’ve always looked to reason to find the rhyme, the practical to get to the mystical, the choreography to find the dance, the proof to get to the truth, and reality to get to the dream.

I’ve been finding that tougher to do lately. It’s more than hard to know what to believe in; it’s hard to believe.

But I don’t want to quit believing, and I don’t want to stop believing in . . . humanity, you, myself, our potential.

I think it’s time for us to flip the script on what’s historically been our means of making sense, and instead open our aperture to enchantment and look to faith, belief, and dreams for our reality.

Let’s sing more than we might make sense, believe in more than the world can conclude, get more impressed with the wow instead of the how, let inspiration interrupt our appointments, dream our way to reality, serve some soul food to our hungry heads, put proof on the shelf for a season, and rhyme our way to reason.

Forget logic, certainty, owning, or making a start-up company of it; let’s go beyond what we can merely imagine, and believe, in the poetry of life.
        
        
        `
      },
      {
        id: "4",
        name: "The Secret of Secrets: A Novel (Robert Langdon) Hardcover",
        img: "../image/THE SECRET OF SECЯЕТS.png",
        description: "The Secret of Secrets: A Novel (Robert Langdon) Hardcover – September 9",
        price: "$22.80",
        details: `
        
        INSTANT #1 NEW YORK TIMES BESTSELLER • The world’s most celebrated thriller writer and author of The Da Vinci Code returns with his most stunning novel yet—a propulsive, twisty, thought-provoking masterpiece that will entertain readers as only Dan Brown can do.

Robert Langdon, esteemed professor of symbology, travels to Prague to attend a groundbreaking lecture by Katherine Solomon—a prominent noetic scientist with whom he has recently begun a relationship. Katherine is on the verge of publishing an explosive book that contains startling discoveries about the nature of human consciousness and threatens to disrupt centuries of established belief. But a brutal murder catapults the trip into chaos, and Katherine suddenly disappears along with her manuscript. Langdon finds himself targeted by a powerful organization and hunted by a chilling assailant sprung from Prague’s most ancient mythology. As the plot expands into London and New York, Langdon desperately searches for Katherine . . . and for answers. In a thrilling race through the dual worlds of futuristic science and mystical lore, he uncovers a shocking truth about a secret project that will forever change the way we think about the human mind.
        
        
        `
      },
      {
        id: "5",
        name: "Stop, in the Name of God",
        img: "../image/STOP IN THE NAME OF GOD.png",
        description: "Stop, in the Name of God: Why Honoring the Sabbath Will Transform Your Life",
        price: "$29.99",
        details: `
        
        Stop, in the Name of God: Why Honoring the Sabbath Will Transform Your Life will help you discover how observing the Sabbath isn't a rejection of modern life but a rebellion against busyness and a pathway to genuine connection, peace, and presence. Through Stop in the Name of God, bestselling author Charlie Kirk guides you on how to unplug, recharge, and reconnect with God, family, and yourself in a way that nurtures your soul. In a world dominated by screens and constant noise, Stop in the Name of God presents the Sabbath as a radical act of resistance. Packed with practical insights and spiritual wisdom, Charlie Kirk demonstrates how honoring the Sabbath restores balance, reduces anxiety, and nourishes your soul. It's not just a day of rest-it's a lifeline to reclaiming what truly matters.
        
        
        `
      },
      {
        id: "6",
        name: "Awake: A Memoir",
        img: "../image/AWAKE JEN.png",
        description: "Awake: A Memoir",
        price: "$20.98",
        details: `
        
        “I can’t imagine any woman reading this without feeling seen, inspired, and totally empowered.” —Mel Robbins

“A MASTERPIECE, you guys. This memoir by the great Jen Hatmaker *cannot* be missed. I was riveted as if to a thriller and touched/moved/inspired in ways I can’t quite articulate yet. Just please read. You’ll thank me.” —Elin Hilderbrand, on Instagram

From Jen Hatmaker—beloved New York Times bestselling author and host of the For the Love podcast—a brutally honest, funny, and revealing memoir about the traumatic end of her twenty-six-year-long marriage, and the beginning of a different kind of love story.

At 2:30 a.m. on July 11, 2020, Jen Hatmaker woke up to her husband of twenty-six years whispering in his phone to another woman from their bed. It was the end of life as she knew it. In the months that followed, she went from being a shiny, funny, popular leader to a divorced wreck on antidepressants and antianxiety meds, parenting five kids alone with no clue about the functioning of her own bank accounts. Having led millions of women for over a decade—urging them to embrace authenticity, find radical agency, and create healthy relationship—she felt like a catastrophic failure.
        
        
        `
      },
      {
        id: "7",
        name: "Strong Ground",
        img: "../image/STRONG GROUND.png",
        description: "Strong Ground: The Lessons of Daring Leadership, the Tenacity of Paradox, and the Wisdom of the Human Spirit (A Dare to Lead Book)",
        price: "$21",
        details: `

        #1 New York Times bestselling author Brené Brown returns with an urgent call to reimagine the essentials of courageous leadership. In a time when uncertainty runs deep and bluster, hubris, and even cruelty are increasingly framed as acceptable leadership, Brown delivers practical, actionable insights that illuminate the mindsets and skill sets essential to reclaiming focus and driving growth through connection, discipline, and accountability.

Over the past six years, Brené Brown, along with a global community of coaches and facilitators, has taken more than 150,000 leaders in 45 countries through her Dare to Lead courage-building work. In Strong Ground, Brown shares the lessons from these experiences along with wisdom from other thinkers. This is a vital playbook for everyone from senior leaders developing and executing complex strategies to Gen Z-ers entering and navigating turbulent work environments. It is also an unflinching assessment of what happens when we continue to perpetuate the falsehood that performance and wholeheartedness are mutually exclusive
        
        
        `
      },
      {
        id: "8",
        name: "Jump and Find Joy",
        img: "../image/JUMPandFINDjoy.png",
        description: "Jump and Find Joy: Embracing Change in Every Season of Life",
        price: "$20.98",
        details: `
        
        From #1 New York Times bestselling author and beloved former Today co-host Hoda Kotb comes her most personal, ambitious book yet—a guide to dealing with change and upheaval, even (and perhaps especially) when it’s unexpected.

Hoda Kotb didn’t expect to join the Today show at age forty-four. Or to become a mother at fifty-two. Or to leave Today and embark on a new adventure at sixty! Change doesn’t always arrive when we expect it, and its effects are anything but predictable. But Hoda believes that the benefits of change can be extraordinary...if we’re willing to listen to and learn from them.

In the tradition of books like Savannah Guthrie’s Mostly What God Does and Maria Shriver’s I’ve Been Thinking comes Hoda Kotb’s Jump and Find Joy—an intimate book that reveals for the first time what Hoda discovered as she started embracing change in every aspect of her life. In her quest to better understand change and how to work with (not against) it, Hoda relies on her reporting instincts to investigate HOW change works, WHO is approaching it with grace, and WHAT she can apply to her own life and share with others. Jump and Find Joy combines the wisdom of change experts, insights from the latest work on resilience, and deeply personal stories from celebrities and inspirational people in our own communities. From small shifts in daily routines to major leaps of faith, Hoda shows why change isn’t to be feared but celebrated...and how each of us can thrive in the midst of changes we’ll inevitably face ourselves
        
        
        `
      }
    ];

    const product = products.find(p => p.id === id);

    if(product){
      document.getElementById("product-container").innerHTML = `
        <div class="detail-container">
          <div><img src="${product.img}" alt="${product.name}"></div>
          <div class="product-info">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button class="buy-btn">Buy Now</button>
            <h3 style="margin-top:20px;">Details</h3>
            <p>${product.details}</p>
          </div>
        </div>
      `;

      // Related productlar (tanlangani tashqari)
     // Related productlar (tanlangani tashqari)
const relatedHTML = products
  .filter(p => p.id !== id)
  .map(p => `
    <div class="related-card">
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">${p.price}</div>
      <a href="books-detail.html?id=${p.id}">View Details</a>
    </div>
  `).join("");
document.getElementById("related-container").innerHTML = relatedHTML;
  }
