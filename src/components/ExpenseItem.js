import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span>
            </div>
            <TiDelete size='1.5em'></TiDelete>
        </li>
    );
}

export default ExpenseItem;