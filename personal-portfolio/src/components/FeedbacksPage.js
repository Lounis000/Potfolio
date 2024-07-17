// src/components/FeedbacksPage.js
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FeedbackContext } from '../context/FeedbackContext';

export const FeedbacksPage = () => {
  const { feedbacks } = useContext(FeedbackContext);

  return (
    <section className="feedbacks-page">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Feedbacks</h2>
            <p>Voici tous les feedbacks laissés par nos utilisateurs :</p>
            <div className="feedbacks-container">
              {feedbacks.map((feedback, index) => (
                <div key={index} className="feedback-item">
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
