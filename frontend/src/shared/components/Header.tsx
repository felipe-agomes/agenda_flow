import style from "../styles/Header.module.css";

type HeaderProp = {
  title: string;
};

export default function Header({ title }: HeaderProp) {
  return (
    <header className={style.header}>
      <h1 className={style.title}>{title}</h1>
    </header>
  );
}
