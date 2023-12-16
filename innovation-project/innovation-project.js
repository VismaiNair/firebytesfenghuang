function riddle() {
    const random = Math.floor(Math.random() * 10);
    let msg = "";
    const possibleRiddles = ["What can you catch, but not throw?", "What can run but never walks, has a mouth but never talks, has a bed but never sleeps, has a head but never eats?", "The more you take away, the larger I become. What am I?", "What weighs more, a pound of feathers or a pound of stones?", "What has a head, a tail, is brown, but has no legs?", "What is neither flesh, bone, or nail, yet has 4 fingers and a thumb?", "I'm tall when I'm young and short when I'm old. What am I?", "What holds water but is full of holes?", "You wear me every day but never put me on. I will change colors if I am outside for too long. What am I?"]
    var possibleAnswers = ["cold", "river", "hole", "neither", "penny", "glove", "candle", "sponge", "skin"]
    msg = "Riddle:" + possibleRiddles[random] + "Answer:" + possibleAnswers[random];
    var output = document.getElementById("output");
    output.innerHTML = msg;
    console.log(random);
    console.log(possibleRiddles);
    console.log(possibleAnswers);
    console.log("1");
}

function generatePoem() {
    //variable definitions
    const poems = ["I'm glad the sky is painted blue,<br>And the grass is painted green, <br> With a lot of fresh air<br>All sandwiched in between.<br><br>-Anonymus","'Twas brillig, and the slithy toves<br>Did gyre and gimble in the wabe<br>All mimsy were the borogoves<br>And the mome raths outgrabe<br><br>'Beware the Jabberwock my son,<br>The jaws that bite, the claws that catch,<br>Beware the Jujub Bird,<br>and shun the frumious Bandersnatch!'<br><br>He took his vorpal sword in hand, long time the manxome foe he sought,-<br>So he rested by the Tumtum tree,<br>And stood awhile in thought.<br><br>And, as in uffish thought he stood,<br>The Jabberwock, with eyes of flame,<br><br>Came whiffing throught the tulgey wood,<br>And burbled as it came!<br><br>One, two! One, two! And through and through<br>The worpal blade went snicker-snack!<br>He left it dead and with its head<br>He went galumphing back.<br><br>'And hast thou slain the Jabberwock?<br>Come to my arms, my beamish boy!<br>O frabjous day! Callooh! Callay!<br>He chortled in his joy.<br>-Lewis Caroll","There's a picture in my room<br>Lightens many an hour of gloom,<br>Cheers me under fortune's frown<br>And the drudgery of town<br>Many and many a winter day<br>When my soul sees all things gray,<br><br>Here is veritable June,<br>Heart's content and spirit's boon.<br>It is scarce a hand-breadth wide,<br>Not a span from side to side,<br>Yet it is an open door<br>Looking back to joy once more,<br>Where the level marshes lie,<br>A quiet journey of the eye,<br>And the unsubstantial blue<br>Makes the fine illusion true.<br>So I forth and travel there<br>In the blessed light and air,<br>Miles of green tranquillity<br>Down the river to the sea.<br>Here the sea-birds roam at will,<br>And the sea-wind on the hill<br>Brings the hollow pebbly roar<br>From the dim and rosy shore,<br>With the very scent and draft<br>Of the old sea's mighty craft.<br>I am standing on the dunes,<br>By some charm that must be June's,<br>When the magic of her hand<br>Lays a sea-spell on the land.<br>And the old enchantment falls<br>On the blue-gray orchard walls<br>And the purple high-top boles,<br>While the orange orioles<br>Flame and whistle through the green<br>Of that paradisal scene.<br>Strolling idly for an hour<br>Where the elder is in flower,<br>I can hear the bob-white call,<br>Down beyond the pasture wall.<br>Musing in the scented heat,<br>Where the bayberry is sweet,<br>I can see the shadows run<br>Up the cliff-side<br>The mossers' houses on the beach,<br>Where the bathers on the sand<br>Lie sea-freshened and sun-tanned.<br>Thus I pass the gates of time<br>And the boundaries of clime,<br>Change the ugly man-made street<br>For God's country green and sweet.<br>Fag of body, irk of mind,<br>In a moment left behind,<br>Once more I possess my soul<br>With the poise and self-control<br>Beauty gives the free of heart<br>Through the sorcery of art. <br>-Bliss Carman"];
    let poemOutput = window.document.getElementById("poem-output");
    const randomNumber = Math.floor(Math.random()*3);
    poemOutput.innerHTML = poems[randomNumber];
}
