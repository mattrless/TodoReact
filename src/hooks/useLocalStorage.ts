import { useState, useEffect } from 'react';
import type { Todo } from '../types/Todo'

export function useLocalStorage(itemName: string, initialValue: Todo[]) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(true);
        console.error(e);
      }
    }, 1000);

  }, [initialValue, itemName]);


  const saveItem = (newItem: Todo[]) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}