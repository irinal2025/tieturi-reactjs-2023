import ListGroup from 'react-bootstrap/ListGroup';

function ForecastListItem({time, weather, temperature}) {

  return (
    <ListGroup horizontal className="my-2">
        <ListGroup.Item>{time}</ListGroup.Item>
        <ListGroup.Item>{weather}</ListGroup.Item>
        <ListGroup.Item>{temperature}  °C</ListGroup.Item>
    </ListGroup>
  );
}


export default ForecastListItem;