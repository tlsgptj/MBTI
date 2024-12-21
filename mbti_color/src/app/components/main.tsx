import React, { useState } from "react";

interface MBTIColor {
    id : number;
    type : String;
    color : String;
}

const App: React.FC = () => {
    const [mbtiColors, setMbtiColors] = useState<MBTIColor[]>([
        { id: 1326, type: 'ENTJ', color : "#9441FF"},
        { id: 1325, type: 'INFJ', color: '#4176FF' },
        { id: 1324, type: 'ESTP', color: '#FFB341' },
        { id: 1323, type: 'ISFJ', color: '#41C6FF' },
        { id: 1322, type: 'ISTP', color: '#353535' },
        { id: 1321, type: 'ISTP', color: '#FF4185' },
        { id: 1320, type: 'ESTP', color: '#FFFFFF' },    
    ]);
}

const [newMBTI, setNewMBTI] = useState("");
const [newColor, setNewColor] = useState("");

const addNewColor = () => {
    if (newMBTI && newColor) {
        setMbtiColors([
            ...mbtiColors,
            {id: Date.now(), type: newMBTI, color: newColor},
        ]);
        setNewMBTI("");
        setNewColor("");
    }


return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>MBTI별 좋아하는 컬러</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mbtiColors.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <span style={{ width: '50px' }}>{item.id}</span>
            <span style={{ width: '50px' }}>{item.type}</span>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: item.color,
                margin: '0 10px',
              }}
            ></div>
            <span>{item.color}</span>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="MBTI"
          value={newMBTI}
          onChange={(e) => setNewMBTI(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Color (e.g., #FFFFFF)"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={addNewColor}>+ 새 컬러 등록하기</button>
      </div>
    </div>
  );
};

