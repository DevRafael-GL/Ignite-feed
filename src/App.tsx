import { Header } from "./components/Header";
import { Post, IPost } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/DevRafael-GL.png",
      name: "Rafael GonΓ§alves",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, envento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },
      { type: "link", content: "π jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-20 13:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa π" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, envento da Rocketseat. O nome do projeto Γ© DoctorCare π",
      },
      { type: "link", content: "π jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-15 16:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
