import styled from 'styled-components';
import React, {useState} from 'react';
import {exercises} from './exercises.tsx';

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <WarmUp/>
                <Workout/>
                <Stretch/>
            </header>
        </div>
    )
}

function WarmUp(props) {
    return (
        <StyledWarmUp>
            <h2>Warm Up</h2>
            <p>Jumping Jacks</p>
            <p>Push Ups</p>
            <p>Squats</p>
        </StyledWarmUp>
    )
}

function Workout(props){
    return (
        <StyledWorkout>
            <WorkoutPair>
                <ExerciseBubble name={"pull"} sets={3} reps={10}/>
                <ExerciseBubble name={"squat"} sets={3} reps={10}/>
            </WorkoutPair>
            <WorkoutPair>
            </WorkoutPair>
            <WorkoutPair>
            </WorkoutPair>
        </StyledWorkout>
    )
}

function Stretch(props) {
    return (
        <StyledWorkout>
        </StyledWorkout>
    )
}

function ExerciseBubble(props){
    const [tier, setTier] = useState(0);
    const [completedReps, setCompletedReps] = useState(0);
    const bubbleExercises = exercises[props.name];
    return (
        <div>
            <h3>{props.name}</h3>
            <StyledExerciseBubble>
                current exercise: {bubbleExercises[tier].name}
                form description: {bubbleExercises[tier].form}
                media: {bubbleExercises[tier].vidLink}

                sets: {bubbleExercises[tier].sets}
                reps: {bubbleExercises[tier].reps}

                <button onClick={() => setTier(tier < Object.keys(bubbleExercises).length - 1 ? tier + 1 : tier)}>+</button>
                <button onClick={() => setTier(tier > 0 ? tier - 1 : 0)}>-</button>
            </StyledExerciseBubble>
        </div>
    )
}


const StyledWarmUp = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledWorkout = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledExerciseBubble = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

const WorkoutPair = styled(StyledWorkout)`
    flex-direction: column !important;
    background-color: ${props => props.bColor} 
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    width: 100%;
`;
