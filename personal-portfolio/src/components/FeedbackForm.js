// src/components/FeedbackForm.js
import { useState, useContext } from "react";
import { Col, Alert } from "react-bootstrap";
import { FeedbackContext } from '../context/FeedbackContext';

export const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { feedbacks, setFeedbacks } = useContext(FeedbackContext);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Le nom est obligatoire.";
    if (rating === 0) newErrors.rating = "La note est obligatoire.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const newFeedback = { id: feedbacks.length + 1, name, comment, rating };
      setFeedbacks([...feedbacks, newFeedback]);
      setSubmitted(true);
      setName('');
      setComment('');
      setRating(0);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Col lg={12} className="d-flex justify-content-center">
      <div className="feedback-section">
        <h3>Laissez une note & Donnez votre avis</h3>
        {submitted && <Alert variant="success">Merci pour votre avis!</Alert>}
        <form onSubmit={handleSubmit} className="feedback-email-bx">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <Alert variant="danger">{errors.name}</Alert>}
          <textarea
            rows="4"
            placeholder="Votre commentaire"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? "on" : "off"}
                  onClick={() => setRating(index)}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
          {errors.rating && <Alert variant="danger">{errors.rating}</Alert>}
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </Col>
  );
};
