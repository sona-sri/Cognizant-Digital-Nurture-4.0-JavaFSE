import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === parseInt(id));

  return (
    <div>
      <h3>Trainers Details</h3>
      {trainer ? (
        <>
          <h4>{trainer.name} ({trainer.technology})</h4>
          <p>{trainer.email}</p>
          <p>{trainer.phone}</p>
          <ul>
            {trainer.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Trainer not found.</p>
      )}
    </div>
  );
}

export default TrainerDetail;
