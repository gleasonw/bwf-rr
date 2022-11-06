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
            <div>
                <h3>First pair</h3>
                <WorkoutPair>
                    <ExerciseBubble name={"pull"}/>
                    <ExerciseBubble name={"squat"}/>
                </WorkoutPair>
            </div>
            <div>
                <h3>Second pair</h3>
                <WorkoutPair>
                    <ExerciseBubble name={"dip"}/>
                    <ExerciseBubble name={"hinge"}/>
                </WorkoutPair>
            </div>
            <div>
                <h3>Third pair</h3>
                <WorkoutPair>
                    <ExerciseBubble name={"row"}/>
                    <ExerciseBubble name={"push"}/>
                </WorkoutPair>
            </div>
            <WorkoutPair>
                <h3>Core triplet</h3>
                <ExerciseBubble name={"core-anti-extension"}/>
                <ExerciseBubble name={"core-anti-rotation"}/>
                <ExerciseBubble name={"core-extension"}/>
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
    const bubbleExercises = exercises[props.name].progression;
    const repRange = exercises[props.name].repRange
    const sets = exercises[props.name].sets
    return (
        <StyledExerciseBubble>
            <p>
                current exercise: {bubbleExercises[tier].name}
            </p>
            <p>
                form description:
                <ul>
                    {bubbleExercises[tier].form.map((form) => <li>{form}</li>)}
                </ul>
            </p>
            <p>
                media: {bubbleExercises[tier].vidLink}
            </p>

            sets: {sets}
            reps: {repRange}

            <button onClick={() => setTier(tier < Object.keys(bubbleExercises).length - 1 ? tier + 1 : tier)}>+</button>
            <button onClick={() => setTier(tier > 0 ? tier - 1 : 0)}>-</button>
        </StyledExerciseBubble>
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
    background-color: ${props => props.bColor} 
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
`;
