import styled from "styled-components";
import { Colors } from "../../config";

const RoleSelectionContainer = styled.div`
    position: absolute;
    top: 20%;
    height: 100%;
    width: 85%;
    left: 2.5%;
`;

const RolesContainer = styled.div`
    width: 100%;
    height: 5%;
    border: 1px solid grey;
    border-radius: 0 16px 16px 0;
    position: absolute;
    top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 16px;
`;
const RoleSection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(1) {
        // border-left: 2px solid ${Colors.primary};
        border-right: 2px solid ${Colors.primary};
    }
    &:nth-child(3) {
        border-left: 2px solid ${Colors.primary};
        // border-right: 2px solid ${Colors.primary};
    }
`;
const RoleName = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${props => props.active ? 'white' : 'grey'};
    background: ${props => props.active ? Colors.primary : 'transparent'};
    border-radius: ${props => props.br ? props.br : 'none'};
`;


const _Title = styled.h2`
    color: grey;
`;

const RoleSelection = ({ currentRole, setCurrentRole, roles }) => {
    const _buildRoleName = (key) => {
        let split = key.split('_');
        return split.map((value) => value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase() + ' ');
    }

    return (
        <RoleSelectionContainer>
            <_Title>Role Selection</_Title>
            <RolesContainer>
                {roles && roles.map((role, index) => {
                    let borderRadius = null;
                    if (index === 0) {
                        borderRadius = '16px 0 0 16px';
                    } else if (index === 4) {
                        borderRadius = '0 16px 16px 0';
                    }
                    return (
                        <RoleSection onClick={(e) => {
                            e.preventDefault();
                            setCurrentRole(role);
                        }} key={index}>
                            <RoleName br={borderRadius} active={currentRole === role} key={index}>{_buildRoleName(role)}</RoleName>
                        </RoleSection>
                    );
                })}
            </RolesContainer>
        </RoleSelectionContainer>
    );
}

export { 
    RoleSelection
}