import { Link } from 'react-router-dom';

function TrainerList({ data }) {
  return (
    <div>
      <h3>Trainers List</h3>
      <ul>
        {data.map(trainer => (
          <li key={trainer.trainerId}>
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerList;
