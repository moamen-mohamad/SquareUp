import { useState } from "react";
import "./HSH_FAQCRUD.css";

function HSH_FAQCRUD({ faqData, setFaqData }) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleAddOrUpdate = () => {
        if (!question || !answer) return;

        if (editIndex !== null) {
            const updated = [...faqData];
            updated[editIndex] = { question, answer };
            setFaqData(updated);
            setEditIndex(null);
        } else {
            setFaqData([...faqData, { question, answer }]);
        }

        setQuestion("");
        setAnswer("");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setQuestion(faqData[index].question);
        setAnswer(faqData[index].answer);
    };

    const handleDelete = (index) => {
        const updated = faqData.filter((_, i) => i !== index);
        setFaqData(updated);
    };

    return (
        <div className="faq-crud-container">
            <h2>FAQ Management</h2>
            <div className="faq-form">
                <input
                    type="text"
                    placeholder="Enter question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <textarea
                    placeholder="Enter answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button onClick={handleAddOrUpdate}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>

            <table className="faq-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {faqData.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HSH_FAQCRUD;