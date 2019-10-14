import document from "document";
import * as messaging from "messaging";
import {memory} from "system";

let background = document.getElementById("background");
let yogaButton = document.getElementById("yogaButton");
let quote = document.getElementById("quoteDisplay")

// Yoga quotes array
var quotes = [
    "No one is wise by birth, for wisdom results from one own’s efforts.\n- T. Krishnamacharya",
    "Master your breath, let the self be in bliss, contemplate on the sublime within you. - T. Krishnamacharya",
    "Teach what is inside you. Not as it applies to you, to yourself, but as it applies to the other. - T. Krishnamacharya",
    "Master your breath, let the self be in bliss, contemplate on the sublime within you. - T Krishnamacharya",
    "Meditation results in marvels.\n- T. Krishnamacharya",
    "The success of Yoga must not be measured by how flexible your body becomes, but rather by how much it opens your heart. - T. K. V. Desikachar",
    "A good teacher sees the commonality of all human beings and helps each individual find his uniqueness. - T. K. V. Desikachar",
    "When we are attentive to our actions we are not prisoners to our habits.\n- T. K. V. Desikachar",
    "The quality of our breath expresses our inner feelings.\n- T. K. V. Desikachar",
    "The world exists to set us free.\n- T. K. V. Desikachar",
    "Yoga is both the movement toward and the arrival at a point.\n- T. K. V. Desikachar",
    "If you do not find peace within, you will not find it anywhere else. - Sivananda",
    "The mind is responsible for the feelings of pleasure and pain. Control of the mind is the highest Yoga. - Sivananda",
    "An ounce of practice is worth a ton of theory!\n- Sivananda",
    "Put your heart, mind, and soul into even your smallest acts. This is the secret of success. - Sivananda",
    "Fear is only in duality. Fear is Mind. When you are your Self, there is no fear.\n- Sivananda",
    "Never worry about what other people say or think. Do the right. Have a clear conscience and roam about happily. - Sivananda",
    "Don't fear the darkness if you carry the light within. - Sivananda",
    "Giving is the secret of abundance. - Sivananda",
    "You are the Master of your own Destiny - Sivananda",
    "There is something good in all seeming failures. You are not to see that now. Time will reveal it. Be patient. - Sivananda",
    "Just love. The rest is bullshit. - S. Saraswati",
    "Change yourself and you have done your part in changing the world. - Paramahansa Yogananda",
    "When the mind is calm, how quickly, how smoothly, how beautifully you will perceive everything. - Paramahansa Yogananda",
    "Be kind to others, so that you may learn the secret art of being kind to yourself. - Paramahansa Yogananda",
    "It is spiritual poverty, not material lack, that lies at the core of all human suffering. - Paramahansa Yogananda",
    "Don't rush anything. When the time is right it will happen. - Hplyrikz.com",
    "I am a spark from the Infinite.\nI am not flesh and bones.\nI am light. - Paramahansa Yogananda",
    "Live quietly in the moment and see the beauty of all before you. The future will take care of itself. - Paramahansa Yogananda",
    "Divisions are imaginary lines drawn by small minds. - Paramahansa Yogananda",
    "How many lives are frittered away, age after age, in endless coming and going. Find out who you are! - Anandamayi Ma",
    "Precious gems are profoundly buried in the earth and can only be extracted at the expense of great labor. - Anandamayi Ma",
    "Life is movement. The more life there is, the more flexibility there is. The more fluid you are, the more you are alive. - Arnaud Desjardins",
    "Happiness is your nature. It is not wrong to desire it. What is wrong is seeking it outside when it is inside. - Ramana Maharshi",
    "Silence is truth. Silence is bliss. Silence is peace. And hence Silence is the Self. - Ramana Maharshi",
    "No one succeeds without effort... Those who succeed owe their success to perseverance. - Ramana Maharshi",
    "Peace is the inner nature of humankind. If you find it within yourself, you will then find it everywhere. - Ramana Maharshi",
    "Don't be too quick to interpret the moment. Just keep quiet. - Mooji",
    "Don't remind the world that it is sick and troubled. Remind it that it is beautiful and free. - Mooji",
    "Who reminds you to breathe and to beat your heart? Something is there, taking care. - Mooji",
    "All the ups and downs are grace in different wrappings, sent to refine consciousness. Say thanks to them all. - Mooji",
    "You need nothing to be happy - you need something to be sad. - Mooji",
    "Life is so much wiser and kinder than your mind imagines. Trust & Be Still.\n- Mooji",
    "There is no path to happiness; happiness is the path. - Gautama Buddha",
    "It's not what the mind says.\n It's how seriously it is taken. - Mooji",
    "If you seek approval from others in this world, you will not know happiness. - Mooji",
    "Under the obsessive thoughts and plans, under the emotions, positive and negative, there is an ocean of peace. - Gangaji",
    "The inspiration you seek is already in side you, be silent and listen. - RUMI",
    "When you are willing to stop looking for something in thought, you find everything in silence. - Gangaji",
    "True forgiveness and love arise naturally, effortlessly, from the silence of the heart broken all the way open. - Gangaji",
    "If you're laughing, you're healing. - Gangaji",
    "You have the freedom, ability and authority to love your life. Just be you, then wait. - Gangaji",
    ];

// Quote button
yogaButton.onactivate = function randomQuote() {
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    quote.text = rand;
    console.log("Function  requested.");
    console.log("JS Memory: " + memory.js.used + "/" + memory.js.total);
}

// Message socket opens
messaging.peerSocket.onopen = () => {
    console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
    console.log("App Socket Closed");
};
