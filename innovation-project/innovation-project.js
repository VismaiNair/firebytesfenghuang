function riddle() {
    var random = Math.floor(Math.random() * 10);
    var question = document.getElementById("question").innerHTML;
    var answer = document.getElementById("input").innerHTML;
    answer = answer.toLowerCase();
    var msg = "";
    var possibleRiddles = ["What can you catch, but not throw?", "What can run but never walks, has a mouth but never talks, has a bed but never sleeps, has a head but never eats?", "The more you take away, the larger I become. What am I?", "What weighs more, a pound of feathers or a pound of stones?", "What has a head, a tail, is brown, but has no legs?", "What is neither flesh, bone, or nail, yet has 4 fingers and a thumb?", "I'm tall when I'm young and short when I'm old. What am I?", "What holds water but is full of holes?", "You wear me every day but never put me on. I will change colors if I am outside for too long. What am I?"]
    var possibleAnswers = ["cold", "river", "hole", "neither", "penny", "glove", "candle", "sponge", "skin"]
    if(possibleAnswers[random] = answer){
        msg = "correct"
    }
    else {
        msg = "incorrect"
    }
    var output = document.getElementById("output");
    output.innerHTML = msg;
    question.innerHTML = possibleRiddles[random];
    console.log(random);
}