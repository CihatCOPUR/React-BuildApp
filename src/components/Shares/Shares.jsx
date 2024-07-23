import React, { useState } from 'react';
import './Shares.css';

const Shares = () => {
  const [data, setData] = useState([
    { id: 1, number: 'A1', type: 'Daire', share: 50, percentage: 25, floor: 3, grossArea: '100m²', netArea: '90m²' },
    { id: 2, number: 'A2', type: 'Daire', share: 50, percentage: 25, floor: 3, grossArea: '120m²', netArea: '100m²' },
    { id: 3, number: 'B1', type: 'Dükkan', share: 100, percentage: 50, floor: 1, grossArea: '200m²', netArea: '180m²' },
    { id: 4, number: 'C1', type: 'Ofis', share: 75, percentage: 35, floor: 2, grossArea: '150m²', netArea: '130m²' },
    { id: 5, number: 'C2', type: 'Daire', share: 25, percentage: 15, floor: 4, grossArea: '80m²', netArea: '70m²' },
    { id: 6, number: 'D1', type: 'Dükkan', share: 75, percentage: 30, floor: 1, grossArea: '180m²', netArea: '160m²' },
    { id: 7, number: 'E1', type: 'Ofis', share: 100, percentage: 40, floor: 5, grossArea: '220m²', netArea: '200m²' },
    { id: 8, number: 'F1', type: 'Daire', share: 40, percentage: 20, floor: 2, grossArea: '90m²', netArea: '80m²' },
    { id: 9, number: 'G1', type: 'Ofis', share: 60, percentage: 25, floor: 6, grossArea: '160m²', netArea: '140m²' },
    { id: 10, number: 'H1', type: 'Daire', share: 55, percentage: 28, floor: 4, grossArea: '110m²', netArea: '100m²' },
  ]);

  return (
    <div className="shares">
      <h2>Kat İrtifakı Hisseleri</h2>
      <table>
        <thead>
          <tr>
            <th>Bağımsız Bölüm Numarası</th>
            <th>Tür</th>
            <th>Arsa Payı</th>
            <th>Kat Numarası</th>
            <th>Brüt Alan</th>
            <th>Net Alan</th>
            <th>Yüzde</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.number}</td>
              <td>{item.type}</td>
              <td>{item.share}</td>
              <td>{item.floor}</td>
              <td>{item.grossArea}</td>
              <td>{item.netArea}</td>
              <td>{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shares;
