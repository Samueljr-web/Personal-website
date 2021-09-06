import Image from '../assets/man.png';
import Todo from '../assets/todo.png';
import Twitter from '../assets/twitterClone.png';
import Calculator from '../assets/calculator.png';

export const Data = {
    paragraph: "my name is samuel, am a web developer with strong passion in programming. i am open for projects and collaboration, you can reach me via my email below.  ",
    button: "Send Mail",
    image: Image,
};

export const ProjectData = [
        {
            id: 1,
            img: Todo,
            live: "Live",
            github: "github",
            githubLink: "https://github.com/Samueljr-web/TodoList",
            liveLink: "",
            title: "TodoList",
            alt: "TodoImg"
        },
        {
            id: 2,
            img: Twitter,
            live: "live",
            github: "github",
            githubLink: "https://github.com/Samueljr-web/React-twitterClone",
            liveLink: "",
            title: "TwitterClone",
            alt: "TwitterImg"
        },
        {
            id: 3,
            img: Calculator,
            live: "live",
            github: "github",
            githubLink: "https://github.com/Samueljr-web/calculator",
            liveLink: "https://github.com/Samueljr-web/",
            title: "Calculator",
            alt: "CalculatorImg"
        }
]
     
export const SkillsData = {
    title: "my skills"
}
export default Data;