const Discord = require('discord.js');
const config = require("./config.json");
let mode = 1;

//Bot instance and Playing message
let bot = new Discord.Client();
bot.on("ready", function() {
    console.log('Logged in as '+bot.user.username);
    bot.user.setActivity('God', { type: 'PLAYING' });
})

//random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//random car image
function getRandomCar(){
    return config.RANDO_CAR[getRandomInt(config.RANDO_CAR.length)];
}
//random swap ideas
function getRandomEngine(max){
    return config.RANDO_ENG[getRandomInt(config.RANDO_ENG.length)];
}
function getRandomHull(max){
    return config.RANDO_HULL[getRandomInt(config.RANDO_HULL.length)];
}
//When a message is received
bot.on("message", function(message) {

    if(message.channel.type == "dm") return ;
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    //awake mode
    if(mode == 1)
    {
    //ping
    if(message.content.startsWith(config.prefix + "ping"))
    {
        let pingtime = parseInt(bot.ping);
        message.channel.send(`Po${'o'.repeat((pingtime-100)/10)}ng! ${pingtime}ms`);
    }
    //help
    else if(message.content.startsWith(config.prefix + "help"))
    {
        message.channel.send(new Discord.RichEmbed()
            .setTitle("Chronos is here to help!")
            .setThumbnail("https://lh3.googleusercontent.com/jMLIK_CsqpGoVovf52G4jNVzFKMU45DZEV7cr-Op1SYMDWfkwD6qYKolQlpHsoCuUA=s180")
            .setColor("#22dd22")
            .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
            .addField("c!help", "Displays this help dialogue")
            .addField("c!ping", "Check the status of Chronos")
            .addField("c!tips", "Displays some tips for new or inexperienced players")
            .addField("c!gears", "Gives a link to the cargister website")
            .addField("c!ecu", "Displays some helpful information about ECUs")
            .addField("c!swaps", "Displays information about engine swaps")
            .addField("c!swap-idea", "Generates a random suggestion for an engine swap")
            .addField("c!car", "Displays a random car picture")
            .addField("Expecting more?", "You could always write your own super awesome bot instead, or have a little patience while I finish this one. Have a suggestion? PM me!"));
    }
    //gears
    else if(message.content.startsWith(config.prefix + "gears"))
    {
        message.channel.send("http://www.cargister.com/calculator-gear-ratio")
    }
    //ECU tips
    else if(message.content.startsWith(config.prefix + "ecu"))
    {
        message.channel.send(new Discord.RichEmbed()
            .setTitle("ECU Information")
            .setThumbnail("https://lh3.googleusercontent.com/jMLIK_CsqpGoVovf52G4jNVzFKMU45DZEV7cr-Op1SYMDWfkwD6qYKolQlpHsoCuUA=s180")
            .setColor("#22dd22")
            .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
            .addField("How do I install an ECU?", "To install an ECU you must first upgrade the ECU in engine upgrades to the maximum level. It is the top middle left upgrade. Tap again to access aftermarket ECUs")
            .addField("What does it do?", "There are 3 primary uses for an aftermarket ECU. First, it will let you enable launch control. They also increase your maximum engine RPM, and can also stop your boost pressure from dropping if you get an antilag variant")
            .addField("Which one do I need for my car?", "In most cases it is the Antilag 500, however if you're using a car from H or K class and use a 2 speed tune you may see better results with ECU 800")
            .addField("How do I enable launch control?", "You can turn on launch control on the dyno stand. Connect to the machine and you should notice a button. Use the green marker line on the dyno machine to set your launch RPM"));
    }
    //Engine swaps
    else if(message.content.startsWith(config.prefix + "swaps"))
    {
        message.channel.send(new Discord.RichEmbed()
            .setTitle("Engine Swaps Information")
            .setThumbnail("https://lh3.googleusercontent.com/jMLIK_CsqpGoVovf52G4jNVzFKMU45DZEV7cr-Op1SYMDWfkwD6qYKolQlpHsoCuUA=s180")
            .setColor("#22dd22")
            .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
            .addField("How do I do an engine swap?", "1. Go to car services with 3 cars \n2. Remove the engine from one, and prepare the other for assembly \n3. Go back to garage to begin rebuild \n4. Install roll cage (Must be lvl. 15 to purchase) \n5. Install all drivetrain parts, the Electrical Preperation button will not work until then \n6. Install fuses \n7. Go back to the garage and your car should now be rebuilt")
            .addField("How do I get parts for an engine swap?", "Fuses are earned through you daily challenge races. Every day has a chance to win a different fuse, and on the weekend you have a chance to win every colour \nAll other parts can be earned through regular fuel races, what part you get is entirely based on luck though. Just keep racing and it will turn up.")
            .addField("Which cars should I use?", "Look for an engine that has above average power. You can usually tell these apart because the cars they come in will normally be a lot heavier than others in its class \nFor the chassis look for good weight distribution. This is the only stat that does not change with an engine swap. Anything with >47% rear weight bias is a good call")
            .addField("Can I put X engine in Y car?", "Yes, as long as the engine and cage classes match"))
    }
    //tips
    else if(message.content.startsWith(config.prefix + "tips"))
    {
        message.channel.send(new Discord.RichEmbed()
            .setTitle("Tips for New Players")
            .setThumbnail("https://lh3.googleusercontent.com/jMLIK_CsqpGoVovf52G4jNVzFKMU45DZEV7cr-Op1SYMDWfkwD6qYKolQlpHsoCuUA=s180")
            .setColor("#22dd22")
            .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+')))
            .addField("Be patient", "Selling your car just means losing most of your investment")
            .addField("Be prepared to grind", "This is a long game, but you'll always be able to make progress even if it seems insignificant at the time")
            .addField("Do your daily quests and challenge races", "These are a huge source of income and experience")
            .addField("Be careful with your bucks", "The parts you can buy with the are not always better, or if they are sometimes not by a lot")
            .addField("Don't be afraid to ask for help", "We're here for a reason, if you have any questions just let someone know"))
    }
    //car images
    else if(message.content.startsWith(config.prefix + "car"))
    {message.channel.send(new Discord.RichEmbed()
        .setImage(getRandomCar()))
    }
    //hitler command
    else if(message.content.startsWith(config.prefix + "hitler"))
    {message.channel.send(new Discord.RichEmbed()
        .setImage("https://classicsworld.co.uk/wp-content/uploads/2017/06/BMW-E30-3-SERIES-BUYERS-GUIDE-1.jpg"))
    }
    //Engine swap ideas
    else if(message.content.startsWith(config.prefix + "swap-idea"))
    {
        message.channel.send(new Discord.RichEmbed()
            .setTitle("You should try building a...")
            .setThumbnail("https://lh3.googleusercontent.com/jMLIK_CsqpGoVovf52G4jNVzFKMU45DZEV7cr-Op1SYMDWfkwD6qYKolQlpHsoCuUA=s180")
            .setColor("#22dd22")
            .addField("Hull:", getRandomHull())
            .addField("Engine:", getRandomEngine())
            .setFooter(message.createdAt.toString().substring(0,message.createdAt.toString().indexOf('+'))))
    }
} 
});


bot.login(process.env.BOT_TOKEN);