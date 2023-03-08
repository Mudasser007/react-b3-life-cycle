import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
import AvatarProfile from "./AvatarProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Amazing scientists</h1>
        <AvatarProfile
          size={100}
          person={{ name: "Mudasser", imageId: "1bX5QH6" }}
        />
        <AvatarProfile
          size={300}
          person={{ name: "Bond", imageId: "YfeOqp2" }}
        />
        <AvatarProfile
          size={150}
          person={{ name: "Saleem", imageId: "YfeOqp2" }}
        />
      </header>
    </div>
  );
}

export default App;
