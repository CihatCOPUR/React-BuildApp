import React, { useState } from 'react';
import './ProjectCreate.css';

const ProjectCreation = () => {
  const [projectData, setProjectData] = useState({
    projectName: '',
    projectAddress: '',
    startDate: '',
    endDate: '',
    description: '',
    units: [],
  });

  const [unit, setUnit] = useState({
    id: '',
    type: '',
    area: '',
    floor: '',
    grossArea: '',
    netArea: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUnitChange = (e) => {
    const { name, value } = e.target;
    setUnit((prevUnit) => ({
      ...prevUnit,
      [name]: value,
    }));
  };

  const addUnit = () => {
    setProjectData((prevData) => ({
      ...prevData,
      units: [...prevData.units, unit],
    }));
    setUnit({
      id: '',
      type: '',
      area: '',
      floor: '',
      grossArea: '',
      netArea: '',
    });
  };

  const calculateLandShare = () => {
    const totalGrossArea = projectData.units.reduce((total, unit) => total + parseFloat(unit.grossArea || 0), 0);
    return projectData.units.map(unit => ({
      ...unit,
      landShare: (parseFloat(unit.grossArea) / totalGrossArea) * parseFloat(projectData.totalLandArea || 0),
    }));
  };

  return (
    <div className="project-creation">
      <h2>Proje Oluştur</h2>
      <form>
        <input
          type="text"
          name="projectName"
          placeholder="Proje Adı"
          value={projectData.projectName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="projectAddress"
          placeholder="Proje Adresi"
          value={projectData.projectAddress}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Proje Başlangıç Tarihi"
          value={projectData.startDate}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="Proje Bitiş Tarihi"
          value={projectData.endDate}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Proje Açıklaması"
          value={projectData.description}
          onChange={handleInputChange}
        />
        <div className="unit-form">
          <h3>Kat İrtifakı Bilgileri</h3>
          <input
            type="text"
            name="id"
            placeholder="Bağımsız Bölüm Numarası"
            value={unit.id}
            onChange={handleUnitChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Bağımsız Bölüm Türü"
            value={unit.type}
            onChange={handleUnitChange}
          />
          <input
            type="text"
            name="floor"
            placeholder="Kat Numarası"
            value={unit.floor}
            onChange={handleUnitChange}
          />
          <input
            type="number"
            name="grossArea"
            placeholder="Brüt Alan (m²)"
            value={unit.grossArea}
            onChange={handleUnitChange}
          />
          <input
            type="number"
            name="netArea"
            placeholder="Net Alan (m²)"
            value={unit.netArea}
            onChange={handleUnitChange}
          />
          <button type="button" onClick={addUnit}>Bölüm Ekle</button>
        </div>
        <div className="summary">
          <h3>Özet</h3>
          <p>Toplam Brüt Alan: {projectData.units.reduce((total, unit) => total + parseFloat(unit.grossArea || 0), 0)} m²</p>
          <p>Toplam Net Alan: {projectData.units.reduce((total, unit) => total + parseFloat(unit.netArea || 0), 0)} m²</p>
        </div>
      </form>
    </div>
  );
};

export default ProjectCreation;
