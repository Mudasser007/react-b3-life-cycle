export default function Avatar(props) {
  const { person, size} = props;
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${props.person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
