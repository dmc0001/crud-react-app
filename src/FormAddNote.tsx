import React from "react";

interface FormAddNoteProps {
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handle: () => void;
}

const FormAddNote = (props: FormAddNoteProps): JSX.Element => {
//const FormAddNote: React.FC<FormAddNoteProps> = ({ title, description, setTitle, setDescription, handle }) => {
  return (
    <div className="add_note_form">
      <input
        type="text"
        id="et_title_form"
        placeholder="Title"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <input
        type="text"
        id="et_description_form"
        placeholder="Description"
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
      />
      <button id="btn_add_note_form" type="button" onClick={props.handle}>
        Add note
      </button>
    </div>
  );
};

export default FormAddNote;
