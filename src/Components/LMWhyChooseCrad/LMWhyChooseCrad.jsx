import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './LMWhyChooseCrad.css';

const STORAGE_KEY = "lm_why_choose";

const LMWhyChooseCrad = () => {
    const [rows, setRows] = useState([]);
    const [form, setForm] = useState({
        id: null,
        image: "",
        title: "",
        paragraph: "",
    });

    const formRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
        try {
            const parsed = JSON.parse(raw);
            const withIds = parsed.map((item, i) => ({
            ...item,
            id: item.id || Date.now() + i,
            }));
            setRows(withIds);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(withIds));
        } 
        catch {
            setRows([]);
        }
        }
    }, []);

    const persist = (next) => {
        setRows(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.title.trim() || !form.paragraph.trim()) return;

        if (form.id) {
        const updated = rows.map((r) => (r.id === form.id ? form : r));
        persist(updated);
        } 
        else {
        const newRow = { ...form, id: Date.now() };
        persist([...rows, newRow]);
        }

        setForm({ id: null, image: "", title: "", paragraph: "" });
        navigate("/");
    };

    const onEdit = (row) => {
        setForm(row);
        setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        formRef.current?.querySelector("input")?.focus();
        }, 100);
    };

    const onDelete = (id) => {
        const filtered = rows.filter((r) => r.id !== id);
        persist(filtered);
        if (form.id === id) {
        setForm({ id: null, image: "", title: "", paragraph: "" });
        }
        navigate("/");
    };

    const onCancel = () => {
        setForm({ id: null, image: "", title: "", paragraph: "" });
    };

    return (
        <div >
            {/* الفورم */}
            <form ref={formRef} className="lm-form" onSubmit={onSubmit}>
                <label>
                Image File
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                        setForm((f) => ({ ...f, image: reader.result }));
                        };
                        reader.readAsDataURL(file);
                    }
                    }}
                    style={{backgroundColor: "var(--IDentity_color)", color: "var(--ColorBlack)" }}
                />
                </label>

                <label>
                Title
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    placeholder="Title"
                    required
                />
                </label>

                <label>
                Paragraph
                <textarea
                    name="paragraph"
                    value={form.paragraph}
                    onChange={onChange}
                    placeholder="Paragraph"
                    required
                />
                </label>

                <div style={{ display: "flex", gap: "10px" }}>
                <button type="submit">{form.id ? "Update" : "Add"}</button>
                {form.id && (
                    <button type="button" onClick={onCancel} style={{backgroundColor: "var(--Colorred)", color: "var(--MainFontColor)" }}>
                    Cancel
                    </button>
                )}
                </div>
            </form>

            {/* الجدول */}
            <div className="lm-table-wrap">
                <table className="lm-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Paragraph</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r) => (
                    <tr key={r.id}>
                        <td>{r.image && <img src={r.image} alt={r.title} width={50} />}</td>
                        <td>{r.title}</td>
                        <td>{r.paragraph}</td>
                        <td className="lm-actions">
                        <button type="button" onClick={() => onEdit(r)}>
                            Edit
                        </button>
                        <button type="button" onClick={() => onDelete(r.id)} style={{backgroundColor: "var(--Colorred)", color: "var(--MainFontColor)" }}>
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                    {rows.length === 0 && (
                    <tr>
                        <td colSpan="4" style={{ opacity: 0.7 }}>
                        No items found.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default LMWhyChooseCrad;
