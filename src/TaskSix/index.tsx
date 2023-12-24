import React, { useState } from 'react';
import './index.css';
import Container from '../Components/Container';
import Questions from '../Questions';

interface Tea {
  id: number;
  title: string;
  price: number;
  description: string;
}

const teaList: Tea[] = [
  { id: 1, title: 'Green Tea', price: 5, description: 'green tea' },
  { id: 2, title: 'Black Tea', price: 7, description: 'black tea' },
  { id: 3, title: 'Herbal Tea', price: 6, description: 'herbal tea' },
  { id: 4, title: 'Masala Tea', price: 5, description: 'masala tea' },
  { id: 5, title: 'Peach Tea', price: 7, description: 'peach tea' },
  { id: 6, title: 'Lemon Tea', price: 6, description: 'lemon tea' },
  
];

const TeaMenuDisplay: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10);
  const [sortedTea, setSortedTea] = useState<Tea[]>(teaList);

  const MaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const MinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  const filterTea = () => {
    const filtered = teaList.filter(tea => tea.price >= minPrice && tea.price <= maxPrice);
    setSortedTea(filtered);
  };

  const sortTea = (order: 'asc' | 'desc') => {
    const sorted = [...sortedTea].sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedTea(sorted);
  };
  const Title = "6. Task: Array Manipulation";
  const Question = ["Build an application that lists all of the varieties of tea available in \"Your Friendly Neighborhood Tea Shop\". The customers should be able to filter the different types of tea within their price range."];
  const Requirements = ["Customers should be able to see all of the varieties of tea available.",
  "Customers should be able to see their title, price, description.",
  "Customers should be able to filter them according to the price. \n a. Customers should be able to select the maximum price.\n b. Customers should be able to select the minimum price.\n c. Customers should be able to see the no. of varieties available after filtering.",
  "Customers should be able to sort them according to the price \na. Customers should be able to sort from minimum to maximum.\nb. Customers should be able to sort from maximum to minimum."];

  return (
    < Container>
    <Questions
      title={Title}
      question={Question}
      requirements={Requirements}
    />
    <div>
      <h3>Your Friendly Neighborhood Tea Shop</h3>
      <div className='wrap'>
        <div className='label'>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={MaxPriceChange} />
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={MinPriceChange} />
        </label>
        <button onClick={filterTea}>Filter</button>
        </div>
        <div>
        <h4>Sort by Price</h4>
        <button onClick={() => sortTea('asc')}>Low to High</button>
        <button onClick={() => sortTea('desc')}>High to Low</button>
      </div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sortedTea.map(tea => (
            <tr key={tea.id}>
              <td>{tea.title}</td>
              <td>${tea.price}</td>
              <td>{tea.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
  );
};

export default TeaMenuDisplay;



 
