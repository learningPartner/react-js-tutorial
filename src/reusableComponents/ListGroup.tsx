interface ListGroupModel {
  array: string[];
  onSelectItem: (message: string) => void;
}

function ListGroup({ array, onSelectItem }: ListGroupModel) {
  const sendDataToParent = (item: string) => {
    debugger;
    onSelectItem(item);
  };
  return (
    <ul className="list-group">
      {array.map((item: string) => {
        return (
          <li
            onClick={() => sendDataToParent(item)}
            className="list-group-item"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default ListGroup;
