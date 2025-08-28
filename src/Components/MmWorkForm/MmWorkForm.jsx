import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MmWorkForm.css';

const MmWorkForm = ({ items, setItems, editItem, setEditItem }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [webName, setWebName] = useState("");
    const [urlWeb, setUrlWeb] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            setImage(editItem.image);
            setWebName(editItem.webName);
            setUrlWeb(editItem.urlWeb);
            setDescription(editItem.description);
        }
    }, [editItem]);

    const handleImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (editItem) {
            const updatedItems = items.map((item) =>
                item.id === editItem.id
                    ? { ...item, title, image, webName, urlWeb, description }
                    : item
            );
            setItems(updatedItems);
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setEditItem(null);
        } else {
            const newItem = {
                id: Date.now(),
                title,
                image,
                webName,
                urlWeb,
                description,
            };
            const newItems = [...items, newItem];
            setItems(newItems);
            localStorage.setItem("items", JSON.stringify(newItems));
            navigate("/Work");
        }

        setTitle("");
        setImage(null);
        setWebName("");
        setUrlWeb("");
        setDescription("");
    };

    return (
        <form className="work-form" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <label>Image</label>
            <input type="file" onChange={handleImage} />
            {image && <img src={image} alt="preview" width="100" />}

            <label>Web Name</label>
            <input type="text" value={webName} onChange={(e) => setWebName(e.target.value)} required />

            <label>URL Web</label>
            <input type="url" value={urlWeb} onChange={(e) => setUrlWeb(e.target.value)} required />

            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

            <input type="submit" value={editItem ? "Save Changes" : "Add"} />
        </form>
    );
};

export default MmWorkForm;