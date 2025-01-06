import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './buttondropdown.css'; // Import CSS for custom styling

function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle 
        split 
        variant="success" 
        id="dropdown-split-basic" 
        className="vertical-dots-toggle"
      >
        <span className="vertical-dots">⋮</span>
      </Dropdown.Toggle>
  
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Clone</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3">InActive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;
