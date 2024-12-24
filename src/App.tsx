// App.tsx

import "./App.css";
import { useState } from "react";
import FormAddNote from "./FormAddNote";
import NoteItem from "./NoteItem";


// Define types for the note structure
interface Note {
  key: number;
  title: string;
  description: string;
}

function App() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>(data); 
  const [count, setCount] = useState<number>(4);

  function remove(id: number): void {
    console.log(id);
    setNotes(notes.filter((e) => e.key !== id));
  }

  function handle(): void {
    if (!title || !description) {
      window.alert("Incomplete input");
      return;
    }
    setNotes([...notes, { key: count, title: title, description: description }]);
    setCount(count + 1);
    setTitle("");
    setDescription("");
    console.log(notes);
  }

  return (
    <div className="App">
      <div className="card">
        <div className="head">
          <h1>React notes</h1>
        </div>
        <div className="notes">
          {
          notes.map((e) => (
            <NoteItem
            id={e.key} 
            title={e.title}
            description={e.description}
            remove={remove} 
          />
          )
          
          )}
          <FormAddNote
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            handle={handle}
          />
        </div>
      </div>
    </div>
  );
}

const data: Note[] = [
  {
    key: 0,
    title: "Html",
    description: "HyperText MarkUp Language",
  },
  { key: 1, title: "CSS", description: "StyleSheet" },
  {
    key: 2,
    title: "JavaScript",
    description: "Scripting language for web",
  },
  {
    key: 3,
    title: "React",
    description: "JavaScript framework",
  },
];

export default App;
