interface NoteItemProps{
    title:string,
    description:String,
    id:number,
    remove:(key:number)=>void
}

const NoteItem = (props:NoteItemProps):JSX.Element => {
  return (
    <div className="note_item" key={props.id}>
    <div style={{ width: "90%" }}>
      <h4>{props.title}</h4>
      <div id="spacer_width"></div>
      <p>{props.description}</p>
    </div>
    <button
    
      type="button"
      onClick={() => props.remove(props.id)}
    >
      X
    </button>
    <div id="spacer_width"></div>
  </div>
  )
}

export default NoteItem