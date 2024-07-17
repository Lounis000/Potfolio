// src/context/FeedbackContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des feedbacks:', error);
      }
    };
    fetchFeedbacks();
  }, []);

  const addFeedback = async (newFeedback) => {
    try {
      console.log('Ajout du feedback:', newFeedback);  // Ajout de log
      const response = await axios.post('http://localhost:5000/api/feedbacks', newFeedback);
      setFeedbacks([...feedbacks, response.data]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du feedback:', error);
    }
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
  