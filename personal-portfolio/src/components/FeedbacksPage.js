// FeedbacksPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const feedbacks = [
  { id: 1, name: "John Doe", comment: "Excellent travail !", rating: 5 },
  { id: 2, name: "Jane Smith", comment: "Très bon développeur.", rating: 4 },
  // Ajoutez d'autres feedbacks ici
];

export const FeedbacksPage = () => {
  return (
    <section className="feedbacks-page">
      <Container>
        <Row>
          <Col>
            <h2>Feedbacks</h2>
            <p>Voici tous les feedbacks laissés par nos utilisateurs :</p>
            <div className="feedbacks-container">
              {feedbacks.map(feedback => (
                <div key={feedback.id} className="feedback-item">
                  <strong>{feedback.name}</strong>
                  <p>{feedback.comment}</p>
                  <div className="star-rating-display">
                    {[...Array(5)].map((star, i) => (
                      <span key={i} className={`star ${i < feedback.rating ? 'on' : 'off'}`}>&#9733;</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
