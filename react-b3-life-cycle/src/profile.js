export default function () {
  const person = {
    name: "GergoriaY. Zara",
    imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundcolor: "black",
      color: "pink",
    },
  };
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar" src={person.imageUrl} alt={person.name} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
