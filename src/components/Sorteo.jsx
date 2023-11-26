import React, { useState } from 'react';
import styles from './General.module.css';

function Sorteo() {
 
    const [participantsInput, setParticipantsInput] = useState('');
    const [winnersInput, setWinnersInput] = useState('');
    const [winners, setWinners] = useState([]);
    const [duplicateParticipants, setDuplicateParticipants] = useState([]);
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    
    const handleParticipantsChange = (event) => {
        const inputText = event.target.value;
    
        // Eliminar espacios en blanco al principio y al final de cada línea
        const sanitizedInput = inputText
          .split('\n')
          .map(line => line.trim())
          .join('\n');
    
         // Obtener participantes repetidos
        const duplicateParticipants = sanitizedInput
        .split('\n')
        .filter((participant, index, self) => self.indexOf(participant) !== index);

        setDuplicateParticipants(duplicateParticipants);

        setParticipantsInput(sanitizedInput);
      
        setButtonDisabled(duplicateParticipants.length > 0);
      };
    
    
    const handleWinnersChange = (event) => {
        setWinnersInput(event.target.value);
    };
    
    const handleSorteo = () => {
        const participants = participantsInput.split('\n').filter(participant => participant.trim() !== '');
    
        // Validar que haya participantes y el número de ganadores sea válido
        if (participants.length > 0 && winnersInput > 0 && winnersInput <= participants.length) {
            // Copiar el array de participantes para no modificar el estado original
            const copyParticipants = [...participants];
            
            // Realizar el sorteo aleatorio
            const randomWinners = [];
            for (let i = 0; i < winnersInput; i++) {
                const randomIndex = Math.floor(Math.random() * copyParticipants.length);
                randomWinners.push(copyParticipants.splice(randomIndex, 1)[0]);
            }
            
            setWinners(randomWinners);
        } else {
            alert('Por favor, ingresa un número válido de ganadores y asegúrate de tener suficientes participantes.');
        }
        setButtonDisabled(false);
    };
    
    
    
    return (
      <div className={styles.contenedorCentrado}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '10px' }}>
            Participantes:
            </label>
            <textarea
            value={participantsInput}
            onChange={handleParticipantsChange}
            className={styles.text}
            placeholder="Participantes"
            />
             {duplicateParticipants.length > 0 && (
          <p style={{ color: 'red' }}>
            Error: Los siguientes participantes ya están en la lista: {duplicateParticipants.join(', ')}
          </p>
        )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: "50px",marginRight: "50px"}}>
            <label>
            Cantidad de ganadores:
            </label>
            <br />
            <input
            type="number"
            value={winnersInput}
            onChange={handleWinnersChange}
            />
            <br />
            <button onClick={handleSorteo} disabled={isButtonDisabled}>
                Realizar Sorteo
            </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft: "50px",marginRight: "50px" }}>
            <h2>Ganadores:</h2>
            <br />
            <ul>
            {winners.map((winner, index) => (
                    <li key={index}>
                        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{index + 1}.</span> {winner}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    );
}
        
export default Sorteo;