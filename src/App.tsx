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
    const [repsCompletedForSet, setRepsCompletedForSet] = useState(0);
    const [totalRepsCompleted, setTotalRepsCompleted] = useState(0);
    const [setNumber, setSetNumber] = useState(1);
    const bubbleExercises = exercises[props.name].progression;
    const repRange = exercises[props.name].repRange
    const totalSetsForNextTier = exercises[props.name].sets

    function handleRepChange(reps){
        if(reps % repRange[0] + tier === 0) {
            setTotalRepsCompleted(totalRepsCompleted + reps);
            setRepsCompletedForSet(0);
            if(setNumber === totalSetsForNextTier){
                setSetNumber(1);
                setTier(tier + 1);
                setCategoryIndex(categoryIndex + 1);
            }
            return;
        }
        setRepsCompletedForSet(reps);
    }

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
                <RepCounter
                    completedReps={repsCompletedForSet}
                    totalRepsCompleted={totalRepsCompleted}
                    onAddClick={() => handleRepChange(repsCompletedForSet + 1)}
                    onRemoveClick={() => handleRepChange(repsCompletedForSet - 1)}
                />
                <SetViewer
                    completedReps={repsCompletedForSet}
                    setNumber={setNumber}
                />
                <TargetReps target={repRange[0] + tier}/>
            </StyledRepRow>
        </div>

    )
}

function RepCounter(props){
    return(
        <div>
            <h3>Reps for set</h3>
            <div>
                Total reps for exercise: {props.totalRepsCompleted}
            </div>
            <StyledRepsText>
                {props.completedReps}
            </StyledRepsText>
            <div>
                <StyledButton onClick={() => props.onRemoveClick()}>-</StyledButton>
                <StyledButton onClick={() => props.onAddClick()}>+</StyledButton>
            </div>
        </div>
    )
}

function SetViewer(props){
    return(
        <div>
            <h1>Set {props.setNumber}</h1>
        </div>
    )
}

function TargetReps(props){
    return(
        <div>
            <h3>Target reps:</h3>
            <StyledRepsText>
                {props.target}
            </StyledRepsText>
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