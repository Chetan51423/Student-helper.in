function getBotResponse(input) {
    //rock paper scissors
    if (input == "hi") {
        return "hello,how can i help you?";
    } else if (input == "i have a query") {
        return "yes,how can i help you?";
    } else if (input == "can i know about vit college?") {
        return "select a domain:admission,clubs,contact section";
    }else if (input == "clubs") {
        return "robotics club,boat club,griffin club";
    }else if (input == "is there any limit for the number of clubs one can join?") {
        return "No, there is no limit as such. You can join as many clubs as you want.";
    }else if (input == "how is the club culture?") {
        return "Diverse, Enthusiastic and Magical can be three perfect words to describe the Club Culture of VIT Pune. VIT Pune consists of 38 different clubs";
    }else if (input == "tell about robotics club") {
        return "The goal of the team is to gain new skills, explore new technologies, and promote the area of robotics. The club has won Robocon prizes and national competitions, as well as holding successful workshops with enthusiastic participation";
    }else if (input == "tell about coding club") {
        return "One of the most essential skills that you will need to keep up with today’s fast paced world is programming. It continues to be of utmost importance regardless of the field you work in.";
    }






    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "thank you") {
        return "talk to u later!";
    } else {
        return "Try asking something else!";
    }
}