import { useState, useEffect } from 'react';
import firebase from '../firebase';

const SORT_OPRIONS = {
    'CREATED_ASC': {column: 'created', direction: 'asc'},
    'CREATED_DESC': {column: 'created', direction: 'desc'},
    'PRIORITY_ASC': {column: 'priority', direction: 'asc'},
    'PRIORITY_DESC': {column: 'priority', direction: 'desc'}
}

function useTickets(sortBy = 'CREATED_ASC') {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection('tickets')
        .orderBy(SORT_OPRIONS[sortBy].column, SORT_OPRIONS[sortBy].direction)
        .onSnapshot((snapshot) => {
          const newTickets = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
  
          setTickets(newTickets);
          setLoading(false);
        })
  
        return () => unsubscribe();
    }, [sortBy]);
  
    return [tickets, loading];
  }

  export default useTickets;