import { IconType } from "react-icons";
import { SiOllama } from "react-icons/si";
import { Layers } from "lucide-react";

//You can add as many tech stack icons here
// You can add as many tech stack icons here
export const techIcons: { [key: string]: string } = {
  // 🚀 Web Development
  "Next.js": "/Icons/next.svg",
  "React.js": "/Icons/react.svg",
  "Node.js": "/Icons/node.svg",
  "Express.js": "/Icons/express-color.svg",
  "JavaScript": "/Icons/javascript.svg",
  "Tailwind CSS": "/Icons/tailwindcss-color.svg",
  "HTML5": "/Icons/html.svg",
  "CSS3": "/Icons/css.svg",
  // "SASS": "/Icons/sass.svg",

  // ⚙️ Backend & Databases
  // "Go": "/Icons/go.svg",
  // "Kotlin": "/Icons/kotlin.svg",
  "PostgreSQL": "/Icons/PostgreSQL.svg",
  "MongoDB": "/Icons/mongodb-color.svg",
  "Firebase": "/Icons/firebase.svg",
  "MySQL": "/Icons/mysql-color.svg",
  // "GraphQL": "/Icons/graphql.svg",
  // "Docker": "/Icons/docker.svg",
  // "Kubernetes": "/Icons/kubernetes.svg",

  // 🤖 Machine Learning & AI
  "Python": "/Icons/python-color.svg",
  "TensorFlow": "/Icons/tensorflow-color.svg",
  "PyTorch": "/Icons/pytorch.png",
  "Scikit-Learn": "/Icons/scikitlearn-color.svg",
  "Hugging Face": "/Icons/huggingface-color.svg",
  "OpenCV": "/Icons/opencv.svg",
  "NLP": "/Icons/nlp.png",

  // 📊 Data Science & Analytics
  "Pandas": "/Icons/pandas-color.svg",
  // "NumPy": "/Icons/numpy.svg",
  // "Matplotlib": "/Icons/matplotlib.svg",
  // "Seaborn": "/Icons/seaborn.svg",
  // "R": "/Icons/r.svg",
  // "Apache Spark": "/Icons/spark.svg",

  // 🛠 Developer Tools
  // "Git": "/Icons/git.svg",
  "GitHub": "/Icons/github-color.svg",
  "Postman": "/Icons/postman-color.svg",
  // "VS Code": "/Icons/vscode.svg",
  // "Android Studio": "/Icons/androidstudio.svg",
};

// Tools without a static image asset, rendered as icon components instead.
export const techIconComponents: { [key: string]: IconType } = {
  "Ollama": SiOllama,
  // No official LlamaIndex logo is available in the icon set, so this is a neutral placeholder icon.
  "LlamaIndex": Layers,
};
  
  
  