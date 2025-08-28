import './MmWorkTable.css';

const MmWorkTable = ({ items, onEdit, onDelete }) => {
    return (
        <table className='work-table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Web Name</th>
                    <th>URL Web</th>
                    <th>Description</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody>
                {items.length === 0 ? (
                    <tr>
                        <td colSpan="6">There is no data</td>
                    </tr>
                ) : (
                    items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td><img src={item.image} alt={item.title} width="100" /></td>
                            <td>{item.webName}</td>
                            <td>{item.urlWeb}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button className='delete' onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default MmWorkTable;
