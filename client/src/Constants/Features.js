import Pic1 from "../Assets/Images/Features1.png";
import Pic2 from "../Assets/Images/Features2.png";
import Pic3 from "../Assets/Images/Features3.png";
import Pic4 from "../Assets/Images/Features4.png";
import Pic5 from "../Assets/Images/Features5.png";

const features = [
    {
        id : 1,
        image : Pic1,
        text : "Chat Bot",
        options : false,
        link : 'chat-bot'
    },
    {
        id : 2,
        image : Pic2,
        text : "Psychometric Test",
        options : true,
        count : 9,
        link : 'psychometric-test'
    },
    {
        id : 3,
        image : Pic3,
        text : "Emotional Analysis",
        options : false,
        link : 'emotional-analysis'
    },
    {
        id : 4,
        image : Pic4,
        text : "Content",
        options : false,
        link : 'content'
    },
    {
        id : 5,
        image : Pic5,
        text : "ML based content suggestions & reports",
        options : false,
        link : 'suggestions-reports'
    },
    
]

export default features;