import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, comment, rating });
  };

  return (
    <Col lg={12} className="d-flex justify-content-center">
      <div className="feedback-section">
        <h3>Laissez une note & Donnez votre avis</h3>
        <form onSubmit={handleSubmit} className="feedback-email-bx">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit" className="feedback-submit-button">Soumettre</button>
        </form>
      </div>
    </Col>
  );
};
