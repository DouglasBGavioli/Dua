import './style.min.css';

type TitlePageProps = {
  title: string;
  subtitle?: string;
};

export function TitlePage(props: TitlePageProps) {
  return (
    <div className="dua-titlepage">
      <h1 className="dua-titlepage__title">{props.title}</h1>
      {props.subtitle && <span className="dua-titlepage__subtitle">{props.subtitle}</span>}
    </div>
  );
}