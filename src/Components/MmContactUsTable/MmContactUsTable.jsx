import './MmContactUsTable.css'

const MmContactUsTable = ({ items, onEdit, onDelete }) => {
    if (items.length === 0) {
        return <p className='note-mmContactUsTable'>There is no data</p>
    }

    return (
        <table className='contact-table'>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Reasons</th>
                    <th>Message</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.resons?.join(", ")}</td>
                        <td>{item.yourMessage}</td>
                        <td>
                            <button onClick={() => onEdit(item)}>Edit</button>
                            <button className="delete" onClick={() => onDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MmContactUsTable
