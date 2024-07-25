import React, { useState } from 'react';
import './ProjectCreate.css';

const ProjectCreation = () => {
  const [oldProjectData, setOldProjectData] = useState({
    totalArea: '',
    blocks: [],
  });

  const [newProjectData, setNewProjectData] = useState({
    totalArea: '',
    blocks: [],
  });

  const [block, setBlock] = useState({
    id: '',
    floors: '',
    apartments: [],
  });

  const [apartment, setApartment] = useState({
    id: '',
    blockId: '',
    owner: '',
    area: '',
    tc: '',
    birthDate: '',
    parentName: '',
  });

  const handleOldProjectChange = (e) => {
    const { name, value } = e.target;
    setOldProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewProjectChange = (e) => {
    const { name, value } = e.target;
    setNewProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlockChange = (e) => {
    const { name, value } = e.target;
    setBlock((prevBlock) => ({
      ...prevBlock,
      [name]: value,
    }));
  };

  const handleApartmentChange = (e) => {
    const { name, value } = e.target;
    setApartment((prevApartment) => ({
      ...prevApartment,
      [name]: value,
    }));
  };

  const addApartment = (isOldProject) => {
    const selectedProjectData = isOldProject ? oldProjectData : newProjectData;
    const updatedBlocks = selectedProjectData.blocks.map(block => {
      if (block.id === apartment.blockId) {
        return {
          ...block,
          apartments: [...block.apartments, apartment],
        };
      }
      return block;
    });

    if (isOldProject) {
      setOldProjectData((prevData) => ({
        ...prevData,
        blocks: updatedBlocks,
      }));
    } else {
      setNewProjectData((prevData) => ({
        ...prevData,
        blocks: updatedBlocks,
      }));
    }

    setApartment({
      id: '',
      blockId: '',
      owner: '',
      area: '',
      tc: '',
      birthDate: '',
      parentName: '',
    });
  };

  const addBlock = (isOldProject) => {
    if (isOldProject) {
      setOldProjectData((prevData) => ({
        ...prevData,
        blocks: [...prevData.blocks, block],
      }));
    } else {
      setNewProjectData((prevData) => ({
        ...prevData,
        blocks: [...prevData.blocks, block],
      }));
    }
    setBlock({
      id: '',
      floors: '',
      apartments: [],
    });
  };

  const calculateLandShare = (projectData) => {
    const totalArea = parseFloat(projectData.totalArea || 0);
    return projectData.blocks.map(block => {
      const totalBlockArea = block.apartments.reduce((total, apartment) => total + parseFloat(apartment.area || 0), 0);
      return {
        ...block,
        apartments: block.apartments.map(apartment => ({
          ...apartment,
          landShare: (parseFloat(apartment.area) / totalBlockArea) * totalArea,
        })),
      };
    });
  };

  const oldProjectWithShares = calculateLandShare(oldProjectData);
  const newProjectWithShares = calculateLandShare(newProjectData);

  return (
    <div className="project-creation">
      <h2>Proje Oluştur</h2>
      <form>
        <h3>Eski Yerleşim Yeri</h3>
        <input
          type="number"
          name="totalArea"
          placeholder="Toplam Alan (m²)"
          value={oldProjectData.totalArea}
          onChange={handleOldProjectChange}
        />
        <div className="block-form">
          <h4>Blok Bilgileri</h4>
          <input
            type="text"
            name="id"
            placeholder="Blok Numarası"
            value={block.id}
            onChange={handleBlockChange}
          />
          <input
            type="number"
            name="floors"
            placeholder="Kat Sayısı"
            value={block.floors}
            onChange={handleBlockChange}
          />
          <button type="button" onClick={() => addBlock(true)}>Blok Ekle</button>
        </div>

        <div className="apartment-form">
          <h5>Daire Bilgileri</h5>
          <select name="blockId" value={apartment.blockId} onChange={handleApartmentChange}>
            <option value="">Blok Seçin</option>
            {oldProjectData.blocks.map((block) => (
              <option key={block.id} value={block.id}>{block.id}</option>
            ))}
          </select>
          <input
            type="text"
            name="id"
            placeholder="Daire Numarası"
            value={apartment.id}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="owner"
            placeholder="Sahibi"
            value={apartment.owner}
            onChange={handleApartmentChange}
          />
          <input
            type="number"
            name="area"
            placeholder="Alan (m²)"
            value={apartment.area}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="tc"
            placeholder="TC Kimlik No"
            value={apartment.tc}
            onChange={handleApartmentChange}
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Doğum Tarihi"
            value={apartment.birthDate}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="parentName"
            placeholder="Ana Baba Adı"
            value={apartment.parentName}
            onChange={handleApartmentChange}
          />
          <button type="button" onClick={() => addApartment(true)}>Daire Ekle</button>
        </div>

        <h3>Yeni Yapı</h3>
        <input
          type="number"
          name="totalArea"
          placeholder="Toplam Alan (m²)"
          value={newProjectData.totalArea}
          onChange={handleNewProjectChange}
        />
        <div className="block-form">
          <h4>Blok Bilgileri</h4>
          <input
            type="text"
            name="id"
            placeholder="Blok Numarası"
            value={block.id}
            onChange={handleBlockChange}
          />
          <input
            type="number"
            name="floors"
            placeholder="Kat Sayısı"
            value={block.floors}
            onChange={handleBlockChange}
          />
          <button type="button" onClick={() => addBlock(false)}>Blok Ekle</button>
        </div>

        <div className="apartment-form">
          <h5>Daire Bilgileri</h5>
          <select name="blockId" value={apartment.blockId} onChange={handleApartmentChange}>
            <option value="">Blok Seçin</option>
            {newProjectData.blocks.map((block) => (
              <option key={block.id} value={block.id}>{block.id}</option>
            ))}
          </select>
          <input
            type="text"
            name="id"
            placeholder="Daire Numarası"
            value={apartment.id}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="owner"
            placeholder="Sahibi"
            value={apartment.owner}
            onChange={handleApartmentChange}
          />
          <input
            type="number"
            name="area"
            placeholder="Alan (m²)"
            value={apartment.area}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="tc"
            placeholder="TC Kimlik No"
            value={apartment.tc}
            onChange={handleApartmentChange}
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Doğum Tarihi"
            value={apartment.birthDate}
            onChange={handleApartmentChange}
          />
          <input
            type="text"
            name="parentName"
            placeholder="Ana Baba Adı"
            value={apartment.parentName}
            onChange={handleApartmentChange}
          />
          <button type="button" onClick={() => addApartment(false)}>Daire Ekle</button>
        </div>

        <div className="summary">
          <h3>Özet</h3>
          <h4>Eski Yerleşim Yeri</h4>
          {oldProjectWithShares.map((block, index) => (
            <div key={index}>
              <h5>Blok {block.id}</h5>
              {block.apartments.map((apartment, i) => (
                <p key={i}>Daire {apartment.id} - Sahibi: {apartment.owner} - Alan: {apartment.area} m² - Arsa Payı: {apartment.landShare.toFixed(2)} m²</p>
              ))}
            </div>
          ))}
          <h4>Yeni Yapı</h4>
          {newProjectWithShares.map((block, index) => (
            <div key={index}>
              <h5>Blok {block.id}</h5>
              {block.apartments.map((apartment, i) => (
                <p key={i}>Daire {apartment.id} - Sahibi: {apartment.owner} - Alan: {apartment.area} m² - Arsa Payı: {apartment.landShare.toFixed(2)} m²</p>
              ))}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default ProjectCreation;
