import styled from "styled-components";
import { Colors } from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const StepsContainer = styled.div`
    height: 3.3%;
    display: flex;
    justify-content: space-evenly;
    position: relative;
`;

const StepContainer = styled.div`
    width: ${props => `calc(100%/${props.width})`};
    display: flex;
    color: ${props => props.isCompleted ? 'white' : 'grey'};
    align-items: center;
    position: relative;
    border: 0.25px solid ${(props) => {
        if (props.isCompletedStep) {
            return '#00ff00;';
        } else if (props.isCurrentStep) {
            return 'white;';
        } else {
            return '#ff0000;';
        }
    }});
`;

const StepNumber = styled.h6`
    position: absolute;
    left: 2.5%;
`;

const StepTitle = styled.h5`
    position: absolute;
    left: 7.5%;
    color: ${(props) => {
        console.log(props);
        if (props.currentStep) {
            return 'white;';
        } else {
            return props.color ? '#00ff00;' : '#ff0000;';
        }
    }});
`;

const StepCompletion = styled.div`
    position: absolute;
    right: 5%;
`;

const Steps = ({ currentStep, steps }) => {

    const numberSteps = steps.length;

    return (
        <StepsContainer>
            {steps && steps.map((step, index) => {
                console.log("isCompleted: ", step);
                return (
                    <StepContainer key={index} width={numberSteps} isCompletedStep={step.isComplete} isCurrentStep={currentStep === index}>
                       <StepNumber>{index + 1}</StepNumber>
                       <StepTitle currentStep={currentStep === index} color={step.isComplete}>{step.name}</StepTitle>
                       <StepCompletion>
                       <FontAwesomeIcon className='stepIcon' icon={step.isComplete ? faCircleCheck : faCircleXmark} size="1x" width="25px" color={step.isComplete ? '#00ff00' : 'grey'}/>
                       </StepCompletion>
                    </StepContainer>
                )
            })}
        </StepsContainer>
    )
}

export {
    Steps
}