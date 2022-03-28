import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');

  return (
    <div className="create">
      <form>
        <input 
          type="text" 
          placeholder ="Input TODOS"
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add Blog</button>
        <p>{title}</p>
      </form>
    </div>
  );
}
 
export default Create;