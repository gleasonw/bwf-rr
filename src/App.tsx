import styled from 'styled-components';
import React, {useState} from 'react';
import {exercises} from './exercises.tsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import './index.css';

//TODO: progress page

export default function App() {
    return (
        <Workout/>
    )
}

function Workout(props){
    const currentExercise = exercises[0];
    return (
        <StyledWorkout>
            <ExerciseBubble name={"pull"}/>
        </StyledWorkout>
    )
}

function ExerciseBubble(props){
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [tier, setTier] = useState(0);
    const [completedReps, setCompletedReps] = useState(0);
    const bubbleExercises = exercises[props.name].progression;
    const repRange = exercises[props.name].repRange
    const sets = exercises[props.name].sets
    return (
        <div>
            <h1>{bubbleExercises[categoryIndex].name}</h1>
            <ul>
                {bubbleExercises[categoryIndex].form.map((form) => <li>{form}</li>)}
            </ul>
            <LiteYouTubeEmbed
                id={bubbleExercises[categoryIndex].vidLink}
                title={'Form video'}
                params={`start=${bubbleExercises[categoryIndex].time}`}
            />
            <StyledRepRow>
                <div>
                    <h3>Reps completed</h3>
                    <StyledRepsText>
                        {completedReps}
                    </StyledRepsText>
                    <div>
                        <StyledButton onClick={() => setCompletedReps(completedReps - 1)}>-</StyledButton>
                        <StyledButton onClick={() => setCompletedReps(completedReps + 1)}>+</StyledButton>
                    </div>
                </div>
                <h1>Set {Math.floor(completedReps / repRange[0] + tier) + 1}</h1>

                <div>
                    <h3>Target reps</h3>
                    <StyledRepsText>
                        {repRange[0] + tier}
                    </StyledRepsText>
                </div>

            </StyledRepRow>
        </div>

    )
}

const StyledWorkout = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
`;

const StyledRepRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StyledButton = styled.button`
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;
    `;

const StyledRepsText = styled.div`
    font-size: 2rem;
    border: 1px solid black;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    `;