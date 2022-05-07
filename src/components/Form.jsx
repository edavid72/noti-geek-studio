import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import useNews from '../hooks/useNews';

const Form = () => {
  const CATEGORIES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
  ];

  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel color="secondary">Categories</InputLabel>
        <Select
          label="Category"
          onChange={handleChangeCategory}
          value={category}
          sx={{ borderRadius: '8px', textAlign: 'center', fontSize: '1.2rem' }}
        >
          {CATEGORIES.map((category) => {
            return (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
};

export default Form;
