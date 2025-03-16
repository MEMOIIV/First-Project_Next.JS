import Image from "next/image";
import styles from "./page.module.css";
export const metadata = {
  title: 'Home',
  description: 'This is the Home page',
};
export default function Home() {
  return (
    <div className="main_div">
        <h1>
            Hello world
        </h1>
    </div>
  );
}
