import { useState } from "react";
import "./RDAboutPageCrud.css";

const RDAboutPageCrud = ({ cards = [], setCards }) => {
    const [form, setForm] = useState({ id: null, number: "", title: "", description: "" });
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.number || !form.title || !form.description) return;

        let updatedCards;
        if (isEdit) {
            updatedCards = cards.map((c) => (c.id === form.id ? form : c));
            setIsEdit(false);
        } else {
            updatedCards = [...cards, { ...form, id: Date.now() }];
        }

        setCards(updatedCards);
        setForm({ id: null, number: "", title: "", description: "" });
    };

    const handleEdit = (card) => {
        setForm(card);
        setIsEdit(true);
    };

    const handleDelete = (id) => {
        const updatedCards = cards.filter((c) => c.id !== id);
        setCards(updatedCards);
    };

    return (
        <div className="lm_whitespacing_x">
            <form className="RD_Form" onSubmit={handleSubmit}>
                <input
                    placeholder="Number"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                />
                <input
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />
                <button type="submit" className="RD_Btn">
                    {isEdit ? "Save" : "Add"}
                </button>
            </form>

            <table className="RD_Table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 ? (
                        cards.map((card) => (
                            <tr key={card.id}>
                                <td>{card.number}</td>
                                <td>{card.title}</td>
                                <td>{card.description}</td>
                                <td>
                                    <button onClick={() => handleEdit(card)} className="RD_Btn">
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(card.id)}
                                        className="RD_RedBtn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} style={{ textAlign: "center" }}>
                                There is no Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default RDAboutPageCrud;