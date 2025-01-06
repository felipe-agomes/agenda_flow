import "../styles/Header.css";

type HeaderProp = {
  title: string;
};

export default function Header({ title }: HeaderProp) {
  return (
    <header id="header">
      <h1 className="title">{title}</h1>
    </header>
  );
}
