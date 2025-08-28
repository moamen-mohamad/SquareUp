import { useState } from 'react';
import MmWorkForm from '../MmWorkForm/MmWorkForm';
import MmWorkTable from '../MmWorkTable/MmWorkTable';
import './MmWorkDashboard.css';

const initialProjects = [
    {
        id: 1,
        title: "E-Commerce Platform for Fashion Hub",
        image: "/SquareUp/assets/images/project-1.jpg",
        webName: "Chic Boutique",
        urlWeb: "https://www.focal-x.com/",
        description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
    {
        id: 2,
        title: "Mobile App for Food Delivery Service",
        image: "/SquareUp/assets/images/project-2.jpg",
        webName: "HungryBites",
        urlWeb: "https://www.focal-x.com/",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
        id: 3,
        title: "Booking and Reservation System for Event Management",
        image: "/SquareUp/assets/images/project-3.jpg",
        webName: "EventMasters",
        urlWeb: "https://www.focal-x.com/",
        description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
    },
    
    {
        id: 4,
        title: "Custom Software for Workflow Automation",
        image: "/SquareUp/assets/images/project-4.jpg",
        webName: "ProTech Solutions",
        urlWeb: "https://www.focal-x.com/",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
        id: 5,
        title: "Web Portal for Real Estate Listings",
        image: "/SquareUp/assets/images/project-5.jpg",
        webName: "Dream Homes Realty",
        urlWeb: "https://www.focal-x.com/",
        description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
    },
    {
        id: 6,
        title: "Mobile App for Fitness Tracking",
        image: "/SquareUp/assets/images/project-6.jpg",
        webName: "FitLife Tracker",
        urlWeb: "https://www.focal-x.com/",
        description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
    },
    {
        id: 7,
        title: "Custom Software for Supply Chain Management",
        image: "/SquareUp/assets/images/project-7.jpg",
        webName: "Global Logistics Solutions",
        urlWeb: "https://www.focal-x.com/",
        description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
    },
    {
        id: 8,
        title: "Educational Platform for Online Learning",
        image: "/SquareUp/assets/images/project-8.jpg",
        webName: "EduConnect",
        urlWeb: "https://www.focal-x.com/",
        description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
    },
    {
        id: 9,
        title: "Mobile App for Travel Planning",
        image: "/SquareUp/assets/images/project-9.jpg",
        webName: "WanderWise",
        urlWeb: "https://www.focal-x.com/",
        description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
    },
    {
        id: 10,
        title: "Web Application for Customer Relationship Management",
        image: "/SquareUp/assets/images/project-10.jpg",
        webName: "ConnectCRM",
        urlWeb: "https://www.focal-x.com/",
        description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
    },
];
const MmWorkDashboard = () => {
    const [items, setItems] = useState(() => {
        const stored = localStorage.getItem("items");
        if (stored) {
            return JSON.parse(stored);
        } else {
            localStorage.setItem("items", JSON.stringify(initialProjects));
            return initialProjects;
        }
    });

    const [editItem, setEditItem] = useState(null);

    const handleEdit = (item) => setEditItem(item);

    const handleDelete = (id) => {
        const newItems = items.filter((i) => i.id !== id);
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };

    return (
        <div className='work-dashboard'>
            <h2>Works Dashboard</h2>
            <MmWorkTable items={items} onEdit={handleEdit} onDelete={handleDelete} />
            <MmWorkForm
                items={items}
                setItems={setItems}
                editItem={editItem}
                setEditItem={setEditItem}
            />
        </div>
    );
};

export default MmWorkDashboard;
