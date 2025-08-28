import { useEffect, useState } from "react"
import MmContactUsForm from "../MmContactUsForm/MmContactUsForm"
import MmContactUsTable from "../MmContactUsTable/MmContactUsTable"
import "./MmContactUsDashboard.css"

const MmContactUsDashboard = () => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem("contactUsEntries");
    return stored ? JSON.parse(stored) : []
  });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("contactUsEntries", JSON.stringify(items));
  }, [items]);

  const handleSave = (item, isEdit) => {
    if (isEdit) {
      setItems(items.map(it => (it.id === item.id ? item : it)));
    } else {
      setItems([...items, item]);
    }
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    setItems(items.filter(it => it.id !== id));
  };

  return (
    <div className="mmContactUsDashboard">
      <h2>Contact Us Dashboard</h2>
      <MmContactUsTable items={items} onEdit={handleEdit} onDelete={handleDelete} />
      <MmContactUsForm editingItem={editingItem} onSave={handleSave} />
    </div>
  );
};

export default MmContactUsDashboard;
