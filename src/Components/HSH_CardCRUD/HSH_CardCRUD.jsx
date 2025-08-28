import { useState } from "react";
import "./HSH_CardCRUD.css";
const defaultCards = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.", 
        image: "/SquareUp/assets/images/John.jpg",
        name: "John Smith",
        job: "CEO of Chic Boutique",
        url: "https://focal-x.com/",
    },
    {
        id: 2,
        title: "Working with SquareUp was a breeze.",
        description:
            "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        image: "/SquareUp/assets/images/Sarah.png",
        name: "Sarah Johnson",
        job: "Founder of HungryBites.",
        url: "https://focal-x.com/",
    },
    {
        id: 3,
        title:
            "SquareUp developed a comprehensive booking and reservation system for our event management company",
        description:
            "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        image: "/SquareUp/assets/images/Mark.png",
        name: "Mark Thompson",
        job: "CEO of EventMasters",
        url: "https://focal-x.com/",
    },
    {
        id: 4,
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description:
            "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        image: "/SquareUp/assets/images/Laura.png",
        name: "Laura Adams",
        job: "COO of ProTech Solutions.",
        url: "https://focal-x.com/",
    },
    {
        id: 5,
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description:
            "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        image: "/SquareUp/assets/images/Michael.png",
        name: "Michael Anderson",
        job: "Founder of Dream Homes Realty.",
        url: "https://focal-x.com/",
    },
    {
        id: 6,
        title:
            "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        description:
            "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        image: "/SquareUp/assets/images/Emily.png",
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
        url: "https://focal-x.com/",
    },
];

const HSH_CardCRUD = () => {
    const [cards, setCards] = useState(() => {
        const stored = localStorage.getItem("sliderCards");
        return stored ? JSON.parse(stored) : defaultCards;
    });

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        name: "",
        job: "",
        url: "",
        image: null,
    });

    const [editIndex, setEditIndex] = useState(null);


    const saveToLocalStorage = (arr) => {
        localStorage.setItem("sliderCards", JSON.stringify(arr));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () =>
            setFormData((prev) => ({ ...prev, image: reader.result }));
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.description) return;

        const newCard = {
            id: editIndex !== null ? cards[editIndex].id : Date.now(),
            ...formData,
        };

        const updatedCards =
            editIndex !== null
                ? cards.map((c, i) => (i === editIndex ? newCard : c))
                : [...cards, newCard];

        setCards(updatedCards);
        saveToLocalStorage(updatedCards);

        setEditIndex(null);
        setFormData({
            title: "",
            description: "",
            name: "",
            job: "",
            url: "",
            image: null,
        });
    };

    const handleEdit = (i) => {
        setFormData(cards[i]);
        setEditIndex(i);
    };

    const handleDelete = (i) => {
        const updated = cards.filter((_, idx) => idx !== i);
        setCards(updated);
        saveToLocalStorage(updated);
    };

    return (
        <div className="crud-container">
            <h2>Manage Slider Cards</h2>
            <div className="crud-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="job"
                    placeholder="Job"
                    value={formData.job}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="Website URL"
                    value={formData.url}
                    onChange={handleChange}
                />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={handleSubmit}>
                    {editIndex !== null ? "Update Card" : "Add Card"}
                </button>
            </div>

            <table className="crud-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.length > 0 ? (
                        cards.map((card, i) => (
                            <tr key={card.id}>
                                <td>
                                    {card.image && (
                                        <img
                                            src={card.image}
                                            alt={card.name}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    )}
                                </td>
                                <td>{card.title}</td>
                                <td>{card.description}</td>
                                <td>{card.name}</td>
                                <td>{card.job}</td>
                                <td>{card.url}</td>
                                <td>
                                    <button onClick={() => handleEdit(i)}>Edit</button>
                                    <button onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: "center" }}>
                                No cards found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HSH_CardCRUD;