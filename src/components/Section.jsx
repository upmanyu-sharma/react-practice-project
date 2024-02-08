export default function Section(props) {
  return (
    <section id={props.id}>
      <h3>{props.title}</h3>
      {props.children}
    </section>
  );
}
