import React, { useState } from 'react';
import './Shares.css';

const Shares = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Daire 1', share: 50, percentage: 25 },
    { id: 2, name: 'Daire 2', share: 50, percentage: 25 },
    { id: 3, name: 'Daire 3', share: 100, percentage: 50 },
  ]);

  return (
    <div className="shares">
      <h2>Kat İrtifakı Hisseleri</h2>
      <table>
        <thead>
          <tr>
            <th>Daire</th>
            <th>Hisse</th>
            <th>Yüzde</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.share}</td>
              <td>{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shares;
