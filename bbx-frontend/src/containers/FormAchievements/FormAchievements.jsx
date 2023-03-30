import { useState } from 'react';

const PostForm = () => {
  const [formInputs, setFormInputs] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (
      formData.get('year') === '' ||
      formData.get('placement') === '' ||
      formData.get('title') === '' ||
      formData.get('battle_type') === 'Select a battle type'
    ) {
      alert('Please fill in all the required fields.');
      return;
    }

    const postData = {
      year: formData.get('year'),
      placement: formData.get('placement'),
      title: formData.get('title'),
      battle_type: formData.get('battle_type'),
    };

    setFormInputs([...formInputs, postData]);

    event.target.reset();
  };

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInputs),
      });

      const data = await response.json();
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setFormInputs([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" required />

        <label htmlFor="placement">Placement:</label>
        <input type="text" id="placement" name="placement" required />

        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="battle_type">Battle Type:</label>
        <select id="battle_type" name="battle_type" required>
          <option value="">Select a battle type</option>
          <option value="Solo">Solo</option>
          <option value="Tag Team">Tag Team</option>
          <option value="Loop Station">Loop Station</option>
          <option value="7 To Smoke">7 To Smoke</option>
        </select>

        <button type="submit">Add Instance</button>
      </form>

      {formInputs.length > 0 && (
        <div>
          <h2>Saved Instances:</h2>
          <ul>
            {formInputs.map((input, index) => (
              <li key={index}>
                <p>Year: {input.year}</p>
                <p>Placement: {input.placement}</p>
                <p>Title: {input.title}</p>
                <p>Battle Type: {input.battle_type}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {formInputs.length > 0 && (
        <button onClick={handleFormSubmit}>Submit Instances</button>
      )}
    </div>
  );
};